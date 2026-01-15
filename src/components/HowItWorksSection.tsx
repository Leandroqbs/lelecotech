const steps = [
  {
    number: "1",
    title: "Escolha o grupo",
    description: "Selecione WhatsApp ou Telegram para receber as ofertas.",
  },
  {
    number: "2",
    title: "Entre no grupo",
    description: "Clique no botão e entre no grupo gratuitamente.",
  },
  {
    number: "3",
    title: "Receba ofertas",
    description: "Pronto! Agora você receberá as melhores promoções.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Como <span className="text-cyan-400">Funciona</span>?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          É muito simples começar a economizar
        </p>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-6 card-glow rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-900">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
