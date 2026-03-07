import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
};


const projects: Project[] = [
  {
    title: "GAI Development",
    description:
      "Java desktop application for managing a car import business with structured workflows and data persistence.",
    tech: ["Java", "JavaFX", "SQLite", "MVC"],
    image: "/Import_export.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Showroom 3D",
    description:
      "Web application featuring a 3D showroom experience, Stripe payment integration, and SendGrid email notifications.",
    tech: ["React", "Node.js", "Stripe", "SendGrid", "OpenAi", "StabilityAI"],
    image: "/ShowroomAi.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Museum Stats",
    description:
      "Java application designed to generate statistical reports from museum activity and visitor data.",
    tech: ["Java", "Analytics", "Reporting", "Data Visualization", "javaSwing"],
    image:"/LogoMuseumstats.jpg",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">Projects</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60"
          >
            <div className="relative h-44 w-full border-b border-zinc-800">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-zinc-300 leading-7">{project.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((stack) => (
                  <li
                    key={stack}
                    className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200"
                  >
                    {stack}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
