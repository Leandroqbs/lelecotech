import { Tag, Zap, PiggyBank } from "lucide-react";

const benefits = [
  {
    icon: Tag,
    title: "Cupons Exclusivos",
    description: "Acesso a cupons de desconto exclusivos das maiores lojas do Brasil.",
    color: "text-cyan-400",
  },
  {
    icon: Zap,
    title: "Ofertas Relâmpago",
    description: "Seja o primeiro a saber das ofertas que duram poucas horas.",
    color: "text-yellow-400",
  },
  {
    icon: PiggyBank,
    title: "Economia Real",
    description: "Nossos membros economizam em média R$500 por mês.",
    color: "text-cyan-400",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Por que <span className="text-cyan-400">participar</span>?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Descubra os benefícios de fazer parte da nossa comunidade de ofertas
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-glow rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-700/50 mb-6`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
