import { Film, Sparkles, MessageSquare } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Монтаж Reels & Shorts",
    description: "Динамичный монтаж под трендовые звуки, ритмичные нарезки и удержание зрителя до конца.",
    icon: Film,
    color: "bg-[#7A7FEE]",
  },
  {
    id: 2,
    title: "Цветокоррекция",
    description: "Профессиональный цветокор и стилизация, чтобы видео выглядело дорого и в едином стиле.",
    icon: Sparkles,
    color: "bg-[#7A7FEE]",
  },
  {
    id: 3,
    title: "Субтитры и звук",
    description: "Анимированные субтитры, подбор музыки и звуковые эффекты для максимального вовлечения.",
    icon: MessageSquare,
    color: "bg-[#7A7FEE]",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Что я делаю
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">с вашим видео</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Беру ваши исходники и превращаю их в готовый вирусный рилс под ключ — от монтажа до субтитров и звука.
        Вам остаётся только опубликовать.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}