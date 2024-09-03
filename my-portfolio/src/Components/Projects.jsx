import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-10 text-center text-5xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 ">
              <h4 className="mb-2 text-purple-700 font-semibold text-2xl">
                {project.title}
              </h4>
              <p className="mb-4 text-neutral-900 text-xl">
                {project.description}
              </p>
              <p className="mb-4 mt-2 text-neutral-900 text-xl">
                <a href={project.link}
                  className="text-pink-500 hover:underline"
                >
                 Explore live by clicking here
                </a>
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-400 px-2 py-1 text-sm font-medium text-black-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
