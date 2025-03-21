type PropsType = {
  className?: string;
  currentColor?: string;
};

export default function ArrowIcon({
  className,
  currentColor = "white",
}: PropsType) {
  return (
    <svg
      width="59"
      height="18"
      viewBox="0 0 59 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M59 9.00001L44 0.33975L44 17.6603L59 9.00001ZM-1.31134e-07 10.5L45.5 10.5L45.5 7.5L1.31134e-07 7.5L-1.31134e-07 10.5Z"
        fill={currentColor}
      />
    </svg>
  );
}
