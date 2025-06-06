import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function SpecialtySection() {
  return (
    <section className="bg-amber-50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-lg font-semibold uppercase text-amber-500">Nossa Especialidade</h2>
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">A Autêntica Francesinha</h3>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative h-[400px] overflow-hidden rounded-lg md:h-auto">
            <Image src="/images/francesinha.jpg" alt="Francesinha do Capa Negra I" fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="mb-4 text-2xl font-bold">Uma Experiência Única</h4>
            <p className="mb-4 text-gray-700">
              A Francesinha do Capa Negra I é preparada seguindo a receita tradicional, com pão de forma, linguiça,
              salsicha fresca, fiambre, bife de carne bovina, queijo e o nosso molho secreto que é o verdadeiro segredo
              desta iguaria.
            </p>
            <p className="mb-6 text-gray-700">
              Servida com batatas fritas caseiras e acompanhada de uma cerveja gelada, a nossa Francesinha é uma
              experiência gastronômica que não pode perder quando visitar o Porto.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-amber-100 p-2">
                  <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                </div>
                <span className="text-sm">Receita Original</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-amber-100 p-2">
                  <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                </div>
                <span className="text-sm">Ingredientes Frescos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-amber-100 p-2">
                  <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                </div>
                <span className="text-sm">Molho Secreto</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-amber-100 p-2">
                  <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                </div>
                <span className="text-sm">Tradição desde 1969</span>
              </div>
            </div>

            <Button className="w-fit bg-amber-500 hover:bg-amber-600">
              Ver Menu Completo <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
