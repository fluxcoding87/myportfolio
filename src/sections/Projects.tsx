import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import musixImage from "@/assets/images/musixapp.png";
import GitIcon from "@/assets/icons/github.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import carTrek from "@/assets/images/cartrek.png";
const portfolioProjects = [
  {
    company: "Portfolio Project",
    year: "2024",
    title: "AI Startup Landing Page",
    results: [
      { title: "Built on Next.js framework" },
      { title: "Tailwind CSS for Styling" },
      { title: "Framer Motion for Animation" },
    ],
    link: "https://ailandingpage-rouge.vercel.app/",
    gitLink: "https://github.com/fluxcoding87/ailandingpage",
    image: aiStartupLandingPage,
  },
  {
    company: "Portfolio Project",
    year: "2024",
    title: "Musix App",
    results: [
      { title: "Used Spotify API, for Desktop Only" },
      { title: "Built on React.JS" },
      { title: "You can play songs on this site" },
    ],
    link: "https://musixapp.onrender.com/",
    gitLink: "https://github.com/fluxcoding87/musixapp",
    image: musixImage,
  },
  {
    company: "Portfolio Project",
    year: "2021",
    title: "CarTrek Car Marketplace App",
    results: [
      { title: "Implemented Login Feature using Clerk." },
      { title: "Built on React.JS using Tailwind CSS" },
      { title: "Implemented Chat feature using SendBird" },
      { title: "Users can buy and sell cars on this app" },
    ],
    link: "https://cartrek.vercel.app/",
    gitLink: "https://github.com/fluxcoding87/cartrek",
    image: carTrek,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See how i encounterd the journey of learning the latest technologies
          by building stunning projects."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, idx) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0
              md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${idx * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex items-center gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col md:flex-row lg:flex-col gap-3">
                    <a href={project.link} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                        <span>Visit Live Site</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    </a>
                    <a href={project.gitLink} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                        <span>Github Repo Link</span>
                        <GitIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-3xl outline outline-white/30 outline-offset-0"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
