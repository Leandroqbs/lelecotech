import { MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/button";
import heroMascot from "@/assets/hero-mascot.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="mb-8">
          <img 
            src={heroMascot} 
            alt="Leleco Tech Mascote" 
            className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain"
          />
        </div>
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-foreground">Leleco</span>{" "}
          <span className="text-gradient-cyan">Tech</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          Receba as <span className="text-cyan-400 font-semibold">melhores ofertas</span> e{" "}
          <span className="text-yellow-400 font-semibold">promoções</span> diretamente no seu celular!
        </p>
        
        <p className="text-muted-foreground mb-10">
          Participe dos nossos grupos e economize todos os dias.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-green-500/25 transition-all hover:scale-105"
            asChild
          >
            <a href="https://chat.whatsapp.com/IangFZi3jBW814rRyKSoDB" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              Entrar no WhatsApp
            </a>
          </Button>
          
          <Button
            size="lg"
            className="bg-telegram hover:bg-telegram/90 text-telegram-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
            asChild
          >
            <a href="https://t.me/lelecotechofertas" target="_blank" rel="noopener noreferrer">
              <Send className="mr-2 h-6 w-6" />
              Entrar no Telegram
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
