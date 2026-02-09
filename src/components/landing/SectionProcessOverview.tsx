import { motion } from "framer-motion";
import { Search, Settings, BarChart3, Check } from "lucide-react";

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

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl p-6 md:p-7 bg-white border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              {/* Card content with icon on right */}
              <div className="flex gap-5">
                {/* Left: Text content */}
                <div className="flex-1 min-w-0">
                  {/* Step badge */}
                  <div className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide mb-4 bg-primary/10 text-primary">
                    {item.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {item.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-border/60 mb-5" />

                  {/* Bullets with checkmarks */}
                  <ul className="space-y-3">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-primary/10">
                          <Check className="w-2.5 h-2.5 text-primary" />
                        </span>
                        <span className="leading-relaxed text-muted-foreground">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Icon */}
                <div className="flex-shrink-0 hidden md:flex items-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-accent/80 group-hover:bg-primary/10 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Mobile: Icon above content */}
                <div className="absolute top-6 right-6 md:hidden">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent/80">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
