import ProjectCard from "./ProjectCard";
import {
  vir,
  cal,
  pho,
  blog,
  TutorDashboard,
  SunsetBright,
  KimGym,
} from "../tech";
const Project = () => {
  const projects = [
    {
      image: vir,
      title: "Virtual Assistance Portfolio",
      description:
        "A professional portfolio website showcasing virtual assistant services. Designed to highlight skills, experience, and client testimonials with a clean and responsive layout.",
      stack: ["Next.js", "TailwindCSS", "TypeScript"],
      demoLink: "https://beatriceva.netlify.app/",
    },

    {
      image: cal,
      title: "Calculator ",
      description:
        "This calculator app  tested my CSS and JS skills especially. If you are wanting to practice using Grid, this challenge will be perfect for you",
      stack: ["Vite", "Html", "Css", "Javascript"],
      demoLink:
        "https://github.com/peterjames3/calculator/tree/main/vite-project",
    },
    {
      image: pho,
      title: "Photography Portfolio",
      description:
        "This portfolio website showcases a clean and responsive design, highlighting photography work. Built with modern technologies to enhance performance and user experience.",
      stack: ["Next.js", "TailwindCSS", "TypeScript"],
      demoLink: "https://photographer-w-ups4.vercel.app/",
    },
    {
      image: blog,
      title: "Modern Blog Platform",
      description:
        "A sleek and minimalistic blog website designed to share articles seamlessly. Built with Next.js and powered by Sanity CMS for content management. Features include responsive design, optimized performance, and a focus on readability.",
      stack: ["Next.js", "TailwindCSS", "TypeScript", "Sanity CMS"],
      demoLink: "https://nextjs-sanity-blog-post-vowd.vercel.app/",
    },
    {
      image: TutorDashboard,
      title: "Tutor Dashboard",
      description:
        "A dynamic and user-friendly dashboard for tutors to manage their activities. Built with Next.js App Router and TypeScript, this application emphasizes clean UI and secure authentication. Includes features like protected routes, responsive design, and scalable architecture.",
      stack: [
        "Next.js",
        "TailwindCSS",
        "NextAuth",
        "SWR",
        "TypeScript",
        "App Router",
      ],
      demoLink: "https://tutor-dashboard-self.vercel.app/",
    },
    {
      image: SunsetBright,
      title: "Solar company Website",
      description:
        "A modern and minimalistic website platform built with Next.js and powered by Sanity CMS. Sunset Bright offers a seamless content management experience with a focus on performance, responsiveness, and readability.",
      stack: [
        "Next.js",
        "TailwindCSS",
        "Sanity Cms",
        "SWR",
        "TypeScript",
        "App Router",
      ],
      demoLink: "https://sunset-bright-y34f.vercel.app/",
    },
    {
      image: KimGym,
      title: "KimGym - Your Fitness Partner",
      description:
        "A dynamic and engaging fitness website designed to showcase gym services, trainers, and programs. Built with React and TailwindCSS, KimGym emphasizes performance, responsiveness, and user-friendly navigation. Features include animated sliders, FAQs, and SEO optimization with React Helmet.",
      stack: ["React", "TailwindCSS", "Framer Motion", "React Helmet"],
      demoLink: "https://kimgym.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="max-w-[1400px] py-20 my-0  mx-auto px-4">
      <h2
        data-aos="fade-left"
        data-aos-delay="300"
        className="text-5xl text-center text-gradient-2 font-bold font-poppins py-6"
      >
        Projects
      </h2>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-3 ss:px-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            stack={project.stack}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
