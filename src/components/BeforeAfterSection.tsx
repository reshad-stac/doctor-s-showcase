import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const transformations = [
  {
    title: "Smile Makeover",
    description: "Complete smile transformation with porcelain veneers",
    before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1581391524581-b5e9dcd5e9cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    procedure: "Porcelain Veneers",
    duration: "2 weeks",
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening for a brighter, more confident smile",
    before: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    procedure: "Zoom Whitening",
    duration: "1 session",
  },
  {
    title: "Invisalign Treatment",
    description: "Straighten teeth discreetly with clear aligners",
    before: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    procedure: "Invisalign",
    duration: "12 months",
  },
];

const BeforeAfterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextCase = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
    setSliderPosition(50);
  }, []);

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    setSliderPosition(50);
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextCase, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextCase]);

  const current = transformations[currentIndex];

  return (
    <section id="results" className="section-padding bg-muted/30">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Results</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Before & After Transformations
          </h2>
          <p className="text-muted-foreground text-lg">
            See the remarkable results our patients have achieved. Drag the slider to compare before and after.
          </p>
        </div>

        {/* Slider Component */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-3xl overflow-hidden shadow-xl border border-border/50">
            {/* Image Comparison */}
            <div 
              className="relative h-[400px] md:h-[500px] cursor-ew-resize select-none"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                setSliderPosition(Math.min(Math.max(x, 0), 100));
              }}
              onTouchMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
                setSliderPosition(Math.min(Math.max(x, 0), 100));
              }}
            >
              {/* After Image (Background) */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${current.after})` }}
              />
              
              {/* Before Image (Foreground with clip) */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${current.before})`,
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                }}
              />

              {/* Slider Line */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="flex items-center gap-1">
                    <ChevronLeft className="w-4 h-4 text-primary" />
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-foreground">Before</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-foreground">After</span>
              </div>
            </div>

            {/* Info Panel */}
            <div className="p-6 md:p-8 border-t border-border">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {current.title}
                  </h3>
                  <p className="text-muted-foreground">{current.description}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Procedure</p>
                    <p className="font-semibold text-foreground">{current.procedure}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Duration</p>
                    <p className="font-semibold text-foreground">{current.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevCase}
              className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors shadow-md"
              aria-label="Previous case"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            
            <div className="flex items-center gap-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSliderPosition(50);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-primary" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to case ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextCase}
              className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors shadow-md"
              aria-label="Next case"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shadow-md"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
