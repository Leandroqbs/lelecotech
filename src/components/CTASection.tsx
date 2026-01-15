import { MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-800/50 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para <span className="text-yellow-400">economizar</span>?
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
          Entre agora em nossos grupos e comece a aproveitar as melhores ofertas do Brasil!
        </p>
        
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
    </section>
  );
};

export default CTASection;
