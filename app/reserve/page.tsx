"use client"

import { useState, useEffect } from "react"
import Script from "next/script"
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(
  "https://risygtszttwuanvwyoqc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpc3lndHN6dHR3dWFudnd5b3FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NTA3MzUsImV4cCI6MjA1ODIyNjczNX0.jbCA33ka6vcM6wyNJLoEsF4aZMVlif1Rs1Fr5UxeJfk"
)

const PHONE_NUMBER = "+351912463164" // Replace with your WhatsApp number

export default function ReservePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    isSpecialEvent: false,
    eventType: ""
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [minDate, setMinDate] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  useEffect(() => {
    // Set minimum date to today
    const today = new Date()
    setMinDate(today.toISOString().split('T')[0])
  }, [])

  const isSunday = (dateString: string): boolean => {
    if (!dateString) return false
    const date = new Date(dateString)
    return date.getDay() === 0 // 0 represents Sunday
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value
    
    if (isSunday(selectedDate)) {
      alert("Estamos fechados aos domingos. Por favor, selecione outro dia.")
      return
    }
    
    setForm(prev => ({ ...prev, date: selectedDate }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSunday(form.date)) {
      alert("Estamos fechados aos domingos. Por favor, selecione outro dia.")
      return
    }
    
    setIsLoading(true)
    
    try {
      // Save to Supabase
      const { data: reservation, error } = await supabase
        .from('reservations_cn')
        .insert([
          {
            name: form.name,
            email: form.email,
            phone: form.phone,
            date: form.date,
            time: form.time,
            people: parseInt(form.people),
            is_special_event: form.isSpecialEvent,
            event_type: form.eventType || null,
            restaurant: "Capa Negra I",
            status: 'pending'
          }
        ])
        .select()

      if (error) throw error

      // Format WhatsApp message
      const eventInfo = form.isSpecialEvent ? `\nTipo de Evento: ${form.eventType}` : ''
      const message = encodeURIComponent(
        `Olá, gostaria de fazer uma reserva no Restaurante Capa Negra I.\n\n` +
        `*Nome:* ${form.name}\n` +
        `*Email:* ${form.email}\n` +
        `*Telefone:* ${form.phone}\n` +
        `*Data:* ${form.date}\n` +
        `*Hora:* ${form.time}\n` +
        `*Número de pessoas:* ${form.people}` +
        `${eventInfo}`
      )
      
      // Open WhatsApp
      window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank')
      
    } catch (error) {
      console.error('Error saving reservation:', error)
      alert('Erro ao fazer a reserva. Por favor, tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16981555594"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16981555594');
        `}
      </Script>

      <div className="min-h-screen flex flex-col items-center justify-center py-12 relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(/pontePorto.jpg)',
              filter: 'brightness(0.7)'
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        {/* Form Container */}
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl w-full max-w-md relative z-10">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Faça sua reserva</h1>
            <p className="text-gray-600">Garanta o seu lugar no Capa Negra I</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Data</label>
              <input
                type="date"
                id="date"
                name="date"
                value={form.date}
                onChange={handleDateChange}
                min={minDate}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Hora</label>
              <input
                type="time"
                id="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2"
              />
            </div>
            <div>
              <label htmlFor="people" className="block text-sm font-medium text-gray-700">Número de pessoas</label>
              <input
                type="number"
                id="people"
                name="people"
                min="1"
                value={form.people}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isSpecialEvent"
                name="isSpecialEvent"
                checked={form.isSpecialEvent}
                onChange={(e) => setForm(prev => ({ ...prev, isSpecialEvent: e.target.checked }))}
                className="h-4 w-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
              />
              <label htmlFor="isSpecialEvent" className="text-sm font-medium text-gray-700">Evento Especial</label>
            </div>
            {form.isSpecialEvent && (
              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">Tipo de Evento</label>
                <input
                  type="text"
                  id="eventType"
                  name="eventType"
                  value={form.eventType}
                  onChange={handleChange}
                  placeholder="Ex: Aniversário, Casamento..."
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2"
                />
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-amber-500 text-white py-3 rounded-md font-semibold hover:bg-amber-600 transition-colors duration-300 transform hover:scale-[1.02] mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'A processar...' : 'Confirmar Reserva'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}