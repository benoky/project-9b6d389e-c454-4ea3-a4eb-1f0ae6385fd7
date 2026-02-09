import { motion } from "framer-motion";
import { Search, Settings, BarChart3, Check, ArrowRight } from "lucide-react";

const steps = [{
  step: "STEP 1",
  icon: Search,
  title: "진단",
  subtitle: "어디를 최적화해야 하는지부터 파악합니다",
  bullets: ["설비·공간·운영 패턴 기준으로 에너지 사용 구조 분석", "효과가 나올 수 있는 영역부터 선별"]
}, {
  step: "STEP 2",
  icon: Settings,
  title: "구축",
  subtitle: "최적의 설계로 에너지 최적화를 구축합니다",
  bullets: ["불필요한 범위를 제외한 최적의 설계 진행", "필요한 경우에만 설비 교체 및 구축"]
}, {
  step: "STEP 3",
  icon: BarChart3,
  title: "운영",
  subtitle: "정밀한 모니터링으로 에너지를 최적화합니다",
  bullets: ["실시간 모니터링과 데이터 기반 운영", "상황별 제어로 지속적인 에너지 최적화"]
}];

export function SectionProcessOverview() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            프로세스
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground tracking-tight">
            NX는 이렇게 에너지를 최적화합니다
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-5 md:gap-8 items-stretch">
          {/* Subtle arrow connectors - Desktop only */}
          <div className="hidden md:flex absolute top-1/2 left-[33.33%] -translate-x-1/2 -translate-y-1/2 z-10">
            <ArrowRight className="w-4 h-4 text-muted-foreground/40" />
          </div>
          <div className="hidden md:flex absolute top-1/2 left-[66.66%] -translate-x-1/2 -translate-y-1/2 z-10">
            <ArrowRight className="w-4 h-4 text-muted-foreground/40" />
          </div>

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl p-7 md:p-8 flex flex-col bg-white border border-border/60 shadow-lg shadow-black/[0.03] transition-all duration-300 hover:bg-gradient-to-br hover:from-primary hover:via-primary hover:to-primary/80 hover:border-primary hover:shadow-xl hover:shadow-primary/20"
            >
              {/* Mobile arrow indicator */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
                  <ArrowRight className="w-4 h-4 text-muted-foreground/40 rotate-90" />
                </div>
              )}

              {/* Step badge */}
              <div className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-6 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                {item.step}
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent transition-colors duration-300 group-hover:bg-white/20">
                  <item.icon className="w-5 h-5 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>
              </div>

              {/* Subtitle */}
              <p className="text-sm mb-6 leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/80">
                {item.subtitle}
              </p>

              {/* Divider */}
              <div className="w-full h-px mb-6 bg-border transition-colors duration-300 group-hover:bg-white/20" />

              {/* Bullets with checkmarks */}
              <ul className="space-y-3 flex-1">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-primary/10 transition-colors duration-300 group-hover:bg-white/20">
                      <Check className="w-3 h-3 text-primary transition-colors duration-300 group-hover:text-white" />
                    </span>
                    <span className="leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/90">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
