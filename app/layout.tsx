import type { ReactNode } from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import Head from "next/head"          // 👈 importa <Head> para escrever no <head>

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Capa Negra I - Autêntica Francesinha do Porto",
  description:
    "Restaurante especializado na autêntica francesinha do Porto desde 1968. Experimente a melhor francesinha da cidade.",
  generator: "make4ryan",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt">
      {/* --------  HEAD  -------- */}
      <body className={inter.className}>
        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16981555594"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16981555594');
            `,
          }}
        />
      

      {/* --------  BODY  -------- */}
      
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
