import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col items-center justify-between pb-10">
      <Image src="/main.png" alt="Dungeon Forged Vs" width={600} height={780} />
      {/* First Paragraph */}
      <div className="grid gap-8 place-items-center text-gray-700 text-2xl pt-10 px-4">
        <p className="text-justify">
          Welcome to Dungeon Forged S&C, where your fitness goals become
          reality. Here, we don&apos;t just offer strength and conditioning—we
          ignite your potential and fuel your transformation. Coach Sutton is
          committed to pushing you beyond your limits, crafting bespoke workout
          plans that align with your ambitions.
        </p>
        <p className="text-justify">
          With a hardcore facility and an energizing atmosphere, every training
          is designed to challenge, motivate, and elevate you. Join us at
          Dungeon Forged S&C and discover a team where your dedication turns
          into success. Embrace the journey, be dungeon forged, and rise to your
          best self with us.
        </p>
      </div>
    </div>
  );
}
