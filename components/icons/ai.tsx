import * as React from "react";

export const TensorflowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="none" {...props}>
    <rect width="256" height="256" rx="60" fill="#fff" />
    <path d="M128 32L32 80v16l96-48 96 48v-16L128 32z" fill="#FF6F00"/>
    <path d="M128 80v144" stroke="#FF6F00" strokeWidth="16" strokeLinecap="round"/>
    <path d="M128 152l64 32v-16l-64-32-64 32v16l64-32z" fill="#FF6F00"/>
  </svg>
);

export const PytorchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="none" {...props}>
    <rect width="256" height="256" rx="60" fill="#fff" />
    <path d="M128 48v96l56 56" stroke="#EE4C2C" strokeWidth="16" strokeLinecap="round"/>
    <circle cx="184" cy="200" r="16" fill="#EE4C2C" />
    <circle cx="128" cy="128" r="80" stroke="#EE4C2C" strokeWidth="16" />
  </svg>
);

export const JavaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="none" {...props}>
    <rect width="256" height="256" rx="60" fill="#fff" />
    <path d="M128 192c-32 0-56-8-56-16s24-16 56-16 56 8 56 16-24 16-56 16z" fill="#007396"/>
    <path d="M128 160c-24-16-32-32-32-48s8-32 32-48c24 16 32 32 32 48s-8 32-32 48z" fill="#007396"/>
    <path d="M128 112c8-8 16-16 16-24s-8-16-16-24c-8 8-16 16-16 24s8 16 16 24z" fill="#007396"/>
  </svg>
);

export const CIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="none" {...props}>
    <rect width="256" height="256" rx="60" fill="#fff" />
    <circle cx="128" cy="128" r="80" fill="#A8B9CC" />
    <text x="88" y="152" fontSize="64" fill="#fff" fontFamily="Arial" fontWeight="bold">C</text>
  </svg>
);

export const CppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="none" {...props}>
    <rect width="256" height="256" rx="60" fill="#fff" />
    <circle cx="128" cy="128" r="80" fill="#00599C" />
    <text x="72" y="152" fontSize="64" fill="#fff" fontFamily="Arial" fontWeight="bold">C++</text>
  </svg>
);

export const AiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="none" {...props}>
    <rect width="256" height="256" rx="60" fill="#fff" />
    <text x="64" y="152" fontSize="96" fill="#6C63FF" fontFamily="Arial" fontWeight="bold">AI</text>
  </svg>
);

export const HuggingFaceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="none" {...props}>
    <rect width="256" height="256" rx="60" fill="#FFD21A" />
    <ellipse cx="128" cy="160" rx="80" ry="56" fill="#fff" />
    <circle cx="104" cy="160" r="12" fill="#FFD21A" />
    <circle cx="152" cy="160" r="12" fill="#FFD21A" />
    <path d="M104 184c8 8 40 8 48 0" stroke="#FFD21A" strokeWidth="6" strokeLinecap="round" />
    <text x="88" y="120" fontSize="32" fill="#FFD21A" fontFamily="Arial" fontWeight="bold">🤗</text>
  </svg>
);

export const MlIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="none" {...props}>
    <rect width="256" height="256" rx="60" fill="#00BFAE" />
    <path d="M64 192l64-128 64 128" stroke="#fff" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="128" cy="128" r="32" fill="#fff" />
    <text x="104" y="140" fontSize="32" fill="#00BFAE" fontFamily="Arial" fontWeight="bold">ML</text>
  </svg>
);

export const DsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="none" {...props}>
    <rect width="256" height="256" rx="60" fill="#FF7043" />
    <rect x="64" y="128" width="128" height="32" rx="16" fill="#fff" />
    <rect x="96" y="80" width="64" height="32" rx="16" fill="#fff" />
    <rect x="96" y="176" width="64" height="32" rx="16" fill="#fff" />
    <text x="104" y="148" fontSize="32" fill="#FF7043" fontFamily="Arial" fontWeight="bold">DS</text>
  </svg>
);

export const OpenAiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="none" {...props}>
    <rect width="256" height="256" rx="60" fill="#10A37F" />
    <path d="M128 64c-35 0-64 29-64 64s29 64 64 64 64-29 64-64-29-64-64-64zm0 112c-27 0-48-21-48-48s21-48 48-48 48 21 48 48-21 48-48 48z" fill="#fff" />
    <text x="88" y="148" fontSize="32" fill="#10A37F" fontFamily="Arial" fontWeight="bold">OpenAI</text>
  </svg>
);
