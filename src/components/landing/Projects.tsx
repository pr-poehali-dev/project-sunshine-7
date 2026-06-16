import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    slug: "fashion-reels",
    title: "Fashion Reels",
    tag: "Lifestyle",
    shortDescription: "Динамичный монтаж под трендовый звук, плавные переходы и стильный цветокор. 1.2M просмотров.",
    mainImage: "https://cdn.poehali.dev/projects/9d37870e-f2bc-42a8-8758-cbe3f6f11651/files/eccc4a1f-c3ca-4950-9d13-7087210464b3.jpg",
    link: "#contact",
  },
  {
    id: 2,
    slug: "fitness-shorts",
    title: "Fitness Shorts",
    tag: "Sport",
    shortDescription: "Энергичный монтаж тренировок с ритмичными нарезками, субтитрами и звуковыми акцентами.",
    mainImage: "https://cdn.poehali.dev/projects/9d37870e-f2bc-42a8-8758-cbe3f6f11651/files/a97a17cd-4451-4911-96e9-01e1f58b3a12.jpg",
    link: "#contact",
  },
  {
    id: 3,
    slug: "travel-vlog",
    title: "Travel Vlog",
    tag: "Travel",
    shortDescription: "Кинематографичный тревел-рилс с атмосферным цветокором и бесшовными переходами.",
    mainImage: "https://cdn.poehali.dev/projects/9d37870e-f2bc-42a8-8758-cbe3f6f11651/files/c0233fae-e722-4adf-a531-d1f21451e81a.jpg",
    link: "#contact",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Мои последние
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">работы</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Lifestyle, спорт, тревел — собираю короткие видео под любой формат и нишу.
        Несколько примеров рилс, которые я смонтировал для клиентов.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={project.link}
            className="card overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-[9/16]">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-sm">
                {project.tag}
              </span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
                <div className="w-14 h-14 rounded-full bg-[#7A7FEE] flex items-center justify-center shadow-lg">
                  <ArrowUpRight className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 mb-4">{project.shortDescription}</p>
              <div className="inline-flex items-center text-[#7A7FEE] text-sm font-medium group">
                Смотреть видео{" "}
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="#contact" className="btn-primary">
          Заказать монтаж
        </a>
      </div>
    </section>
  )
}