import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroVideo from "@/assets/hero-energy-flow.mp4";

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container-tight pt-28 pb-20 md:pt-36 md:pb-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center md:text-left md:mx-0 mx-auto"
        >
          {/* Headline */}
          <h1 className="text-[2.5rem] leading-[1.3] md:text-5xl lg:text-[3.5rem] font-extrabold text-white mb-6 text-balance tracking-tight">
            에너지 비용은 매년 오르는데,
            <br />
            <span className="text-white mt-1 inline-block">어떻게 대응해야 할까요.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#E5E7EB] mb-12 max-w-2xl text-balance leading-relaxed mx-auto md:mx-0">
            NX의 고객들은 구축 비용 없이 전기료를 절감하고, 에너지를 관리하고 있습니다.
          </p>

          {/* Primary CTA with animated gradient border */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <button 
              onClick={scrollToForm} 
              className="group relative px-8 py-4 rounded-full font-semibold text-slate-900 bg-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,110,244,0.4)]"
            >
              {/* Animated gradient border - energy flowing effect */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span 
                  className="absolute inset-[-200%] animate-energy-flow"
                  style={{
                    background: 'conic-gradient(from 0deg, #256ef4, #60a5fa, #22d3ee, #60a5fa, #256ef4)',
                  }}
                />
              </span>
              {/* Inner background */}
              <span className="absolute inset-[2px] rounded-full bg-white transition-all duration-300 group-hover:bg-white/95" />
              {/* Button content */}
              <span className="relative flex items-center gap-2">
                에너지 최적화 시작하기
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <span className="text-white text-sm font-medium">1분이면 완료. 무료 상담</span>
          </div>
        </motion.div>
      </div>

      {/* CSS for energy flow animation */}
      <style>{`
        @keyframes energy-flow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-energy-flow {
          animation: energy-flow 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
