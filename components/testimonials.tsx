import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "João Silva",
      location: "Porto, Portugal",
      text: "A melhor francesinha que já comi! O molho é simplesmente incrível e o ambiente do restaurante é muito acolhedor.",
      rating: 5,
    },
    {
      id: 2,
      name: "Maria Santos",
      location: "Lisboa, Portugal",
      text: "Sempre que vou ao Porto, faço questão de visitar o Capa Negra I. A francesinha é divinal e o serviço é excelente.",
      rating: 5,
    },
    {
      id: 3,
      name: "John Smith",
      location: "London, UK",
      text: "Discovered this place during my trip to Porto. The francesinha was amazing and the staff was very friendly. Highly recommended!",
      rating: 5,
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-lg font-semibold uppercase text-amber-500">Testemunhos</h2>
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">O que dizem nossos clientes</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-4 text-gray-700">{testimonial.text}</p>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
