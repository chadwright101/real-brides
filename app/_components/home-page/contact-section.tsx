"use client";

import { useState } from "react";
import Link from "next/link";

import { showEmailAddress, showPhoneNumber } from "@/app/_actions/actions";
import ContactForm from "@/app/_components/utils/contact-form";
import Image from "next/image";

const ContactSection = () => {
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showSpinnerPhone, setShowSpinnerPhone] = useState(false);
  const [showSpinnerEmail, setShowSpinnerEmail] = useState(false);

  const handleShowPhoneNumber = async () => {
    setShowSpinnerPhone(true);
    const phoneNumber = await showPhoneNumber();
    setShowPhone(phoneNumber);
    setShowSpinnerPhone(false);
  };

  const handleShowEmailAddress = async () => {
    setShowSpinnerEmail(true);
    const emailAddress = await showEmailAddress();
    setShowEmail(emailAddress);
    setShowSpinnerEmail(false);
  };

  return (
    <section className="pb-10 grid gap-7 max-w-[1280px] mx-auto overflow-hidden tablet:grid-cols-2 tablet:bg-purple tablet:pt-10 tablet:pb-0 tablet:px-5 desktop:px-0 desktop:grid-cols-[1fr_550px] desktop:gap-0">
      <h2 className="hidden tablet:block text-subheading col-span-2 text-center font-bold text-white mb-2 desktop:mb-0">
        Get in touch
      </h2>
      <div className="grid gap-7">
        <div className="grid gap-7">
          <h2 className="text-subheading text-center font-bold mb-5 tablet:hidden">
            Get in touch
          </h2>
          <div className="grid gap-3 px-5 phone:grid-cols-[75px_1fr] desktop:px-[120px]">
            <h3 className="text-subheading font-bold tablet:text-white">
              Email:
            </h3>
            {showEmail === "Show email address" ? (
              <button
                onClick={handleShowEmailAddress}
                className="text-paragraph self-center py-3 px-2 -my-3 -mx-2 hover:cursor-pointer tablet:p-0 tablet:m-0 italic text-link place-self-start tablet:text-white tablet:hover:text-white/80"
                aria-label="Show email address"
              >
                {showSpinnerEmail ? <div className="spinner"></div> : showEmail}
              </button>
            ) : (
              <Link
                href={`mailto:${showEmail}`}
                className="text-paragraph self-center tablet:hover:text-pink place-self-start text-link tablet:text-white tablet:hover:text-white/80"
              >
                {showEmail}
              </Link>
            )}
          </div>
          <div className="grid gap-3 px-5 phone:grid-cols-[75px_1fr] desktop:px-[120px]">
            <h3 className="text-subheading font-bold tablet:text-white">
              Phone:
            </h3>
            {showPhone === "Show phone number" ? (
              <button
                onClick={handleShowPhoneNumber}
                className="text-paragraph self-center py-3 px-2 -my-3 -mx-2 hover:cursor-pointer tablet:p-0 tablet:m-0 italic text-link place-self-start tablet:text-white tablet:hover:text-white/80"
                aria-label="Show phone number"
              >
                {showSpinnerPhone ? <div className="spinner"></div> : showPhone}
              </button>
            ) : (
              <Link
                href={`tel:${showPhone}`}
                className="text-paragraph self-center tablet:hover:text-pink place-self-start text-link tablet:text-white tablet:hover:text-white/80"
              >
                {showPhone}
              </Link>
            )}
          </div>
        </div>
        <div className="bg-purple pt-10 px-5 p-6 gap-10 overflow-hidden desktop:px-[120px] tablet:pt-0">
          <ContactForm />
          <Image
            src="/assets/images/protea-flower.png"
            alt="Protea flower image"
            width={518}
            height={544}
            className="translate-y-5 mx-auto rotate-[-3.4deg] tablet:rotate-[-6.07deg] tablet:hidden"
            style={{ marginBottom: "calc(-70% - 150px)" }}
          />
        </div>
      </div>
      <Image
        src="/assets/images/protea-flower.png"
        alt="Protea flower image"
        width={518}
        height={1099.52}
        className="hidden tablet:block -translate-y-5 -mb-[200%] translate-x-5 rotate-[-6.07deg] desktop:-translate-x-12"
      />
    </section>
  );
};

export default ContactSection;
