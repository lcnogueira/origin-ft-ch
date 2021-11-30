import * as React from 'react';

export default function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0a1 1 0 0 1 1 1v22a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.318 5.318A4.5 4.5 0 0 1 9.5 4H17a1 1 0 1 1 0 2H9.5a2.5 2.5 0 1 0 0 5h5a4.5 4.5 0 1 1 0 9H6a1 1 0 1 1 0-2h8.5a2.5 2.5 0 0 0 0-5h-5a4.5 4.5 0 0 1-3.182-7.682Z"
        fill="currentColor"
      />
    </svg>
  );
}
