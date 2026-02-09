import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroVideo from "@/assets/hero-energy-flow.mp4";

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-background to-background" />
      
      {/* Subtle blue glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/[0.08] rounded-full blur-[120px]" />

      <div className="relative container-tight pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Headline */}
            <h1 className="text-[2rem] leading-[1.3] md:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold text-foreground mb-6 text-balance tracking-tight">
              에너지 비용은 매년 오르는데,
              <br />
              <span className="gradient-text mt-1 inline-block">어떻게 대응해야 할까요.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 text-balance leading-relaxed">
              NX의 고객들은 구축 비용 없이 전기료를 절감하고, 에너지를 관리하고 있습니다.
            </p>

            {/* Primary CTA */}
            <Button onClick={scrollToForm} size="lg" className="gap-2 group">
              에너지 최적화 시작해보기
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right: Animated Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Glow effect behind video */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl scale-110" />
              
              {/* Video container */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_hsl(217_90%_50%/0.25)] border border-border/40">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                >
                  <source src={heroVideo} type="video/mp4" />
                </video>
              </div>

              {/* Subtle floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/30 rounded-full blur-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
