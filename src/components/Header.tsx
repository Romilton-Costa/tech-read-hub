import { Button } from "@/components/ui/button";
import { BookOpen, Menu, User } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="gradient-primary p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">TechRead</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#biblioteca" className="text-sm hover:text-primary transition-colors">
              Biblioteca
            </a>
            <a href="#categorias" className="text-sm hover:text-primary transition-colors">
              Categorias
            </a>
            <a href="#planos" className="text-sm hover:text-primary transition-colors">
              Planos
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              Entrar
            </Button>
            <Button variant="hero" size="sm">
              Começar Agora
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}