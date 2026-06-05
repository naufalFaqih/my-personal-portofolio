import Link from 'next/link';
import { notFound } from 'next/navigation';
import { workData } from '../../../../assets/assets';
import ProjectCarousel from '../../components/ProjectCarousel';

export const generateStaticParams = () => {
  return workData.map((project) => ({
    slug: project.slug,
  }));
};

export const generateMetadata = ({ params }) => {
  const project = workData.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found - Naufal Faqih',
    };
  }

  return {
    title: `${project.title} - Naufal Faqih`,
    description: project.longDescription,
  };
};

const ProjectDetailPage = ({ params }) => {
  const project = workData.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full px-[8%] py-10 text-gray-800 dark:bg-darkTheme dark:text-white">
      <article className="mx-auto max-w-5xl">
        <Link href="/projects" className="mb-10 flex w-max items-center justify-center gap-2 rounded-full border-[0.5px] border-gray-700 px-6 py-3 text-gray-700 duration-500 hover:bg-lightHover dark:border-white dark:text-white dark:hover:bg-darkHover">
          <span className="text-lg leading-none">‹</span> Back to projects
        </Link>

        <ProjectCarousel images={project.documentationImages} title={project.title} />

        <div className="mt-12">
          <p className="mb-3 w-max rounded-full border border-black px-4 py-1 text-sm font-medium dark:border-white">{project.category}</p>
          <h1 className="text-4xl font-Ovo md:text-5xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl font-Ovo text-lg leading-8 text-gray-700 dark:text-gray-200">{project.longDescription}</p>

          {project.techStack?.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-black bg-white px-4 py-2 text-sm shadow-[2px_2px_0_#000] dark:border-white dark:bg-darkHover dark:shadow-[2px_2px_0_#fff]">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </main>
  );
};

export default ProjectDetailPage;
