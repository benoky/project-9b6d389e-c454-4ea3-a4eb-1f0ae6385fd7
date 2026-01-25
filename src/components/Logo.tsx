import logoColor from "@/assets/logo-color.png";
import logoWhite from "@/assets/logo-white.png";

interface LogoProps {
  variant?: "color" | "white";
  className?: string;
}

export function Logo({ variant = "color", className = "" }: LogoProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a 
      href="#" 
      onClick={handleClick}
      className={`block ${className}`}
    >
      <img
        src={variant === "color" ? logoColor : logoWhite}
        alt="NX 로고"
        className="h-7 md:h-8 w-auto object-contain"
      />
    </a>
  );
}
