/** Shared SVG symbols (the lightning bolt and small icons), rendered once per page. */
export function Sprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bg-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8be9ff" />
          <stop offset=".55" stopColor="#2fd0f5" />
          <stop offset="1" stopColor="#0a8fb3" />
        </linearGradient>
        <symbol id="bolt" viewBox="0 0 270 660">
          <polygon
            points="270,0 170,235 236,235 0,660 105,330 58,330"
            fill="url(#bg-grad)"
          />
        </symbol>
        <symbol id="i-factory" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          >
            <path d="M3 21V10l5 3V10l5 3V10l5 3V4h3v17z" />
            <path d="M7 17h2M12 17h2M17 17h1" />
          </g>
        </symbol>
        <symbol id="i-shop" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path d="M4 9l1.5-5h13L20 9" />
            <path d="M4 9c0 1.7 1.3 3 3 3s2.7-1.3 2.7-3c0 1.7 1.3 3 2.3 3s2.3-1.3 2.3-3c0 1.7 1 3 2.7 3s3-1.3 3-3" />
            <path d="M5 12v9h14v-9M10 21v-5h4v5" />
          </g>
        </symbol>
        <symbol id="i-flame" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path d="M12 3c.6 3.2 5 5.2 5 10.2A5 5 0 017 13.4c0-2.3 1.2-3.8 2.4-4.8.1 2 1 3.2 2.1 3.4-.4-3.1-.3-6 .5-9z" />
            <path d="M10.2 17.5a1.9 1.9 0 003.6 0c0-1.2-1-2-1.8-3-.8 1-1.8 1.8-1.8 3z" />
          </g>
        </symbol>
        <symbol id="i-honey" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          >
            <path d="M12 2.8l7.6 4.4v8.8L12 20.4l-7.6-4.4V7.2z" />
            <path d="M12 7.6l3.6 2.1v4.2L12 16l-3.6-2.1V9.7z" />
          </g>
        </symbol>
        <symbol id="i-chili" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6.5 20.5c7 0 12-5.5 12-11.5 0-1.6-1.1-2.6-2.5-2.6s-2.4 1-2.5 2.6C13.2 14 10 17 5.2 18.1c-1.4.3-1 2.4 1.3 2.4z" />
            <path d="M16 6.4c0-1.8.9-3 2.6-3.6" />
          </g>
        </symbol>
        <symbol id="i-wave" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" />
          </g>
        </symbol>
        <symbol id="i-search" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="M16 16l4.5 4.5" />
          </g>
        </symbol>
      </defs>
      ;
    </svg>
  );
}

export function Bolt() {
  return (
    <svg viewBox="0 0 270 660" aria-hidden="true">
      <use href="#bolt" />
    </svg>
  );
}

export function Icon({ id }: { id: string }) {
  return (
    <svg aria-hidden="true">
      <use href={`#${id}`} />
    </svg>
  );
}
