import Image from "next/image";
import Button from "../../button";

interface Props {
  cssClasses?: string;
}

const FreeDownload = ({ cssClasses }: Props) => {
  return (
    <article
      className={`flex flex-col items-center gap-5 w-full max-w-[400px] ${cssClasses}`}
    >
      <h2>August 2024 Edition</h2>
      <Image
        src="/assets/placeholders/Cover-Aug-2024.jpg"
        alt="Free download"
        width={400}
        height={565.64}
      />
      <Button
        url="/assets/placeholders/Real-Brides-Magazine-August-2024.pdf"
        cssClasses="w-full"
      >
        Free Download
      </Button>
    </article>
  );
};

export default FreeDownload;
