import { socialLinks } from "@/data";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 mask-radial-bottom -z-10"></div>

      <div className="container">
        <div className="py-6 text-sm border-t border-white/15 flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {socialLinks.map((social) => (
              <a
                href={social.href}
                key={social.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{social.title}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
