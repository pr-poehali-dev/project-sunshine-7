import Icon from "@/components/ui/icon"

const contacts = [
  {
    label: "Telegram",
    value: "@nate",
    href: "https://t.me/nate",
    icon: "Send",
  },
  {
    label: "Instagram",
    value: "@nate.edit",
    href: "https://instagram.com/nate.edit",
    icon: "Instagram",
  },
  {
    label: "Email",
    value: "nate@example.com",
    href: "mailto:nate@example.com",
    icon: "Mail",
  },
]

export default function CallToAction() {
  return (
    <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-3/5 z-10">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Готовы сделать <span className="text-[#7A7FEE] dark:text-[#7A7FEE]">крутой</span> рилс?
          </h2>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Напишите мне в любом удобном мессенджере — обсудим вашу задачу, сроки и стоимость. Отвечаю быстро.
          </p>
          <div className="flex flex-col gap-3 max-w-sm">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-white/5 hover:border-[#7A7FEE] hover:shadow-md transition-all group"
              >
                <span className="w-11 h-11 rounded-full bg-[#7A7FEE] flex items-center justify-center shrink-0">
                  <Icon name={c.icon} className="text-white" size={20} />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{c.label}</span>
                  <span className="font-medium text-black dark:text-white group-hover:text-[#7A7FEE] transition-colors">
                    {c.value}
                  </span>
                </span>
              </a>
            ))}
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