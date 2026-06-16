import ContactFormButton from "./ContactFormButton"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-[#7A7FEE]">Видеомонтаж · Reels · Shorts</p>
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Превращаю съёмку
            <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">в вирусные рилс</span>
            которые смотрят до конца
          </h1>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Привет, я Nate — видеомонтажёр коротких видео. Делаю динамичный монтаж, цветокор, субтитры и звук, чтобы ваши Reels и Shorts набирали просмотры и удерживали аудиторию.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton>Заказать монтаж</ContactFormButton>
            <a href="#projects" className="btn-secondary text-black dark:text-white">
              Смотреть работы
            </a>
          </div>
        </div>

        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
          <img
            src="/purple-circle-wave-static.png"
            alt="Purple Wave"
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
          />
        </div>
      </div>
    </section>
  )
}