import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Сколько стоит монтаж одного рилс?",
    answer:
      "Цена зависит от длительности видео, сложности монтажа и количества эффектов. Базовый рилс — от 1500 ₽. Точную стоимость назову после того, как вы расскажете о задаче и пришлёте исходники.",
  },
  {
    id: 2,
    question: "За какой срок будет готово видео?",
    answer:
      "Обычно один рилс делаю за 1–2 дня. Если нужно срочно — есть ускоренный формат за несколько часов с небольшой доплатой.",
  },
  {
    id: 3,
    question: "Как передать исходники?",
    answer:
      "Самый удобный способ — Google Диск, Яндекс.Диск или Telegram. Присылаете все нужные клипы, фото и пожелания по стилю, я беру остальное на себя.",
  },
  {
    id: 4,
    question: "Сколько правок входит в стоимость?",
    answer:
      "В стоимость входит 2 круга правок. Я хочу, чтобы результат вам полностью нравился, поэтому учту все пожелания по монтажу, музыке и субтитрам.",
  },
  {
    id: 5,
    question: "В каких форматах вы делаете видео?",
    answer:
      "Монтирую вертикальные видео под Reels, Shorts и TikTok (9:16), а также квадратные и горизонтальные форматы под любую площадку.",
  },
  {
    id: 6,
    question: "Можно ли заказать сразу пакет видео?",
    answer:
      "Да, для блогеров и брендов делаю пакеты от 4 рилс в месяц по выгодной цене. Так удобно вести контент-план и держать единый стиль.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Собрал ответы на вопросы, которые чаще всего задают перед заказом монтажа. Если чего-то не нашли — просто
          напишите мне.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}