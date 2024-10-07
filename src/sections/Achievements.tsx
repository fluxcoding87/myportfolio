import UniversityIcon from "@/assets/icons/university.svg";
import companyLogo from "@/assets/images/companylogo.jpeg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";
const experience = [
  {
    title: "Bachelors Of Technology in Computer Science",
    subtitle: "B.Tech CSE @ Medicaps University Indore",
    duration: "Aug 2020 - July 2024 ",
    description:
      "Graduated in 2024 with an overall CGPA of 8.4 out of 10. Gained a strong foundation in core computer science subjects, including Data Structures, Algorithms, Operating Systems, Database Management Systems, and Object-Oriented Programming. ",
    icon: UniversityIcon,
  },
  {
    title: "Project Intern",
    subtitle: "Internship @ ProsperaSoft Solutions, Pune",
    duration: "Jan 2024 - April 2024",
    description:
      "Worked as a project intern and got hands on experience in various technologies that involves full stack development which included React.js for the front-end and Node.js for the backend. ",
    icon: companyLogo,
  },
];

export const AchievementsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Education & Experience"
          title="What I Have Accomplished Till Now."
          description="This includes all the work experience I have till date including my education."
        />
        <div className="mt-12 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:20s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {experience.map((exp, idx) => (
                  <Card
                    key={exp.title}
                    className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      {idx === 0 && (
                        <UniversityIcon className="max-h-full max-w-8" />
                      )}
                      {idx > 0 && (
                        <Image
                          src={exp.icon}
                          alt={exp.title}
                          className="max-h-full max-w-8"
                        />
                      )}

                      <div className="flex flex-col">
                        <div className="flex-none text-xs mb-2 font-extrabold tracking-widest bg-gradient-to-r from-emerald-500 to-sky-300 text-transparent bg-clip-text">
                          {exp.duration}
                        </div>
                        <div className="font-semibold">{exp.title}</div>
                        <div className="text-sm text-white/40 mt-2">
                          {exp.subtitle}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {exp.description}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
