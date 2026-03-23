const balls: {
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
  opacity: number;
  anim: string;
}[] = [
  { size: 52, top: "3%",   left: "2%",   duration: 16, delay: 0,   opacity: 0.14, anim: "sport-float-a" },
  { size: 34, top: "7%",   left: "87%",  duration: 20, delay: -5,  opacity: 0.12, anim: "sport-float-b" },
  { size: 60, top: "72%",  left: "4%",   duration: 24, delay: -9,  opacity: 0.11, anim: "sport-float-c" },
  { size: 28, top: "82%",  left: "91%",  duration: 14, delay: -3,  opacity: 0.13, anim: "sport-float-d" },
  { size: 44, top: "38%",  left: "94%",  duration: 19, delay: -11, opacity: 0.10, anim: "sport-float-a" },
  { size: 22, top: "52%",  left: "0%",   duration: 12, delay: -6,  opacity: 0.11, anim: "sport-float-b" },
  { size: 38, top: "18%",  left: "48%",  duration: 28, delay: -14, opacity: 0.08, anim: "sport-float-c" },
  { size: 26, top: "63%",  left: "55%",  duration: 13, delay: -7,  opacity: 0.09, anim: "sport-float-d" },
  { size: 48, top: "88%",  left: "30%",  duration: 21, delay: -10, opacity: 0.10, anim: "sport-float-a" },
  { size: 32, top: "44%",  left: "72%",  duration: 17, delay: -4,  opacity: 0.11, anim: "sport-float-b" },
  { size: 20, top: "28%",  left: "15%",  duration: 11, delay: -2,  opacity: 0.09, anim: "sport-float-c" },
  { size: 42, top: "93%",  left: "68%",  duration: 23, delay: -8,  opacity: 0.08, anim: "sport-float-d" },
  { size: 30, top: "14%",  left: "32%",  duration: 15, delay: -13, opacity: 0.09, anim: "sport-float-a" },
  { size: 50, top: "57%",  left: "84%",  duration: 22, delay: -1,  opacity: 0.10, anim: "sport-float-b" },
  { size: 24, top: "78%",  left: "46%",  duration: 10, delay: -16, opacity: 0.08, anim: "sport-float-c" },
  { size: 36, top: "47%",  left: "26%",  duration: 18, delay: -12, opacity: 0.09, anim: "sport-float-d" },
  { size: 58, top: "96%",  left: "14%",  duration: 26, delay: -5,  opacity: 0.07, anim: "sport-float-a" },
  { size: 18, top: "22%",  left: "62%",  duration: 9,  delay: -3,  opacity: 0.10, anim: "sport-float-b" },
  { size: 46, top: "67%",  left: "37%",  duration: 20, delay: -18, opacity: 0.07, anim: "sport-float-c" },
  { size: 28, top: "35%",  left: "8%",   duration: 14, delay: -7,  opacity: 0.11, anim: "sport-float-d" },
  { size: 40, top: "8%",   left: "74%",  duration: 17, delay: -20, opacity: 0.08, anim: "sport-float-a" },
  { size: 22, top: "85%",  left: "58%",  duration: 12, delay: -9,  opacity: 0.09, anim: "sport-float-b" },
];

function BasketballIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" stroke="#f97316" strokeWidth="3" />
      <path d="M50 4 L50 96" stroke="#f97316" strokeWidth="2.5" />
      <path d="M4 50 L96 50" stroke="#f97316" strokeWidth="2.5" />
      <path d="M18 18 C40 38 40 62 18 82" stroke="#f97316" strokeWidth="2.5" fill="none" />
      <path d="M82 18 C60 38 60 62 82 82" stroke="#f97316" strokeWidth="2.5" fill="none" />
    </svg>
  );
}

export default function BasketballBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }} aria-hidden>
      {balls.map((b, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: b.top,
            left: b.left,
            opacity: b.opacity,
            animation: `${b.anim} ${b.duration}s ${b.delay}s ease-in-out infinite`,
          }}
        >
          <BasketballIcon size={b.size} />
        </div>
      ))}
    </div>
  );
}
