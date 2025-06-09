"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="footer" className="bg-gray-900 text-gray-300">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/Logo.png"
                height={100}
                width={100}
                alt="icon restaurant Capa Negra 1 do bonfim"
                priority
                className="bg-white p-3 rounded-xl"
              />
              <span className="text-xl font-bold text-white">Capa Negra I</span>
            </div>
            <p className="mb-4">{t("footer.tagline")}</p>
            <p className="text-sm">{t("footer.description")}</p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">{t("contact.location")}</h4>
            <address className="not-italic space-y-2">
              <p>R. de Barros Lima 487, 4300-062 Porto</p>
              <p>4300-062 Porto, Portugal</p>
              <p>+351 22 245 3725</p>
            </address>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">{t("contact.hours")}</h4>
            <div className="space-y-2">
              <p>{t("contact.hours.weekdays")}</p>
              <p>{t("contact.hours.weekend")}</p>
            </div>
            <Button               
            onClick={() => {
                window.location.href = `/reserve`
              }}
            className="mt-4 bg-amber-500 hover:bg-amber-600">{t("nav.reserve")}</Button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Capa Negra I. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
