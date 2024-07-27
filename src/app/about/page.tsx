import Image from "next/image";

export default function About() {
  return (
    <div className="pt-13 px-10 grid place-items-center lg:pt-16">
      <div className="flex flex-col gap-4 pb-13 lg:flex-row">
        <Image
          src="/mindset-white.png"
          alt="Mindset phrase"
          width={500}
          height={650}
        />

        <div className="flex flex-col gap-4 text-lg lg:max-w-lg-screen-max-col text-pretty lg:text-lg">
          <p>
            Mike brings a wealth of experience to the health and fitness
            industry, underpinned by over a decade of professional sports
            involvement and coaching at both high school and professional
            levels. His athletic career spanned more than 10 years, with notable
            achievements in basketball and football. As one of the top prospects
            in the nation, he earned a scholarship to play football at Louisiana
            State University. Through his extensive experience as both an
            athlete and a coach, Mike has developed a deep understanding of
            strength training, conditioning, and injury prevention.
          </p>
          <p>
            Since 2008, Mike has been a certified personal trainer with the
            National Federation of Personal Trainers (NFPT). His expertise lies
            in designing effective muscle group combinations tailored to his
            clients' specific goals, whether they are sport-specific, general
            fitness, or weight loss. Mike's approach emphasizes dedication, hard
            work, and resilience, believing that these principles lead to
            significant improvements in psychological, emotional, and physical
            well-being.
          </p>
          <p>
            Mike advocates for activity-specific training to enhance athletic
            performance and overall quality of life. He stresses that variety
            and consistency in training are crucial for success. Known for his
            strong work ethic, motivational skills, and commitment to holding
            clients accountable, Mike is driven by witnessing his clients
            achieve remarkable results.
          </p>
        </div>
      </div>
    </div>
  );
}
