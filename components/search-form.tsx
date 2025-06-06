"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchForm() {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar a lógica de busca aqui
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSubmit} className="relative mt-4 w-full">
      <Input
        type="text"
        placeholder="Pesquisar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pr-10"
      />
      <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0">
        <Search className="h-4 w-4" />
        <span className="sr-only">Pesquisar</span>
      </Button>
    </form>
  )
}
