type PropsType = {
  className?: string;
  currentColor?: string;
};

export default function CategoriesIcon({
  className,
  currentColor = "1A1E26",
}: PropsType) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.55468 14.2257H10.3011C13.0475 14.2257 14.4207 12.8525 14.4207 10.1061V7.3597C14.4207 4.61329 13.0475 3.24008 10.3011 3.24008H7.55468C4.80827 3.24008 3.43506 4.61329 3.43506 7.3597V10.1061C3.43506 12.8525 4.80827 14.2257 7.55468 14.2257Z"
        stroke={`#${currentColor}`}
        stroke-width="3.56848"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.0332 14.2257H26.7796C29.526 14.2257 30.8992 12.8525 30.8992 10.1061V7.3597C30.8992 4.61329 29.526 3.24008 26.7796 3.24008H24.0332C21.2868 3.24008 19.9136 4.61329 19.9136 7.3597V10.1061C19.9136 12.8525 21.2868 14.2257 24.0332 14.2257Z"
        stroke={`#${currentColor}`}
        stroke-width="3.56848"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.0332 30.7042H26.7796C29.526 30.7042 30.8992 29.331 30.8992 26.5846V23.8382C30.8992 21.0918 29.526 19.7186 26.7796 19.7186H24.0332C21.2868 19.7186 19.9136 21.0918 19.9136 23.8382V26.5846C19.9136 29.331 21.2868 30.7042 24.0332 30.7042Z"
        stroke={`#${currentColor}`}
        stroke-width="3.56848"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.55468 30.7042H10.3011C13.0475 30.7042 14.4207 29.331 14.4207 26.5846V23.8382C14.4207 21.0918 13.0475 19.7186 10.3011 19.7186H7.55468C4.80827 19.7186 3.43506 21.0918 3.43506 23.8382V26.5846C3.43506 29.331 4.80827 30.7042 7.55468 30.7042Z"
        stroke={`#${currentColor}`}
        stroke-width="3.56848"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
