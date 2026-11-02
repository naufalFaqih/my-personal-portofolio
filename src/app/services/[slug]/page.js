import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceData } from '../../../../assets/assets';

export const generateStaticParams = () => {
  return serviceData.map((service) => ({
    slug: service.slug,
  }));
};

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const service = serviceData.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found - Naufal Faqih',
    };
  }

  return {
    title: `${service.title} - Naufal Faqih`,
    description: service.description,
  };
};

const ServiceDetailPage = async ({ params }) => {
  const { slug } = await params;
  const service = serviceData.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full px-[8%] py-10 text-gray-800 dark:bg-darkTheme dark:text-white">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/#services"
          className="mb-10 flex w-max items-center justify-center gap-2 rounded-full border-[0.5px] border-gray-700 px-6 py-3 text-gray-700 duration-500 hover:bg-lightHover dark:border-white dark:text-white dark:hover:bg-darkHover"
        >
          <span className="text-lg leading-none">‹</span> Back to services
        </Link>

        <div className="rounded-lg border border-black bg-white p-6 shadow-[4px_4px_0_#000] dark:border-white dark:bg-darkHover dark:shadow-[4px_4px_0_#fff] md:p-10">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-black bg-white dark:border-white dark:bg-darkTheme">
              <Image src={service.icon} alt="" className="w-9" />
            </span>
            <p className="w-max rounded-full border border-black px-4 py-1 text-sm font-medium dark:border-white">{service.category}</p>
          </div>

          <h1 className="mt-6 text-4xl font-Ovo md:text-5xl">{service.title}</h1>
          <p className="mt-5 max-w-3xl font-Ovo text-lg leading-8 text-gray-700 dark:text-gray-200">{service.intro || service.description}</p>
        </div>

        <div className="mt-10 max-w-3xl space-y-8 font-Ovo">
          {service.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
              {Array.isArray(section.content) ? (
                <ul className="list-disc space-y-2 pl-5 text-lg leading-8 text-gray-700 dark:text-gray-200">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg leading-8 text-gray-700 dark:text-gray-200">{section.content}</p>
              )}
            </div>
          ))}
        </div>

        {service.tools?.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {service.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-black bg-white px-4 py-2 text-sm shadow-[2px_2px_0_#000] dark:border-white dark:bg-darkHover dark:shadow-[2px_2px_0_#fff]"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </article>
    </main>
  );
};

export default ServiceDetailPage;
