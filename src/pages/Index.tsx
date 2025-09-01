const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="w-16 h-16 mx-auto mb-8 bg-primary rounded-2xl shadow-soft flex items-center justify-center">
          <div className="w-8 h-8 bg-primary-foreground rounded-lg"></div>
        </div>
        <h1 className="text-3xl font-semibold text-foreground mb-4 tracking-tight">
          Your Blank Canvas
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
          A clean, minimal space ready for your next great idea.
        </p>
      </div>
    </div>
  );
};

export default Index;
