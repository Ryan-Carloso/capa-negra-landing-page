"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import LanguageSelector from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="fixed z-50 w-full bg-white/95 shadow backdrop-blur">
      <div className="container flex h-20 items-center">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              height={40}
              width={40}
              alt="icon restaurant Capa Negra 1 do bonfim"
              priority
            />
            <span className="text-xl font-bold">Capa Negra I</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium hover:text-amber-500">
              {t("nav.home")}
            </Link>
            <Link href="#map" className="text-sm font-medium hover:text-amber-500">
              {t("nav.location")}
            </Link>
            <Link href="#footer" className="text-sm font-medium hover:text-amber-500">
              {t("nav.contact")}
            </Link>
          </nav>
        </div>

        <div className="flex-1 hidden items-center justify-end gap-4 md:flex">
          <LanguageSelector />
          <Button className="bg-amber-500 hover:bg-amber-600">{t("nav.reserve")}</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute w-full bg-white pb-6 shadow-lg md:hidden">
          <nav className="container flex flex-col space-y-4 pt-4">
            <Link href="/" className="rounded px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
              {t("nav.home")}
            </Link>
            <Link
              href="#map-mobile"
              className="rounded px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.location")}
            </Link>
            <Link href="#footer" className="rounded px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
              {t("nav.contact")}
            </Link>
            <div className="px-4">
              <LanguageSelector />
            </div>
            <Button className="mx-4 bg-amber-500 hover:bg-amber-600">{t("nav.reserve")}</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
