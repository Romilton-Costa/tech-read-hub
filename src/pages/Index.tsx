import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/BookCard";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Zap, 
  Users, 
  Trophy,
  ArrowRight,
  Check,
  Play,
  Search
} from "lucide-react";
import heroImage from "@/assets/hero-books.jpg";

const Index = () => {
  const featuredBooks = [
    {
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      category: "Programação",
      duration: "8h 30min", 
      rating: 4.8,
      level: "Intermediário" as const,
      description: "Aprenda princípios fundamentais para escrever código limpo, legível e maintível."
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      category: "Arquitetura de Software",
      duration: "12h 15min",
      rating: 4.9,
      level: "Avançado" as const,
      description: "Guia definitivo para construir sistemas de dados robustos e escaláveis."
    },
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      category: "JavaScript",
      duration: "4h 20min",
      rating: 4.7,
      level: "Iniciante" as const,
      description: "Descubra as melhores práticas e recursos mais eficazes do JavaScript."
    },
    {
      title: "System Design Interview",
      author: "Alex Xu",
      category: "Engenharia de Software",
      duration: "6h 45min",
      rating: 4.6,
      level: "Intermediário" as const,
      description: "Prepare-se para entrevistas de system design com exemplos práticos."
    }
  ];

  const categories = [
    "Programação", "Arquitetura", "DevOps", "Dados", "IA/ML", "Mobile"
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Biblioteca Técnica Completa",
      description: "Acesse milhares de livros técnicos atualizados dos melhores autores."
    },
    {
      icon: Zap,
      title: "Leitura Otimizada",
      description: "Interface projetada especificamente para leitura técnica com anotações."
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Conecte-se com outros desenvolvedores e compartilhe conhecimento."
    },
    {
      icon: Trophy,
      title: "Progresso Gamificado",
      description: "Acompanhe seu aprendizado com metas e conquistas personalizadas."
    }
  ];

  const plans = [
    {
      name: "Básico",
      price: "R$ 29",
      period: "/mês",
      description: "Para quem está começando",
      features: [
        "Acesso a 100+ livros",
        "Anotações básicas",
        "Progresso de leitura",
        "Suporte por email"
      ]
    },
    {
      name: "Premium",
      price: "R$ 59", 
      period: "/mês",
      description: "Para profissionais",
      features: [
        "Acesso ilimitado a todos os livros",
        "Anotações avançadas e highlights",
        "Resumos gerados por IA",
        "Downloads offline",
        "Suporte prioritário"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "R$ 199",
      period: "/mês",
      description: "Para times e empresas",
      features: [
        "Tudo do Premium",
        "Dashboard de equipe",
        "Relatórios de progresso",
        "API de integração",
        "Treinamentos personalizados"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary-light text-primary">
                🚀 Mais de 10.000 desenvolvedores já usam
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Acelere sua carreira tech com leitura inteligente
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Acesse a maior biblioteca de livros técnicos em português, 
                com ferramentas de anotação e progresso personalizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="xl" className="group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Começar Gratuitamente
                </Button>
                <Button variant="outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Ver Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src={heroImage} 
                alt="Livros técnicos digitais"
                className="w-full rounded-2xl shadow-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore por Categoria</h2>
            <p className="text-muted-foreground text-lg">
              Encontre exatamente o que precisa para evoluir suas habilidades
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline" className="group">
              <Search className="mr-2 h-4 w-4" />
              Ver Todas as Categorias
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section id="biblioteca" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Livros em Destaque</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Seleção especial dos livros mais procurados e bem avaliados pela comunidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Ver Biblioteca Completa
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Por que escolher o TechRead?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ferramenta completa projetada especificamente para desenvolvedores e profissionais de tecnologia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="gradient-primary p-4 rounded-2xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Planos que se Adaptam a Você</h2>
            <p className="text-muted-foreground text-lg">
              Escolha o plano ideal para acelerar seu aprendizado
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? "gradient-hero text-primary-foreground shadow-hover scale-105" 
                    : "bg-card border border-card-border shadow-card"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Mais Popular
                  </Badge>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className={`h-5 w-5 ${plan.popular ? "text-primary-foreground" : "text-success"}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "secondary" : "hero"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.popular ? "Começar Premium" : "Escolher Plano"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary-foreground p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">TechRead</h3>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                A plataforma definitiva para leitura de livros técnicos.
                Acelere seu aprendizado e carreira em tecnologia.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Biblioteca</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Programação</li>
                <li>Arquitetura</li>
                <li>DevOps</li>
                <li>Ciência de Dados</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Anotações</li>
                <li>Progresso</li>
                <li>Comunidade</li>
                <li>API</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Central de Ajuda</li>
                <li>Contato</li>
                <li>Status</li>
                <li>Política de Privacidade</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
            © 2024 TechRead. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;