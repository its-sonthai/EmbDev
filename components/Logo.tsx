/**
 * EmbDev Logo Component
 * SVG-based logo with embedded systems theme (circuit board style)
 */

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circuit board background */}
      <rect width="40" height="40" rx="6" fill="#0f172a" stroke="#60a5fa" strokeWidth="1" />

      {/* Main circuit design */}
      <g stroke="#60a5fa" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Top left connection */}
        <circle cx="8" cy="8" r="1.5" fill="#60a5fa" />
        <line x1="8" y1="8" x2="15" y2="8" />
        <circle cx="15" cy="8" r="1.5" fill="#60a5fa" />

        {/* Top right connection */}
        <circle cx="32" cy="8" r="1.5" fill="#60a5fa" />
        <line x1="15" y1="8" x2="32" y2="8" />

        {/* Central chip area */}
        <rect x="12" y="14" width="16" height="12" rx="2" stroke="#60a5fa" strokeWidth="1.5" />
        <text x="20" y="23" fontSize="8" fill="#60a5fa" textAnchor="middle" fontWeight="bold">
          CPU
        </text>

        {/* Left vertical line */}
        <line x1="8" y1="8" x2="8" y2="20" />
        <circle cx="8" cy="20" r="1.5" fill="#60a5fa" />

        {/* Right vertical line */}
        <line x1="32" y1="8" x2="32" y2="20" />
        <circle cx="32" cy="20" r="1.5" fill="#60a5fa" />

        {/* Bottom connections */}
        <line x1="8" y1="20" x2="8" y2="32" />
        <circle cx="8" cy="32" r="1.5" fill="#60a5fa" />

        {/* Bottom middle */}
        <line x1="20" y1="26" x2="20" y2="32" />
        <circle cx="20" cy="32" r="1.5" fill="#60a5fa" />

        {/* Bottom right */}
        <line x1="32" y1="20" x2="32" y2="32" />
        <circle cx="32" cy="32" r="1.5" fill="#60a5fa" />

        {/* Connection line at bottom */}
        <line x1="8" y1="32" x2="32" y2="32" />
      </g>
    </svg>
  );
}
