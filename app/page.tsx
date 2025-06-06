"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Clock, MapPin, Phone, Star, Users, Heart } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Vista de Porto com o Rio Douro"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              {t("hero.title1")} <span className="text-amber-400">{t("hero.title2")}</span> {t("hero.title3")}
              <br />
              <span className="text-amber-400">{t("hero.title4")}</span> {t("hero.title5")}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-200 md:text-2xl">{t("hero.subtitle")}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-amber-500 px-8 py-4 text-lg hover:bg-amber-600">
                {t("hero.cta1")} <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white px-8 py-4 text-lg text-white hover:bg-white/10"
              >
                {t("hero.cta2")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-amber-500 py-8 text-white">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-3xl font-bold">50+</div>
              <div className="text-sm">{t("social.years")}</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold">10k+</div>
              <div className="text-sm">{t("social.customers")}</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold">4.8★</div>
              <div className="text-sm">{t("social.rating")}</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold">#1</div>
              <div className="text-sm">{t("social.rank")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              {t("problem.title")} <span className="text-red-500">{t("problem.title2")}</span>?
            </h2>
            <p className="mb-12 text-xl text-gray-600">{t("problem.subtitle")}</p>

            <div className="mb-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-red-50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <span className="text-2xl">😞</span>
                </div>
                <h3 className="mb-2 font-semibold text-red-800">{t("problem.sauce")}</h3>
                <p className="text-red-600">{t("problem.sauce.desc")}</p>
              </div>
              <div className="rounded-lg bg-red-50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <span className="text-2xl">🥩</span>
                </div>
                <h3 className="mb-2 font-semibold text-red-800">{t("problem.meat")}</h3>
                <p className="text-red-600">{t("problem.meat.desc")}</p>
              </div>
              <div className="rounded-lg bg-red-50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <span className="text-2xl">💸</span>
                </div>
                <h3 className="mb-2 font-semibold text-red-800">{t("problem.price")}</h3>
                <p className="text-red-600">{t("problem.price.desc")}</p>
              </div>
            </div>

            <div className="rounded-lg bg-amber-50 p-8">
              <h3 className="mb-4 text-3xl font-bold text-amber-800">
                {t("problem.solution")} <span className="text-amber-600">{t("problem.solution2")}</span>
              </h3>
              <p className="text-lg text-amber-700">{t("problem.solution.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">{t("products.title")}</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">{t("products.subtitle")}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Francesinha Especial Capa Negra"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{t("products.francesinha")}</h3>
                  <p className="text-sm">{t("products.francesinha.sub")}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{t("products.francesinha.desc")}</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Bifana do Capa Negra"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{t("products.bifana")}</h3>
                  <p className="text-sm">{t("products.bifana.sub")}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{t("products.bifana.desc")}</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Caldo Verde Capa Negra"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{t("products.caldo")}</h3>
                  <p className="text-sm">{t("products.caldo.sub")}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{t("products.caldo.desc")}</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Pastéis de Bacalhau"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{t("products.pasteis")}</h3>
                  <p className="text-sm">{t("products.pasteis.sub")}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{t("products.pasteis.desc")}</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Tripas à Moda do Porto"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{t("products.tripas")}</h3>
                  <p className="text-sm">{t("products.tripas.sub")}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{t("products.tripas.desc")}</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Sobremesas Tradicionais"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{t("products.desserts")}</h3>
                  <p className="text-sm">{t("products.desserts.sub")}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{t("products.desserts.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">{t("testimonials.title")}</h2>
            <p className="text-xl text-gray-600">{t("testimonials.subtitle")}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-8">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-6 text-gray-700">"{t("testimonials.1")}"</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                <div>
                  <p className="font-semibold">Ana Silva</p>
                  <p className="text-sm text-gray-500">Lisboa</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-8">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-6 text-gray-700">"{t("testimonials.2")}"</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                <div>
                  <p className="font-semibold">João Santos</p>
                  <p className="text-sm text-gray-500">Porto</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-8">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-6 text-gray-700">"{t("testimonials.3")}"</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                <div>
                  <p className="font-semibold">Michael Johnson</p>
                  <p className="text-sm text-gray-500">London</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="bg-red-50 py-16">
        <div className="container text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold text-red-800">{t("urgency.title")}</h2>
            <p className="mb-8 text-xl text-red-700">{t("urgency.subtitle")}</p>
            <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
              <p className="text-lg font-semibold text-gray-800">
                <span className="text-red-600">{t("urgency.yesterday")}</span> {t("urgency.yesterday.desc")}
              </p>
              <p className="text-lg font-semibold text-gray-800">
                <span className="text-red-600">{t("urgency.week")}</span> {t("urgency.week.desc")}
              </p>
            </div>
            <p className="mb-8 text-lg text-red-700">
              <strong>{t("urgency.warning")}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-amber-500 py-20 text-white">
        <div className="container text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-5xl font-bold">{t("cta.title")}</h2>
            <p className="mb-8 text-xl">{t("cta.subtitle")}</p>

            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <div className="flex items-center justify-center gap-3">
                <Clock className="h-8 w-8" />
                <div className="text-left">
                  <p className="font-semibold">{t("cta.fast")}</p>
                  <p className="text-sm">{t("cta.fast.desc")}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Users className="h-8 w-8" />
                <div className="text-left">
                  <p className="font-semibold">{t("cta.guaranteed")}</p>
                  <p className="text-sm">{t("cta.guaranteed.desc")}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Heart className="h-8 w-8" />
                <div className="text-left">
                  <p className="font-semibold">{t("cta.experience")}</p>
                  <p className="text-sm">{t("cta.experience.desc")}</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-white px-12 py-6 text-xl font-bold text-amber-500 hover:bg-gray-100">
              {t("cta.button")}
              <ChevronRight className="ml-3 h-6 w-6" />
            </Button>

            <p className="mt-6 text-sm">{t("cta.benefits")}</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-900 py-12 text-white">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <MapPin className="mx-auto mb-3 h-8 w-8 text-amber-400" />
              <h3 className="mb-2 text-lg font-semibold">{t("contact.location")}</h3>
              <p>Rua do Bonjardim, 302</p>
              <p>4000-115 Porto, Portugal</p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto mb-3 h-8 w-8 text-amber-400" />
              <h3 className="mb-2 text-lg font-semibold">{t("contact.phone")}</h3>
              <p>+351 222 054 006</p>
              <p>{t("contact.phone.desc")}</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-3 h-8 w-8 text-amber-400" />
              <h3 className="mb-2 text-lg font-semibold">{t("contact.hours")}</h3>
              <p>{t("contact.hours.weekdays")}</p>
              <p>{t("contact.hours.weekend")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
