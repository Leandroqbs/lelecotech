const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 mb-4">
          <span className="text-lg font-bold text-slate-900">LT</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Leleco Tech. Todos os direitos reservados.
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2">
          As ofertas divulgadas são de responsabilidade das lojas parceiras.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
