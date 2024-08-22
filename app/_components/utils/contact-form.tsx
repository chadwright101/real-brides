"use client";

import { useEffect, useState } from "react";

import classNames from "classnames";

import Button from "./button";
import Recaptcha from "@/app/_lib/Recaptcha";
import { sendEmail } from "@/app/_actions/actions";

const ContactForm = () => {
  const [submissionStartTime, setSubmissionStartTime] = useState(0);
  const [validateRecaptcha, setValidateRecaptcha] = useState(false);
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const startSubmissionTimer = () => {
      setSubmissionStartTime(new Date().getTime());
    };
    startSubmissionTimer();
    if (showEmailSubmitted) {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showEmailSubmitted]);

  const handleRecaptchaChange = (value: any) => {
    if (value === null) {
      setValidateRecaptcha(false);
      console.log("Recaptcha expired");
    } else {
      const elapsedTime = new Date().getTime() - submissionStartTime;
      if (elapsedTime < 3000) {
        console.error("Form submitted too quickly. Possible bot activity.");
        return;
      } else {
        setValidateRecaptcha(!!value);
      }
    }
  };

  return (
    <div className={showEmailSubmitted ? "pt-10 tablet:pt-5" : ""}>
      {!showEmailSubmitted && (
        <p className="mb-5 text-white tablet:text-left">
          Please fill out the form below and we will be in touch ASAP...
        </p>
      )}
      {showEmailSubmitted ? (
        <>
          <p className="text-[20px] text-center text-white tablet:text-left pb-5">
            Your email has been sent, we will be in touch soon.
          </p>
        </>
      ) : (
        <form
          className="flex flex-col gap-10"
          action={async (formData) => {
            await sendEmail(formData);
            setShowEmailSubmitted(true);
          }}
        >
          <input type="hidden" name="_honey" className="hidden" />
          <label
            htmlFor="emailAddress"
            className="grid gap-4 text-subheading uppercase text-white"
          >
            Email:
            <input
              type="email"
              id="emailAddress"
              name="email"
              className="border border-black/50 bg-white h-10 py-4 px-3 rounded font-thin"
              placeholder="Email address goes here..."
              autoComplete="email"
              required
            />
          </label>

          <label
            htmlFor="fullName"
            className="grid gap-4 text-subheading uppercase text-white"
          >
            Name:
            <input
              type="text"
              id="fullName"
              name="name"
              className="border border-black/50 bg-white h-10 py-4 px-3 rounded font-thin"
              placeholder="Name goes here..."
              autoComplete="name"
              required
            />
          </label>

          {!showMessage ? (
            <Button
              type="button"
              cssClasses="tablet:self-start"
              onClick={() => setShowMessage(true)}
              form
              whiteButton
            >
              Next
            </Button>
          ) : (
            <>
              <label
                htmlFor="message"
                className="grid gap-4 text-subheading uppercase text-white"
              >
                Message:
                <textarea
                  id="message"
                  name="message"
                  className="border border-black/50 rounded bg-white py-4 px-3 font-thin"
                  rows={5}
                  placeholder="Message goes here..."
                  required
                ></textarea>
              </label>
              <Button
                type="submit"
                form
                cssClasses={classNames("tablet:self-start", {
                  "opacity-75 desktopSmall:cursor-not-allowed desktopSmall:hover:px-9 desktopSmall:hover:mx-0":
                    !validateRecaptcha,
                  "hover:desktopSmall:opacity-90": validateRecaptcha,
                })}
                disabled={!validateRecaptcha}
                whiteButton
              >
                Submit
              </Button>
              {!validateRecaptcha && (
                <Recaptcha onChange={handleRecaptchaChange} />
              )}
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
