export default function CyberThumb({
  title,
}: {
  title: string;
}) {
  return (
    <svg
      viewBox="0 0 400 200"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="200" fill="#070d09" />

      <circle cx="80" cy="50" r="60" fill="#39ff6a" opacity="0.05" />
      <circle cx="330" cy="150" r="70" fill="#39ff6a" opacity="0.04" />

      <g opacity="0.08">
        <text
          x="10"
          y="20"
          fontFamily="JetBrains Mono"
          fontSize="9"
          fill="#39ff6a"
        >
          01001001 10100110 00101110
        </text>

        <text
          x="10"
          y="40"
          fontFamily="JetBrains Mono"
          fontSize="9"
          fill="#39ff6a"
        >
          11001001 01010111 00011100
        </text>

        <text
          x="10"
          y="180"
          fontFamily="JetBrains Mono"
          fontSize="9"
          fill="#39ff6a"
        >
          00101110 11100010 01010101
        </text>
      </g>

      <g
        transform="translate(170,55)"
        fill="none"
        stroke="#39ff6a"
        strokeWidth="2.2"
      >
        <path d="M35 0 L65 12 V35 Q65 60 35 70 Q5 60 5 35 V12 Z" />
        <path d="M22 35 L31 44 L48 26" />
      </g>

      <text
        x="200"
        y="160"
        textAnchor="middle"
        fontFamily="JetBrains Mono"
        fontSize="13"
        fill="#39ff6a"
      >
        {title.toUpperCase()}
      </text>
    </svg>
  );
}