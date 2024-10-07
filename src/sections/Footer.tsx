import LinkedInIcon from "@/assets/icons/linkedin.svg";
import GithubIcon from "@/assets/icons/github.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/naman-pandey-981323200/",
    icon: <LinkedInIcon className="size-4" />,
  },
  {
    title: "GitHub",
    href: "https://github.com/fluxcoding87",
    icon: <GithubIcon className="size-4" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/naman._87/",
    icon: <InstagramIcon className="size-4" />,
  },
];
export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute -z-10 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                {link.icon}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
