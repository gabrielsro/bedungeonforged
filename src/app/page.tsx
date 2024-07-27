import Image from "next/image";

export default function Home() {
  return (
    <div className="pb-20">
      <div className="flex flex-col items-center pb-10">
        <Image
          src="/main.png"
          alt="Dungeon Forged Vs"
          width={600}
          height={780}
        />
        <div className="grid gap-8 place-items-center text-gray-700 text-2xl pt-10 px-4 lg:px-56">
          <p className="text-justify">
            Welcome to Dungeon Forged S&C, where your fitness goals become
            reality. Here, we don&apos;t just offer strength and conditioning—we
            ignite your potential and fuel your transformation. Coach Sutton is
            committed to pushing you beyond your limits, crafting bespoke
            workout plans that align with your ambitions.
          </p>
          <p className="text-justify">
            With a hardcore facility and an energizing atmosphere, every
            training is designed to challenge, motivate, and elevate you. Join
            us at Dungeon Forged S&C and discover a team where your dedication
            turns into success. Embrace the journey, be dungeon forged, and rise
            to your best self with us.
          </p>
        </div>
      </div>
      <div className="grid place-content-center">
        <div className="flex gap-3 py-10 pl-4 pr-10 bg-black lg:gap-8 overflow-x-auto w-screen lg:w-lg-screen-video-container lg:rounded-lg lg:px-20">
          <iframe
            src="https://www.youtube.com/embed/9-dsAhoaUnI"
            title="July 27, 2024"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-[9/16] w-sm-short lg:w-lg-short"
          />
          <iframe
            src="https://www.youtube.com/embed/seKOtG0tNvg"
            title="Football Training 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-[9/16] w-sm-short lg:w-lg-short"
          />
          <iframe
            src="https://www.youtube.com/embed/KAAIEkvp9l8"
            title="softball agility"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-[9/16] w-sm-short lg:w-lg-short"
          />

          <iframe
            src="https://www.youtube.com/embed/9ayvWHhe6iw"
            title="Football Training"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-[9/16] w-sm-short lg:w-lg-short"
          />
          <iframe
            src="https://www.youtube.com/embed/k3o9nC_pXh4"
            title="Dungeon Yoga"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-[9/16] w-sm-short lg:w-lg-short"
          />
          <iframe
            src="https://www.youtube.com/embed/rN8apxvYdeA"
            title="Finisher"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-[9/16] w-sm-short lg:w-lg-short"
          />
          <iframe
            width="860"
            height="484"
            src="https://www.youtube.com/embed/89sV3fYqdM8"
            title="strength training 2"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-video w-sm-short lg:w-lg-short"
          />
        </div>
      </div>
    </div>
  );
}
