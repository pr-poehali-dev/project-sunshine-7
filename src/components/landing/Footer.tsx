import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="container py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center text-center">
        <a href="#" className="flex items-center justify-center mb-4">
          <img
            src="https://cdn.poehali.dev/projects/9d37870e-f2bc-42a8-8758-cbe3f6f11651/bucket/9b89eafc-28c5-4966-b3c7-91abbf70abb8.jfif"
            alt="nate.edit"
            className="h-10 w-auto object-contain"
          />
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          Видеомонтаж Reels и Shorts, которые удерживают внимание и набирают просмотры.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Nate. Все права защищены.
        </p>
      </div>
    </footer>
  )
}