type PropsType = {
  className?: string;
  currentColor?: string;
};

export default function CodingIcon({ className, currentColor="1A1E26" } : PropsType) {
  return (
    <svg
      width="37"
      height="33"
      viewBox="0 0 37 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
>
      <path
        d="M21.1025 2.64304L14.6833 30.1414"
        stroke={`#${currentColor}`}
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M9.66846 23.7713L3.63317 17.736C2.02421 16.1271 2.0242 13.5184 3.63316 11.9095L9.66846 5.87418"
        stroke={`#${currentColor}`}
        stroke-width="3.74999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.2144 9.09113L33.2496 15.1264C34.8586 16.7354 34.8586 19.344 33.2496 20.953L27.2144 26.9883"
        stroke={`#${currentColor}`}
        stroke-width="3.74999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
