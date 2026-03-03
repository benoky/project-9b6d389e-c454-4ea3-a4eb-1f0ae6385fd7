import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="py-12 md:py-16" style={{ background: 'linear-gradient(135deg, hsl(217 91% 50%) 0%, hsl(220 80% 40%) 100%)' }}>
      <div className="container-tight">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Logo variant="white" />
            <nav className="flex flex-wrap justify-center gap-5 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">이용약관</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">문의</a>
            </nav>
          </div>

          {/* Family Site - right aligned */}
          <div className="flex flex-col items-center md:items-end gap-1.5">
            <span className="text-xs font-medium text-white/50 tracking-wide uppercase">Family Site</span>
            <div className="flex items-center gap-3 text-sm">
              <a
                href="https://nxcorp.io/?utm_source=nxenergy_landing&utm_medium=footer_family&utm_campaign=family_site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                공식 웹사이트
              </a>
              <span className="text-white/30">·</span>
              <a
                href="https://enbrix.io/?utm_source=nxenergy_landing&utm_medium=footer_family&utm_campaign=family_site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                enbrix 웹사이트
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/15 mt-8 pt-6 text-center">
          <p className="text-xs text-white/50">© 2026 NX Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
