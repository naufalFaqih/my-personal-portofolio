import Image from 'next/image';
import Link from 'next/link';
import { assets, workData } from '../../../assets/assets';

export const metadata = {
  title: 'Projects - Naufal Faqih',
  description: 'All selected projects by Naufal Faqih',
};

const ProjectsPage = () => {
  return (
    <main className="min-h-screen w-full px-[8%] py-10 text-gray-800 dark:bg-darkTheme dark:text-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/#work" className="mb-12 flex w-max items-center justify-center gap-2 rounded-full border-[0.5px] border-gray-700 px-6 py-3 text-gray-700 duration-500 hover:bg-lightHover dark:border-white dark:text-white dark:hover:bg-darkHover">
          <span className="text-lg leading-none">‹</span> Back to home
        </Link>

        <h4 className="mb-2 text-center text-lg font-Ovo">Project archive</h4>
        <h1 className="text-center text-5xl font-Ovo">All Projects</h1>
        <p className="mx-auto mb-12 mt-5 max-w-2xl text-center font-Ovo">
          Explore the projects I have worked on across web development, machine learning, data processing, and AI integration.
        </p>

        <div className="grid grid-cols-auto gap-6">
          {workData.map((project) => (
            <article key={project.slug} className="group overflow-hidden rounded-lg border border-black bg-white text-black shadow-black transition duration-500 hover:-translate-y-1 dark:border-white dark:bg-darkHover dark:text-white dark:shadow-white">
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image src={project.bgImage} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="mb-2 w-max rounded-full border border-black px-3 py-1 text-xs font-medium dark:border-white">{project.category}</p>
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-200">{project.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-medium">Read project</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black shadow-[2px_2px_0_#000] transition group-hover:bg-lime-300 dark:border-white dark:shadow-[2px_2px_0_#fff]">
                      <Image src={assets.send_icon} alt="" className="w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
