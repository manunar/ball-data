const balls: {
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
  opacity: number;
  anim: string;
}[] = [
  { size: 54, top: "3%",   left: "1%",   duration: 17, delay: 0,   opacity: 0.14, anim: "sport-float-a" },
  { size: 36, top: "9%",   left: "88%",  duration: 21, delay: -6,  opacity: 0.12, anim: "sport-float-b" },
  { size: 62, top: "71%",  left: "3%",   duration: 25, delay: -10, opacity: 0.11, anim: "sport-float-c" },
  { size: 30, top: "83%",  left: "90%",  duration: 14, delay: -3,  opacity: 0.13, anim: "sport-float-d" },
  { size: 46, top: "39%",  left: "93%",  duration: 20, delay: -12, opacity: 0.10, anim: "sport-float-a" },
  { size: 24, top: "53%",  left: "0%",   duration: 12, delay: -7,  opacity: 0.11, anim: "sport-float-b" },
  { size: 40, top: "19%",  left: "47%",  duration: 29, delay: -15, opacity: 0.08, anim: "sport-float-c" },
  { size: 28, top: "64%",  left: "56%",  duration: 13, delay: -8,  opacity: 0.09, anim: "sport-float-d" },
  { size: 50, top: "89%",  left: "29%",  duration: 22, delay: -11, opacity: 0.10, anim: "sport-float-a" },
  { size: 34, top: "45%",  left: "73%",  duration: 16, delay: -4,  opacity: 0.11, anim: "sport-float-b" },
  { size: 22, top: "29%",  left: "13%",  duration: 11, delay: -2,  opacity: 0.09, anim: "sport-float-c" },
  { size: 44, top: "92%",  left: "64%",  duration: 24, delay: -9,  opacity: 0.08, anim: "sport-float-d" },
  { size: 32, top: "13%",  left: "33%",  duration: 15, delay: -13, opacity: 0.09, anim: "sport-float-a" },
  { size: 52, top: "58%",  left: "83%",  duration: 23, delay: -1,  opacity: 0.10, anim: "sport-float-b" },
  { size: 26, top: "77%",  left: "47%",  duration: 10, delay: -17, opacity: 0.08, anim: "sport-float-c" },
  { size: 38, top: "46%",  left: "27%",  duration: 19, delay: -12, opacity: 0.09, anim: "sport-float-d" },
  { size: 56, top: "95%",  left: "15%",  duration: 27, delay: -5,  opacity: 0.07, anim: "sport-float-a" },
  { size: 20, top: "21%",  left: "63%",  duration: 9,  delay: -3,  opacity: 0.10, anim: "sport-float-b" },
  { size: 48, top: "66%",  left: "38%",  duration: 21, delay: -19, opacity: 0.07, anim: "sport-float-c" },
  { size: 28, top: "34%",  left: "9%",   duration: 13, delay: -7,  opacity: 0.11, anim: "sport-float-d" },
  { size: 42, top: "7%",   left: "73%",  duration: 18, delay: -21, opacity: 0.08, anim: "sport-float-a" },
  { size: 24, top: "84%",  left: "57%",  duration: 11, delay: -9,  opacity: 0.09, anim: "sport-float-b" },
];

function SoccerBallIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* outer circle */}
      <circle cx="50" cy="50" r="46" stroke="#e5e7eb" strokeWidth="3" />
      {/* central pentagon */}
      <polygon
        points="50,30 65,41 59,59 41,59 35,41"
        stroke="#e5e7eb"
        strokeWidth="2.5"
        fill="none"
      />
      {/* lines from each pentagon vertex to circle edge */}
      {/* top vertex → top of circle */}
      <line x1="50" y1="30" x2="50" y2="4"   stroke="#e5e7eb" strokeWidth="2" />
      {/* top-right vertex → upper-right */}
      <line x1="65" y1="41" x2="86" y2="27"  stroke="#e5e7eb" strokeWidth="2" />
      {/* bottom-right vertex → lower-right */}
      <line x1="59" y1="59" x2="77" y2="76"  stroke="#e5e7eb" strokeWidth="2" />
      {/* bottom-left vertex → lower-left */}
      <line x1="41" y1="59" x2="23" y2="76"  stroke="#e5e7eb" strokeWidth="2" />
      {/* top-left vertex → upper-left */}
      <line x1="35" y1="41" x2="14" y2="27"  stroke="#e5e7eb" strokeWidth="2" />
    </svg>
  );
}

export default function FootballBackground() {
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
          <SoccerBallIcon size={b.size} />
        </div>
      ))}
    </div>
  );
}
