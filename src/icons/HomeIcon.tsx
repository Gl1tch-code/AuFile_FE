
type PropsType = {
    className?: string;
    currentColor?: string;
}

export default function HomeIcon({ className, currentColor="1A1E26" } : PropsType) {
  return (
    <svg
      width="57"
      height="56"
      viewBox="0 0 57 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M52.1429 28.4469V31.9888C52.1429 41.0717 52.1429 45.6134 49.4148 48.435C46.687 51.2569 42.2962 51.2569 33.515 51.2569H24.2011C15.4198 51.2569 11.0292 51.2569 8.30122 48.435C5.57324 45.6134 5.57324 41.0717 5.57324 31.9888V28.4469C5.57324 23.1184 5.57324 20.4541 6.78219 18.2455C7.99114 16.0368 10.1998 14.666 14.6171 11.9245L19.2741 9.03429C23.9435 6.13631 26.2783 4.68732 28.858 4.68732C31.4378 4.68732 33.7725 6.13631 38.4421 9.03429L43.099 11.9245C47.5164 14.666 49.725 16.0368 50.9339 18.2455"
        stroke={`#${currentColor}`}
        stroke-width="7.24455"
        stroke-linecap="round"
      />
      <path
        d="M35.8439 41.943H21.873"
        stroke={`#${currentColor}`}
        stroke-width="7.24455"
        stroke-linecap="round"
      />
    </svg>
  );
}
