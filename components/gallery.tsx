import Image from "next/image"

export default function Gallery() {
  const images = [
    {
      id: 1,
      src: "/images/gallery-1.jpg",
      alt: "Interior do restaurante Capa Negra I",
    },
    {
      id: 2,
      src: "/images/gallery-2.jpg",
      alt: "Francesinha do Capa Negra I",
    },
    {
      id: 3,
      src: "/images/gallery-3.jpg",
      alt: "Clientes no Capa Negra I",
    },
    {
      id: 4,
      src: "/images/gallery-4.jpg",
      alt: "Detalhe da francesinha",
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-lg font-semibold uppercase text-amber-500">Galeria</h2>
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Conheça nosso espaço</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((image) => (
            <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
