import Image from "next/image";

export default function Contact() {
  return (
    <div className="h-screen grid lg:place-content-center">
      <div className="flex flex-col gap-20 lg:flex-row lg:gap-56 pt-3 lg:pt-0">
        <div className="sm:w-screen md:w-auto grid place-content-center">
          <iframe
            width={400}
            height={300}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.770948131594!2d-86.26307292421116!3d39.9017602868216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886caaa1d94354af%3A0xc84b0f62b17045c8!2s8168%20Zionsville%20Rd%2C%20Indianapolis%2C%20IN%2046268!5e0!3m2!1sen!2sus!4v1722117286992!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="sm:w-full"
          />
        </div>
        <div className="flex gap-20 items-center justify-center">
          <a
            href="https://www.facebook.com/DForgedSC?mibextid=ZbWKwL"
            target="_blank"
          >
            <Image
              src="/facebook.svg"
              alt="Facebook link"
              height={100}
              width={100}
            />
          </a>
          <a
            href="https://www.instagram.com/dungeonforged_sc?igsh=cm80eThtbzhtN3Bv"
            target="_blank"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram link"
              height={100}
              width={100}
            />
          </a>
        </div>
        <div className=" grid place-content-center">
          <p className="text-xl">Mike Sutton</p>
          <p>8168 Zionsville Rd, Indianapolis, IN 46268</p>
          <p>bedungeonforged@gmail.com</p>
          <p>504-312-9220</p>
        </div>
      </div>
    </div>
  );
}
