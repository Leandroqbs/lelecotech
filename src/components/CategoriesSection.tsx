import { 
  Smartphone, 
  Shirt, 
  Home, 
  Utensils, 
  Dumbbell, 
  Plane,
  Baby,
  Sparkles
} from "lucide-react";

const categories = [
  { icon: Smartphone, name: "Eletrônicos" },
  { icon: Shirt, name: "Moda" },
  { icon: Home, name: "Casa" },
  { icon: Utensils, name: "Cozinha" },
  { icon: Dumbbell, name: "Fitness" },
  { icon: Plane, name: "Viagens" },
  { icon: Baby, name: "Bebês" },
  { icon: Sparkles, name: "Beleza" },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-yellow-400">Categorias</span> de Ofertas
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Encontramos as melhores ofertas em diversas categorias
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card-glow rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <category.icon className="w-10 h-10 mx-auto mb-3 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
