"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "pt" | "en" | "fr" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.location": "Localização",
    "nav.contact": "Contato",
    "nav.reserve": "Reservar Mesa",

    // Hero Section
    "hero.title1": "A",
    "hero.title2": "Francesinha",
    "hero.title3": "que faz",
    "hero.title4": "o Porto",
    "hero.title5": "parar",
    "hero.subtitle":
      "Há mais de 50 anos servimos a francesinha mais autêntica da cidade. Uma experiência que marca para sempre.",
    "hero.cta1": "Reservar Mesa Agora",
    "hero.cta2": "Ver Localização",

    // Social Proof
    "social.years": "Anos de Tradição",
    "social.morethan": "mais que",
    "social.customers": "Clientes Satisfeitos",
    "social.rating": "Avaliação Google",
    "social.rank": "Francesinha do Porto",

    // Problem Section
    "problem.title": "Cansado de francesinhas que",
    "problem.title2": "desapontam",
    "problem.subtitle":
      "Molho aguado, ingredientes de baixa qualidade, pão encharcado... Sabemos como é frustrante pagar caro por uma francesinha medíocre.",
    "problem.sauce": "Molho Sem Sabor",
    "problem.sauce.desc": "Molhos industriais que não têm nada a ver com a receita tradicional",
    "problem.meat": "Carne de Má Qualidade",
    "problem.meat.desc": "Carnes processadas e linguiças baratas que estragam toda a experiência",
    "problem.price": "Preço Abusivo",
    "problem.price.desc": "Pagar muito por pouco, sem qualidade nem tradição",
    "problem.solution": "No Capa Negra I, é",
    "problem.solution2": "diferente",
    "problem.solution.desc":
      "Receita secreta guardada há 3 gerações. Ingredientes selecionados diariamente. O molho que fez história no Porto. Esta é a francesinha que vai mudar a sua vida.",

    // Products
    "products.title": "Mais do que uma francesinha",
    "products.subtitle":
      "Descubra os sabores autênticos que fazem do Capa Negra I uma referência gastronômica no Porto",
    "products.francesinha": "Francesinha Especial",
    "products.francesinha.sub": "O nosso prato estrela",
    "products.francesinha.desc":
      "A receita original com o nosso molho secreto, carnes selecionadas e queijo derretido na perfeição.",
    "products.bifana": "Bifana Tradicional",
    "products.bifana.sub": "Sabor autêntico português",
    "products.bifana.desc":
      "Carne de porco marinada no nosso tempero especial, servida em pão caseiro com molho único.",
    "products.caldo": "Caldo Verde",
    "products.caldo.sub": "Tradição em cada colherada",
    "products.caldo.desc": "Receita da avó, com couve galega fresca, chouriço artesanal e o toque especial da casa.",
    "products.pasteis": "Pastéis de Bacalhau",
    "products.pasteis.sub": "Crocantes e saborosos",
    "products.pasteis.desc":
      "Bacalhau do Porto desfiado à mão, batata e temperos secretos. Fritos na hora para máxima crocância.",
    "products.tripas": "Tripas à Moda do Porto",
    "products.tripas.sub": "O prato que deu nome aos tripeiros",
    "products.tripas.desc":
      "Receita centenária com feijão branco, chouriço, linguiça e o tempero que só nós sabemos fazer.",
    "products.desserts": "Sobremesas da Casa",
    "products.desserts.sub": "Final perfeito para sua refeição",
    "products.desserts.desc":
      "Pudim caseiro, leite-creme queimado e outras delícias que completam a experiência gastronômica.",

    // Testimonials
    "testimonials.title": "O que dizem sobre nós",
    "testimonials.subtitle": "Mais de 10.000 clientes não podem estar errados",
    "testimonials.1":
      "Finalmente encontrei a francesinha perfeita! O molho é incrível e a carne derrete na boca. Voltarei sempre que vier ao Porto.",
    "testimonials.2":
      "Sou do Porto e posso garantir: esta é a francesinha mais autêntica da cidade. O sabor me lembra a infância.",
    "testimonials.3":
      "Amazing experience! The francesinha was incredible and the service was perfect. A must-visit in Porto!",

    // Urgency
    "urgency.title": "⚠️ Atenção: Lotamos todos os dias!",
    "urgency.subtitle":
      "Somos o restaurante mais procurado do Porto. Muitos clientes ficam sem mesa por não reservarem com antecedência.",
    "urgency.yesterday": "Ontem:",
    "urgency.yesterday.desc": "47 pessoas ficaram sem mesa",
    "urgency.week": "Esta semana:",
    "urgency.week.desc": "312 pessoas na lista de espera",
    "urgency.warning": "Não perca a oportunidade de provar a melhor francesinha do Porto.",

    // Final CTA
    "cta.title": "Reserve Agora e Garante a Sua Mesa",
    "cta.subtitle":
      "Não deixe para amanhã o que pode saborear hoje. A francesinha que vai marcar a sua vida está à sua espera.",
    "cta.fast": "Reserva Rápida",
    "cta.fast.desc": "Em menos de 2 minutos",
    "cta.guaranteed": "Mesa Garantida",
    "cta.guaranteed.desc": "Sem filas nem esperas",
    "cta.experience": "Experiência Única",
    "cta.experience.desc": "Que vai recordar para sempre",
    "cta.button": "RESERVAR MESA AGORA",
    "cta.benefits": "✅ Confirmação imediata • ✅ Sem taxas • ✅ Cancelamento gratuito até 2h antes",

    // Contact
    "contact.location": "Localização",
    "contact.phone": "Telefone",
    "contact.phone.desc": "Chamada para rede fixa nacional",
    "contact.hours": "Horário",
    "contact.hours.weekdays": "Segunda - Sexta: 11h às 23h",
    "contact.hours.weekend": "Sábado - Domingo: 11h às 00h",

    // Footer
    "footer.tagline": "A autêntica francesinha do Porto desde 1969.",
    "footer.description": "Tradição, qualidade e sabor em cada prato.",
    "footer.rights": "Todos os direitos reservados.",
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "nav.reserve": "Reserve Table",

    // Hero Section
    "hero.title1": "The",
    "hero.title2": "Francesinha",
    "hero.title3": "that makes",
    "hero.title4": "Porto",
    "hero.title5": "stop",
    "hero.subtitle":
      "For over 50 years we've been serving the most authentic francesinha in the city. An experience that marks you forever.",
    "hero.cta1": "Reserve Table Now",
    "hero.cta2": "View Location",

    // Social Proof
    "social.years": "Years of Tradition",
    "social.morethan": "more than",
    "social.customers": "Satisfied Customers",
    "social.rating": "Google Rating",
    "social.rank": "Francesinha in Porto",

    // Problem Section
    "problem.title": "Tired of francesinhas that",
    "problem.title2": "disappoint",
    "problem.subtitle":
      "Watery sauce, low-quality ingredients, soggy bread... We know how frustrating it is to pay a lot for a mediocre francesinha.",
    "problem.sauce": "Flavorless Sauce",
    "problem.sauce.desc": "Industrial sauces that have nothing to do with the traditional recipe",
    "problem.meat": "Poor Quality Meat",
    "problem.meat.desc": "Processed meats and cheap sausages that ruin the entire experience",
    "problem.price": "Abusive Price",
    "problem.price.desc": "Paying a lot for little, without quality or tradition",
    "problem.solution": "At Capa Negra I, it's",
    "problem.solution2": "different",
    "problem.solution.desc":
      "Secret recipe kept for 3 generations. Ingredients selected daily. The sauce that made history in Porto. This is the francesinha that will change your life.",

    // Products
    "products.title": "More than just a francesinha",
    "products.subtitle": "Discover the authentic flavors that make Capa Negra I a gastronomic reference in Porto",
    "products.francesinha": "Special Francesinha",
    "products.francesinha.sub": "Our star dish",
    "products.francesinha.desc":
      "The original recipe with our secret sauce, selected meats and perfectly melted cheese.",
    "products.bifana": "Traditional Bifana",
    "products.bifana.sub": "Authentic Portuguese flavor",
    "products.bifana.desc": "Pork marinated in our special seasoning, served in homemade bread with unique sauce.",
    "products.caldo": "Caldo Verde",
    "products.caldo.sub": "Tradition in every spoonful",
    "products.caldo.desc":
      "Grandma's recipe, with fresh Galician cabbage, artisanal chorizo and the house's special touch.",
    "products.pasteis": "Codfish Cakes",
    "products.pasteis.sub": "Crispy and tasty",
    "products.pasteis.desc":
      "Hand-shredded Porto codfish, potato and secret seasonings. Fried fresh for maximum crispiness.",
    "products.tripas": "Porto-Style Tripe",
    "products.tripas.sub": "The dish that gave tripeiros their name",
    "products.tripas.desc":
      "Century-old recipe with white beans, chorizo, sausage and the seasoning only we know how to make.",
    "products.desserts": "House Desserts",
    "products.desserts.sub": "Perfect ending to your meal",
    "products.desserts.desc":
      "Homemade pudding, burnt cream and other delights that complete the gastronomic experience.",

    // Testimonials
    "testimonials.title": "What they say about us",
    "testimonials.subtitle": "More than 10,000 customers can't be wrong",
    "testimonials.1":
      "Finally found the perfect francesinha! The sauce is incredible and the meat melts in your mouth. I'll come back every time I visit Porto.",
    "testimonials.2":
      "I'm from Porto and I can guarantee: this is the most authentic francesinha in the city. The taste reminds me of childhood.",
    "testimonials.3":
      "Amazing experience! The francesinha was incredible and the service was perfect. A must-visit in Porto!",

    // Urgency
    "urgency.title": "⚠️ Warning: We're full every day!",
    "urgency.subtitle":
      "We're the most sought-after restaurant in Porto. Many customers are left without a table for not booking in advance.",
    "urgency.yesterday": "Yesterday:",
    "urgency.yesterday.desc": "47 people were left without a table",
    "urgency.week": "This week:",
    "urgency.week.desc": "312 people on the waiting list",
    "urgency.warning": "Don't miss the opportunity to taste the best francesinha in Porto.",

    // Final CTA
    "cta.title": "Reserve Now and Guarantee Your Table",
    "cta.subtitle":
      "Don't leave for tomorrow what you can savor today. The francesinha that will mark your life is waiting for you.",
    "cta.fast": "Quick Reservation",
    "cta.fast.desc": "In less than 2 minutes",
    "cta.guaranteed": "Guaranteed Table",
    "cta.guaranteed.desc": "No queues or waiting",
    "cta.experience": "Unique Experience",
    "cta.experience.desc": "That you'll remember forever",
    "cta.button": "RESERVE TABLE NOW",
    "cta.benefits": "✅ Immediate confirmation • ✅ No fees • ✅ Free cancellation up to 2h before",

    // Contact
    "contact.location": "Location",
    "contact.phone": "Phone",
    "contact.phone.desc": "Call to national landline",
    "contact.hours": "Hours",
    "contact.hours.weekdays": "Monday - Friday: 11am to 11pm",
    "contact.hours.weekend": "Saturday - Sunday: 11am to 12am",

    // Footer
    "footer.tagline": "The authentic francesinha from Porto since 1969.",
    "footer.description": "Tradition, quality and flavor in every dish.",
    "footer.rights": "All rights reserved.",
  },

  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.location": "Localisation",
    "nav.contact": "Contact",
    "nav.reserve": "Réserver Table",

    // Hero Section
    "hero.title1": "La",
    "hero.title2": "Francesinha",
    "hero.title3": "qui fait",
    "hero.title4": "s'arrêter",
    "hero.title5": "Porto",
    "hero.subtitle":
      "Depuis plus de 50 ans, nous servons la francesinha la plus authentique de la ville. Une expérience qui marque à jamais.",
    "hero.cta1": "Réserver Table Maintenant",
    "hero.cta2": "Voir Localisation",

    // Social Proof
    "social.years": "Années de Tradition",
    "social.morethan": "plus que",
    "social.customers": "Clients Satisfaits",
    "social.rating": "Note Google",
    "social.rank": "Francesinha de Porto",

    // Problem Section
    "problem.title": "Fatigué des francesinhas qui",
    "problem.title2": "déçoivent",
    "problem.subtitle":
      "Sauce aqueuse, ingrédients de mauvaise qualité, pain détrempé... Nous savons comme c'est frustrant de payer cher pour une francesinha médiocre.",
    "problem.sauce": "Sauce Sans Saveur",
    "problem.sauce.desc": "Sauces industrielles qui n'ont rien à voir avec la recette traditionnelle",
    "problem.meat": "Viande de Mauvaise Qualité",
    "problem.meat.desc": "Viandes transformées et saucisses bon marché qui gâchent toute l'expérience",
    "problem.price": "Prix Abusif",
    "problem.price.desc": "Payer beaucoup pour peu, sans qualité ni tradition",
    "problem.solution": "Chez Capa Negra I, c'est",
    "problem.solution2": "différent",
    "problem.solution.desc":
      "Recette secrète gardée depuis 3 générations. Ingrédients sélectionnés quotidiennement. La sauce qui a fait l'histoire de Porto. C'est la francesinha qui va changer votre vie.",

    // Products
    "products.title": "Plus qu'une simple francesinha",
    "products.subtitle":
      "Découvrez les saveurs authentiques qui font de Capa Negra I une référence gastronomique à Porto",
    "products.francesinha": "Francesinha Spéciale",
    "products.francesinha.sub": "Notre plat vedette",
    "products.francesinha.desc":
      "La recette originale avec notre sauce secrète, viandes sélectionnées et fromage parfaitement fondu.",
    "products.bifana": "Bifana Traditionnelle",
    "products.bifana.sub": "Saveur portugaise authentique",
    "products.bifana.desc":
      "Porc mariné dans notre assaisonnement spécial, servi dans du pain maison avec une sauce unique.",
    "products.caldo": "Caldo Verde",
    "products.caldo.sub": "Tradition à chaque cuillerée",
    "products.caldo.desc":
      "Recette de grand-mère, avec du chou galicien frais, chorizo artisanal et la touche spéciale de la maison.",
    "products.pasteis": "Beignets de Morue",
    "products.pasteis.sub": "Croustillants et savoureux",
    "products.pasteis.desc":
      "Morue de Porto effilochée à la main, pomme de terre et assaisonnements secrets. Frits à la minute pour un maximum de croustillant.",
    "products.tripas": "Tripes à la Mode de Porto",
    "products.tripas.sub": "Le plat qui a donné son nom aux tripeiros",
    "products.tripas.desc":
      "Recette centenaire avec haricots blancs, chorizo, saucisse et l'assaisonnement que nous seuls savons faire.",
    "products.desserts": "Desserts de la Maison",
    "products.desserts.sub": "Fin parfaite pour votre repas",
    "products.desserts.desc":
      "Pudding maison, crème brûlée et autres délices qui complètent l'expérience gastronomique.",

    // Testimonials
    "testimonials.title": "Ce qu'ils disent de nous",
    "testimonials.subtitle": "Plus de 10 000 clients ne peuvent pas se tromper",
    "testimonials.1":
      "J'ai enfin trouvé la francesinha parfaite ! La sauce est incroyable et la viande fond dans la bouche. Je reviendrai à chaque visite à Porto.",
    "testimonials.2":
      "Je suis de Porto et je peux garantir : c'est la francesinha la plus authentique de la ville. Le goût me rappelle l'enfance.",
    "testimonials.3":
      "Expérience incroyable ! La francesinha était incroyable et le service parfait. Un incontournable à Porto !",

    // Urgency
    "urgency.title": "⚠️ Attention : Nous sommes complets tous les jours !",
    "urgency.subtitle":
      "Nous sommes le restaurant le plus recherché de Porto. Beaucoup de clients restent sans table faute de réserver à l'avance.",
    "urgency.yesterday": "Hier :",
    "urgency.yesterday.desc": "47 personnes sont restées sans table",
    "urgency.week": "Cette semaine :",
    "urgency.week.desc": "312 personnes sur liste d'attente",
    "urgency.warning": "Ne ratez pas l'opportunité de goûter la meilleure francesinha de Porto.",

    // Final CTA
    "cta.title": "Réservez Maintenant et Garantissez Votre Table",
    "cta.subtitle":
      "Ne remettez pas à demain ce que vous pouvez savourer aujourd'hui. La francesinha qui marquera votre vie vous attend.",
    "cta.fast": "Réservation Rapide",
    "cta.fast.desc": "En moins de 2 minutes",
    "cta.guaranteed": "Table Garantie",
    "cta.guaranteed.desc": "Pas de files ni d'attente",
    "cta.experience": "Expérience Unique",
    "cta.experience.desc": "Que vous vous rappellerez pour toujours",
    "cta.button": "RÉSERVER TABLE MAINTENANT",
    "cta.benefits": "✅ Confirmation immédiate • ✅ Sans frais • ✅ Annulation gratuite jusqu'à 2h avant",

    // Contact
    "contact.location": "Localisation",
    "contact.phone": "Téléphone",
    "contact.phone.desc": "Appel vers ligne fixe nationale",
    "contact.hours": "Horaires",
    "contact.hours.weekdays": "Lundi - Vendredi : 11h à 23h",
    "contact.hours.weekend": "Samedi - Dimanche : 11h à 00h",

    // Footer
    "footer.tagline": "L'authentique francesinha de Porto depuis 1969.",
    "footer.description": "Tradition, qualité et saveur dans chaque plat.",
    "footer.rights": "Tous droits réservés.",
  },

  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Acerca",
    "nav.location": "Ubicación",
    "nav.contact": "Contacto",
    "nav.reserve": "Reservar Mesa",

    // Hero Section
    "hero.title1": "La",
    "hero.title2": "Francesinha",
    "hero.title3": "que hace",
    "hero.title4": "parar",
    "hero.title5": "a Oporto",
    "hero.subtitle":
      "Durante más de 50 años hemos servido la francesinha más auténtica de la ciudad. Una experiencia que marca para siempre.",
    "hero.cta1": "Reservar Mesa Ahora",
    "hero.cta2": "Ver Ubicación",

    // Social Proof
    "social.years": "Años de Tradición",
    "social.morethan": "plus que",
    "social.customers": "Clientes Satisfechos",
    "social.rating": "Valoración Google",
    "social.rank": "Francesinha de Oporto",

    // Problem Section
    "problem.title": "¿Cansado de francesinhas que",
    "problem.title2": "decepcionan",
    "problem.subtitle":
      "Salsa aguada, ingredientes de baja calidad, pan empapado... Sabemos lo frustrante que es pagar caro por una francesinha mediocre.",
    "problem.sauce": "Salsa Sin Sabor",
    "problem.sauce.desc": "Salsas industriales que no tienen nada que ver con la receta tradicional",
    "problem.meat": "Carne de Mala Calidad",
    "problem.meat.desc": "Carnes procesadas y embutidos baratos que arruinan toda la experiencia",
    "problem.price": "Precio Abusivo",
    "problem.price.desc": "Pagar mucho por poco, sin calidad ni tradición",
    "problem.solution": "En Capa Negra I, es",
    "problem.solution2": "diferente",
    "problem.solution.desc":
      "Receta secreta guardada durante 3 generaciones. Ingredientes seleccionados diariamente. La salsa que hizo historia en Oporto. Esta es la francesinha que cambiará tu vida.",

    // Products
    "products.title": "Más que una simple francesinha",
    "products.subtitle":
      "Descubre los sabores auténticos que hacen de Capa Negra I una referencia gastronómica en Oporto",
    "products.francesinha": "Francesinha Especial",
    "products.francesinha.sub": "Nuestro plato estrella",
    "products.francesinha.desc":
      "La receta original con nuestra salsa secreta, carnes seleccionadas y queso perfectamente derretido.",
    "products.bifana": "Bifana Tradicional",
    "products.bifana.sub": "Sabor portugués auténtico",
    "products.bifana.desc": "Cerdo marinado en nuestro condimento especial, servido en pan casero con salsa única.",
    "products.caldo": "Caldo Verde",
    "products.caldo.sub": "Tradición en cada cucharada",
    "products.caldo.desc":
      "Receta de la abuela, con col gallega fresca, chorizo artesanal y el toque especial de la casa.",
    "products.pasteis": "Pasteles de Bacalao",
    "products.pasteis.sub": "Crujientes y sabrosos",
    "products.pasteis.desc":
      "Bacalao de Oporto deshilachado a mano, patata y condimentos secretos. Fritos al momento para máxima textura crujiente.",
    "products.tripas": "Callos a la Moda de Oporto",
    "products.tripas.sub": "El plato que dio nombre a los tripeiros",
    "products.tripas.desc":
      "Receta centenaria con judías blancas, chorizo, embutido y el condimento que solo nosotros sabemos hacer.",
    "products.desserts": "Postres de la Casa",
    "products.desserts.sub": "Final perfecto para tu comida",
    "products.desserts.desc": "Pudín casero, crema quemada y otras delicias que completan la experiencia gastronómica.",

    // Testimonials
    "testimonials.title": "Lo que dicen de nosotros",
    "testimonials.subtitle": "Más de 10.000 clientes no pueden estar equivocados",
    "testimonials.1":
      "¡Finalmente encontré la francesinha perfecta! La salsa es increíble y la carne se derrite en la boca. Volveré cada vez que visite Oporto.",
    "testimonials.2":
      "Soy de Oporto y puedo garantizar: esta es la francesinha más auténtica de la ciudad. El sabor me recuerda a la infancia.",
    "testimonials.3":
      "¡Experiencia increíble! La francesinha fue increíble y el servicio perfecto. ¡Una visita obligada en Oporto!",

    // Urgency
    "urgency.title": "⚠️ Atención: ¡Estamos llenos todos los días!",
    "urgency.subtitle":
      "Somos el restaurante más buscado de Oporto. Muchos clientes se quedan sin mesa por no reservar con antelación.",
    "urgency.yesterday": "Ayer:",
    "urgency.yesterday.desc": "47 personas se quedaron sin mesa",
    "urgency.week": "Esta semana:",
    "urgency.week.desc": "312 personas en lista de espera",
    "urgency.warning": "No pierdas la oportunidad de probar la mejor francesinha de Oporto.",

    // Final CTA
    "cta.title": "Reserva Ahora y Garantiza Tu Mesa",
    "cta.subtitle":
      "No dejes para mañana lo que puedes saborear hoy. La francesinha que marcará tu vida te está esperando.",
    "cta.fast": "Reserva Rápida",
    "cta.fast.desc": "En menos de 2 minutos",
    "cta.guaranteed": "Mesa Garantizada",
    "cta.guaranteed.desc": "Sin colas ni esperas",
    "cta.experience": "Experiencia Única",
    "cta.experience.desc": "Que recordarás para siempre",
    "cta.button": "RESERVAR MESA AHORA",
    "cta.benefits": "✅ Confirmación inmediata • ✅ Sin tasas • ✅ Cancelación gratuita hasta 2h antes",

    // Contact
    "contact.location": "Ubicación",
    "contact.phone": "Teléfono",
    "contact.phone.desc": "Llamada a línea fija nacional",
    "contact.hours": "Horario",
    "contact.hours.weekdays": "Lunes - Viernes: 11h a 23h",
    "contact.hours.weekend": "Sábado - Domingo: 11h a 00h",

    // Footer
    "footer.tagline": "La auténtica francesinha de Oporto desde 1969.",
    "footer.description": "Tradición, calidad y sabor en cada plato.",
    "footer.rights": "Todos los derechos reservados.",
  },
}

function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "pt"

  const browserLang = navigator.language.toLowerCase()

  if (browserLang.startsWith("en")) return "en"
  if (browserLang.startsWith("fr")) return "fr"
  if (browserLang.startsWith("es")) return "es"
  if (browserLang.startsWith("pt")) return "pt"

  return "pt" // Default fallback
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    // Check localStorage first, then detect browser language
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["pt", "en", "fr", "es"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    } else {
      const detectedLanguage = detectBrowserLanguage()
      setLanguage(detectedLanguage)
      localStorage.setItem("language", detectedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
