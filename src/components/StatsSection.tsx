import { Gift, Clock, Wallet } from "lucide-react";

const stats = [
  {
    icon: Gift,
    value: "+1000",
    label: "Ofertas",
    color: "text-cyan-400",
  },
  {
    icon: Clock,
    value: "Promoções",
    label: "Diárias",
    color: "text-yellow-400",
  },
  {
    icon: Wallet,
    value: "100%",
    label: "Grátis",
    color: "text-cyan-400",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-glow rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105"
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
