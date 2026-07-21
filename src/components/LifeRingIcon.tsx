export function LifeRingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="4" />
      <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="4" />
      <path
        d="M24 3v12M24 33v12M45 24H33M15 24H3M38.6 9.4l-8.5 8.5M17.9 30.1l-8.5 8.5M38.6 38.6l-8.5-8.5M17.9 17.9L9.4 9.4"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
