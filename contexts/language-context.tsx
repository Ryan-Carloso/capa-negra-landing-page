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
  "pt": {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.location": "Localização",
    "nav.contact": "Contacto",
    "nav.reserve": "Reservar Mesa",

    // Hero Section
    "hero.title1": "A",
    "hero.title2": "Francesinha",
    "hero.title3": "que faz",
    "hero.title4": "o Porto",
    "hero.title5": "parar",
    "hero.subtitle":
      "Há mais de 50 anos servimos a francesinha mais autêntica da cidade. Uma experiência que ficará para sempre na memória.",
    "hero.cta1": "Reserve já a sua mesa",
    "hero.cta2": "Ver localização",

    // Social Proof
    "social.years": "Anos de Tradição",
    "social.morethan": "mais de",
    "social.customers": "Clientes Satisfeitos",
    "social.rating": "Avaliação no Google",
    "social.rank": "Melhor Francesinha do Porto",

    // Problem Section
    "problem.title": "Exigente com a sua francesinha?",
    "problem.title2": "Nós também",
    "problem.subtitle":
      "Molho autêntico, ingredientes frescos e pão crocante. A receita tradicional do Porto, feita com amor e dedicação.",
    "problem.sauce": "Molho Autêntico",
    "problem.sauce.desc": "Nossa receita secreta, guardada há 3 gerações, feita com ingredientes frescos e amor",
    "problem.meat": "Carne Fresca",
    "problem.meat.desc": "Carnes selecionadas diariamente, para garantir o melhor sabor",
    "problem.price": "Preço Justo",
    "problem.price.desc": "Pague um preço justo por uma francesinha de qualidade, feita com amor e dedicação",
    "problem.solution": "No Capa Negra I, é",
    "problem.solution2": "diferente",
    "problem.solution.desc":
      "Nossa receita secreta, feita com ingredientes frescos e amor, é a escolha certa para quem procura uma francesinha autêntica e deliciosa.",

    // Products
    "products.title": "Mais do que uma francesinha",
    "products.subtitle":
      "Descubra os sabores autênticos que fazem do Capa Negra I uma referência gastronómica no Porto",
    "products.francesinha": "Francesinha Especial",
    "products.francesinha.sub": "O nosso prato-estrela",
    "products.francesinha.desc":
      "A receita original com o nosso molho secreto, carnes seleccionadas e queijo derretido na perfeição.",
    "products.francesinha.normal.title": "Francesinha Normal",
    "products.francesinha.normal.price": "€12,50",
    "products.francesinha.normal.desc": "O sanduíche tradicional do Porto com presunto, linguiça, bife, queijo derretido e nosso molho especial",
    "products.francesinha.hamburger.title": "Francesinha de Hambúrguer",
    "products.francesinha.hamburger.price": "€12,50",
    "products.francesinha.hamburger.desc": "Nossa francesinha especial feita com hambúrguer artesanal, queijo derretido e molho especial",
    "products.francesinha.hotdog.title": "Cachorro Especial",
    "products.francesinha.hotdog.price": "€10,00",
    "products.francesinha.hotdog.desc": "Cachorro quente especial com salsicha artesanal, queijo derretido, bacon e molhos especiais",
    "products.francesinha.egg.title": "Francesinha de c/ovo",
    "products.francesinha.egg.price": "€13,50",
    "products.francesinha.egg.desc": "Nossa francesinha especial e ovo estrelado por cima",
    "products.francesinha.picanha.title": "Francesinha de picanha c/ovo",
    "products.francesinha.picanha.price": "€14,50",
    "products.francesinha.picanha.desc": "Nossa francesinha especial com picanha e ovo estrelado por cima",
    "products.francesinha.special.title": "Francesinha Capa Negra 1",
    "products.francesinha.special.price": "€14,50",
    "products.francesinha.special.desc": "Versão especial com Bacon, e molho aprimorado Capa Negra 1",

    // Testimonials
    "testimonials.title": "O que dizem sobre nós",
    "testimonials.subtitle": "Mais de 1 000 clientes não podem estar enganados",
    "testimonials.1":
      "Finalmente encontrei a francesinha perfeita! O molho é incrível e a carne derrete-se na boca. Voltarei sempre que vier ao Porto.",
    "testimonials.2":
      "Sou do Porto e posso garantir: esta é a francesinha mais autêntica da cidade. O sabor faz-me lembrar a infância.",
    "testimonials.3":
      "Amazing experience! The francesinha was incredible and the service was perfect. A must-visit in Porto!",

    // Urgency
    "urgency.title": "⚠️ Atenção: Estamos mesmo esgotados sempre!",
    "urgency.subtitle":
      "Somos um dos restaurantes mais procurados do Porto. Muitos clientes ficam sem mesa por não fazerem reserva com antecedência.",

    "urgency.warning": "Não perca a oportunidade de provar uma das melhores francesinhas do Porto.",

    // Final CTA
    "cta.title": "Reserve já e garanta a sua mesa",
    "cta.subtitle":
      "Não deixe para amanhã o que pode saborear hoje. A francesinha que vai marcar a sua vida está à sua espera.",
    "cta.fast": "Reserva Rápida",
    "cta.fast.desc": "Em menos de 2 minutos",
    "cta.guaranteed": "Mesa Garantida",
    "cta.guaranteed.desc": "Sem filas nem esperas",
    "cta.experience": "Experiência Única",
    "cta.experience.desc": "Que vai recordar para sempre",
    "cta.button": "RESERVE JÁ A SUA MESA",
    "cta.benefits": "✅ Confirmação imediata • ✅ Sem taxas • ✅ Cancelamento gratuito até 2 h antes",

    // Contact
    "contact.location": "Localização",
    "contact.phone": "Telefone",
    "contact.phone.desc": "Chamada para rede fixa nacional",
    "contact.hours": "Horário",
    "contact.hours.weekdays": "Segunda a Quinta: 10h00–23h00",
    "contact.hours.weekend": "Sexta - Sábado 10h00–00h00",

    // Footer
    "footer.tagline": "A autêntica francesinha do Porto desde 1969.",
    "footer.description": "Tradição, qualidade e sabor em cada prato.",
    "footer.rights": "Todos os direitos reservados."
  },


  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "nav.reserve": "Book a Table",

    // Products - English
    "products.francesinha.normal.title": "Classic Francesinha",
    "products.francesinha.normal.price": "€12.50",
    "products.francesinha.normal.desc": "Porto's traditional sandwich with ham, chorizo, steak, melted cheese and our special sauce",
    "products.francesinha.hamburger.title": "Burger Francesinha",
    "products.francesinha.hamburger.price": "€12.50",
    "products.francesinha.hamburger.desc": "Our special francesinha made with artisanal burger, melted cheese and special sauce",
    "products.francesinha.hotdog.title": "Special Hot Dog",
    "products.francesinha.hotdog.price": "€10.00",
    "products.francesinha.hotdog.desc": "Special hot dog with artisanal sausage, melted cheese, bacon and special sauces",
    "products.francesinha.egg.title": "Francesinha with Egg",
    "products.francesinha.egg.price": "€13.50",
    "products.francesinha.egg.desc": "Our special francesinha with a fried egg on top",
    "products.francesinha.picanha.title": "Francesinha with Picanha and Egg",
    "products.francesinha.picanha.price": "€14.50",
    "products.francesinha.picanha.desc": "Our special francesinha with picanha and a fried egg on top",
    "products.francesinha.special.title": "Capa Negra 1 Francesinha",
    "products.francesinha.special.price": "€14.50",
    "products.francesinha.special.desc": "Special version with Bacon, enhanced Capa Negra 1 sauce",

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
    "products.pasteis": "Codfish Cakes",
    "products.pasteis.sub": "Crispy and tasty",
    "products.pasteis.desc":
      "Hand-shredded Porto codfish, potato and secret seasonings. Fried fresh for maximum crispiness.",
    "products.desserts": "House Desserts",
    "products.desserts.sub": "Perfect ending to your meal",
    "products.desserts.desc":
      "Homemade pudding, burnt cream and other delights that complete the gastronomic experience.",

    // Testimonials
    "testimonials.title": "What they say about us",
    "testimonials.subtitle": "More than 1,000 customers can't be wrong",
    "testimonials.1":
      "Finally found the perfect francesinha! The sauce is incredible and the meat melts in your mouth. I'll come back every time I visit Porto.",
    "testimonials.2":
      "I'm from Porto and I can guarantee: this is the most authentic francesinha in the city. The taste reminds me of childhood.",
    "testimonials.3":
      "Amazing experience! The francesinha was incredible and the service was perfect. A must-visit in Porto!",

    // Urgency
    "urgency.title": "⚠️ Warning: We're full every day!",
    "urgency.subtitle":
      "We're one of the most sought-after restaurants in Porto. Many customers are left without a table for not booking in advance.",
    "urgency.warning": "Don't miss the opportunity to taste one of the best francesinhas in Porto.",

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
    "contact.hours.weekdays": "Monday - Thursday: 10am to 11pm",
    "contact.hours.weekend": "Friday - Saturday: 10am to 12am", 

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

    // Products - French
    "products.title": "Plus qu'une simple francesinha",
    "products.subtitle": "Découvrez les saveurs authentiques qui font de Capa Negra I une référence gastronomique à Porto",
    "products.francesinha.normal.title": "Francesinha Classique",
    "products.francesinha.normal.price": "12,50€",
    "products.francesinha.normal.desc": "Le sandwich traditionnel de Porto avec jambon, chorizo, steak, fromage fondu et notre sauce spéciale",
    "products.francesinha.hamburger.title": "Francesinha Burger",
    "products.francesinha.hamburger.price": "12,50€",
    "products.francesinha.hamburger.desc": "Notre francesinha spéciale préparée avec un burger artisanal, du fromage fondu et une sauce spéciale",
    "products.francesinha.hotdog.title": "Hot-Dog Spécial",
    "products.francesinha.hotdog.price": "10,00€",
    "products.francesinha.hotdog.desc": "Hot-dog spécial avec saucisse artisanale, fromage fondu, bacon et sauces spéciales",
    "products.francesinha.egg.title": "Francesinha avec Œuf",
    "products.francesinha.egg.price": "13,50€",
    "products.francesinha.egg.desc": "Notre francesinha spéciale avec un œuf au plat sur le dessus",
    "products.francesinha.picanha.title": "Francesinha Picanha avec Œuf",
    "products.francesinha.picanha.price": "14,50€",
    "products.francesinha.picanha.desc": "Notre francesinha spéciale avec de la picanha et un œuf au plat sur le dessus",
    "products.francesinha.special.title": "Francesinha Capa Negra 1",
    "products.francesinha.special.price": "14,50€",
    "products.francesinha.special.desc": "Version spéciale avec Bacon, sauce améliorée Capa Negra 1",
    // Testimonials
    "testimonials.title": "Ce qu'ils disent de nous",
    "testimonials.subtitle": "Plus de 1 000 clients ne peuvent pas se tromper",
    "testimonials.1":
      "J'ai enfin trouvé la francesinha parfaite ! La sauce est incroyable et la viande fond dans la bouche. Je reviendrai à chaque visite à Porto.",
    "testimonials.2":
      "Je suis de Porto et je peux garantir : c'est la francesinha la plus authentique de la ville. Le goût me rappelle l'enfance.",
    "testimonials.3":
      "Expérience incroyable ! La francesinha était incroyable et le service parfait. Un incontournable à Porto !",

    // Urgency
    "urgency.title": "⚠️ Attention : Nous sommes complets tous les jours !",
    "urgency.subtitle":
      "Nous sommes l'un des restaurants les plus recherchés de Porto. Beaucoup de clients restent sans table faute de réserver à l'avance.",
    "urgency.warning": "Ne ratez pas l'opportunité de goûter une des meilleures francesinhas de Porto.",

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
    "contact.hours.weekdays": "Lundi - Jeudi : 10h à 23h",
    "contact.hours.weekend": "Vendredi - Dimanche : 10h à 00h",

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

    // Products - Spanish
    "products.title": "Más que una simple francesinha",
    "products.subtitle": "Descubre los sabores auténticos que hacen de Capa Negra I una referencia gastronómica en Oporto",
    "products.francesinha.normal.title": "Francesinha Clásica",
    "products.francesinha.normal.price": "12,50€",
    "products.francesinha.normal.desc": "El sándwich tradicional de Oporto con jamón, chorizo, bistec, queso fundido y nuestra salsa especial",
    "products.francesinha.hamburger.title": "Francesinha de Hamburguesa",
    "products.francesinha.hamburger.price": "12,50€",
    "products.francesinha.hamburger.desc": "Nuestra francesinha especial hecha con hamburguesa artesanal, queso fundido y salsa especial",
    "products.francesinha.hotdog.title": "Perrito Caliente Especial",
    "products.francesinha.hotdog.price": "10,00€",
    "products.francesinha.hotdog.desc": "Perrito caliente especial con salchicha artesanal, queso fundido, bacon y salsas especiales",
    "products.francesinha.egg.title": "Francesinha con Huevo",
    "products.francesinha.egg.price": "13,50€",
    "products.francesinha.egg.desc": "Nuestra francesinha especial con huevo frito encima",
    "products.francesinha.picanha.title": "Francesinha de Picaña con Huevo",
    "products.francesinha.picanha.price": "14,50€",
    "products.francesinha.picanha.desc": "Nuestra francesinha especial con picaña y huevo frito encima",
    "products.francesinha.special.title": "Francesinha Capa Negra 1",
    "products.francesinha.special.price": "14,50€",
    "products.francesinha.special.desc": "Versión especial con Bacon, salsa mejorada Capa Negra 1",

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
    "social.morethan": "más que",
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

    // Products - Spanish
    // Testimonials
    "testimonials.title": "Lo que dicen de nosotros",
    "testimonials.subtitle": "Más de 1.000 clientes no pueden estar equivocados",
    "testimonials.1":
      "¡Finalmente encontré la francesinha perfecta! La salsa es increíble y la carne se derrite en la boca. Volveré cada vez que visite Oporto.",
    "testimonials.2":
      "Soy de Oporto y puedo garantizar: esta es la francesinha más auténtica de la ciudad. El sabor me recuerda a la infancia.",
    "testimonials.3":
      "¡Experiencia increíble! La francesinha fue increíble y el servicio perfecto. ¡Una visita obligada en Oporto!",

    // Urgency
    "urgency.title": "⚠️ Atención: ¡Estamos llenos todos los días!",
    "urgency.subtitle":
      "Somos uno de los restaurantes más buscados de Oporto. Muchos clientes se quedan sin mesa por no reservar con antelación.",
    "urgency.warning": "No pierdas la oportunidad de probar una de las mejores francesinhas de Oporto.",

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
    "contact.hours.weekdays": "Lunes - Jueves: 10h a 23h",
    "contact.hours.weekend": "Viernes - Sabado: 10h a 00h",

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
