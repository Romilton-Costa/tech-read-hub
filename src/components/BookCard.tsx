import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Star } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  category: string;
  duration: string;
  rating: number;
  level: "Iniciante" | "Intermediário" | "Avançado";
  coverUrl?: string;
  description: string;
}

export function BookCard({ 
  title, 
  author, 
  category, 
  duration, 
  rating, 
  level, 
  coverUrl, 
  description 
}: BookCardProps) {
  const levelColors = {
    "Iniciante": "bg-success-light text-success",
    "Intermediário": "bg-accent/20 text-accent-foreground", 
    "Avançado": "bg-primary-light text-primary"
  };

  return (
    <Card className="group hover:shadow-hover transition-all duration-300 cursor-pointer gradient-card border-card-border">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <Badge className={`text-xs ${levelColors[level]}`}>
            {level}
          </Badge>
        </div>
        
        <div className="aspect-[3/4] bg-gradient-reading rounded-lg mb-3 flex items-center justify-center border border-card-border">
          {coverUrl ? (
            <img 
              src={coverUrl} 
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <BookOpen className="h-12 w-12 text-primary opacity-50" />
          )}
        </div>
        
        <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">por {author}</p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-accent text-accent" />
            <span>{rating}</span>
          </div>
        </div>
        
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
          Começar Leitura
        </Button>
      </CardContent>
    </Card>
  );
}