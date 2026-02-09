import { motion } from "framer-motion";
import { Building2, Cpu, MapPin } from "lucide-react";

const deploymentStats = [
  {
    icon: Building2,
    label: "운영 중 건물",
    stat: "649개 건물",
    subtext: "(운영 중 522개 / 구축 완료 127개)",
  },
  {
    icon: Cpu,
    label: "스마트 디바이스",
    stat: "348,950개",
    subtext: "현장 단위 실시간 계측·제어",
  },
  {
    icon: MapPin,
    label: "적용 범위",
    stat: "다양한 시설",
    subtext: "공장 · 캠퍼스 · 오피스 · 상업시설 · 산업 현장",
  },
];

const impactStats = [
  {
    emoji: "⚡",
    label: "에너지 절감",
    stat: "38 GWh",
    subtext: "연간 전력 에너지 절감 총괄",
    gradient: "from-blue-900 via-blue-700 to-blue-500",
    glowColor: "shadow-[0_0_60px_-10px_rgba(59,130,246,0.5)]",
    statColor: "text-cyan-300",
    iconBg: "bg-blue-500/20",
  },
  {
    emoji: "🌱",
    label: "CO₂ 절감",
    stat: "18,057 t",
    subtext: "약 109,682그루 소나무 식재 효과",
    gradient: "from-emerald-900 via-emerald-700 to-emerald-500",
    glowColor: "shadow-[0_0_60px_-10px_rgba(16,185,129,0.5)]",
    statColor: "text-emerald-300",
    iconBg: "bg-emerald-500/20",
  },
  {
    emoji: "🏠",
    label: "실생활 환산",
    stat: "10,326가구",
    subtext: "4인 가구 기준 연간 사용량 환산",
    gradient: "from-amber-900 via-amber-700 to-amber-500",
    glowColor: "shadow-[0_0_60px_-10px_rgba(245,158,11,0.5)]",
    statColor: "text-amber-200",
    iconBg: "bg-amber-500/20",
  },
];

export function SectionReferenceStats() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground tracking-tight mb-4">
            국내 최대 규모의 구축·운영으로 검증된 실증 레퍼런스
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            실제 운영 데이터로 검증된 에너지 최적화
          </p>
        </motion.div>

        {/* Top Row - 구축 현황 */}
        <div className="mb-12 md:mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-muted-foreground mb-6 text-center"
          >
            구축 규모
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-5">
            {deploymentStats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {item.stat}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12 md:mb-16" />

        {/* Bottom Row - 환경 임팩트 */}
        <div className="mb-10">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-muted-foreground mb-6 text-center"
          >
            환경 임팩트
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-5">
            {impactStats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`group relative rounded-2xl p-7 md:p-8 bg-gradient-to-br ${item.gradient} ${item.glowColor} overflow-hidden hover:scale-[1.02] transition-all duration-300`}
              >
                {/* Backdrop blur overlay */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
                
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} backdrop-blur-sm flex items-center justify-center text-2xl`}>
                      {item.emoji}
                    </div>
                    <span className="text-sm font-medium text-white/80">
                      {item.label}
                    </span>
                  </div>
                  <p className={`text-3xl md:text-4xl font-bold ${item.statColor} mb-2 drop-shadow-lg`}>
                    {item.stat}
                  </p>
                  <p className="text-sm text-white/70">
                    {item.subtext}
                  </p>
                </div>

                {/* Hover sparkle effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-1 h-1 bg-white rounded-full animate-pulse" />
                  <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse delay-100" />
                  <div className="absolute bottom-8 left-8 w-1 h-1 bg-white/60 rounded-full animate-pulse delay-200" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground"
        >
          * 실적/통계 수치는 프로젝트 조건에 따라 달라질 수 있습니다.
        </motion.p>
      </div>
    </section>
  );
}
