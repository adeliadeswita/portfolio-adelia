import React from "react";

// ==========================================
// 1. COMPANY LOGOS (Official Brand Vectors)
// ==========================================

export function BlibliLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Blibli">
      <rect width="120" height="120" rx="26" fill="#0072FF" />
      {/* Blibli Shopping Bag with Yellow Tag and Smile */}
      <path
        d="M38 46V36C38 27.163 45.163 20 54 20H66C74.837 20 82 27.163 82 36V46H88C92.418 46 96 49.582 96 54V88C96 95.732 89.732 102 82 102H38C30.268 102 24 95.732 24 88V54C24 49.582 27.582 46 32 46H38Z"
        fill="#FFFFFF"
      />
      <path
        d="M48 46V36C48 30.477 52.477 26 58 26H62C67.523 26 72 30.477 72 36V46"
        stroke="#0072FF"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Yellow Promotional Tag */}
      <circle cx="78" cy="56" r="8" fill="#FBBF24" />
      {/* Friendly Smile */}
      <path
        d="M46 72C46 72 52 80 60 80C68 80 74 72 74 72"
        stroke="#0072FF"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AmarthaLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Amartha Financial">
      <rect width="120" height="120" rx="26" fill="#4C1D95" />
      {/* Amartha Infinite Knot / Connected Community Loop in Teal & Gold */}
      <path
        d="M36 60C36 46.745 46.745 36 60 36C73.255 36 84 46.745 84 60C84 73.255 73.255 84 60 84"
        stroke="#14B8A6"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M60 84C46.745 84 36 73.255 36 60C36 46.745 46.745 36 60 36"
        stroke="#F59E0B"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle cx="60" cy="60" r="10" fill="#FFFFFF" />
    </svg>
  );
}

export function AdiraLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Adira Finance">
      <rect width="120" height="120" rx="26" fill="#FBBF24" />
      {/* Adira Yellow Brand Diamond with Bold Typography */}
      <path
        d="M60 22L98 60L60 98L22 60L60 22Z"
        fill="#18181B"
      />
      <path
        d="M60 36L84 60L60 84L36 60L60 36Z"
        fill="#FBBF24"
      />
      <text
        x="60"
        y="65"
        textAnchor="middle"
        fill="#18181B"
        fontFamily="system-ui, sans-serif"
        fontSize="16"
        fontWeight="900"
        letterSpacing="0.5"
      >
        ADIRA
      </text>
    </svg>
  );
}

export function IvosightsLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Ivosights">
      <rect width="120" height="120" rx="26" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="2" />
      {/* Ivosights Connected Insights Wave & Nodes */}
      <path
        d="M30 75C40 45 55 85 70 50C80 35 90 60 90 60"
        stroke="#059669"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="75" r="7" fill="#059669" />
      <circle cx="50" cy="65" r="8" fill="#F97316" />
      <circle cx="70" cy="50" r="9" fill="#0284C7" />
      <circle cx="90" cy="60" r="7" fill="#059669" />
    </svg>
  );
}

export function HomeCreditLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Home Credit Indonesia">
      <rect width="120" height="120" rx="26" fill="#E11D48" />
      {/* Home Credit Iconic Smile Curve */}
      <rect x="24" y="24" width="72" height="72" rx="36" fill="#FFFFFF" />
      <path
        d="M40 60C40 60 48 76 60 76C72 76 80 60 80 60"
        stroke="#E11D48"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="48" cy="48" r="4.5" fill="#E11D48" />
      <circle cx="72" cy="48" r="4.5" fill="#E11D48" />
    </svg>
  );
}

export function UpnLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="UPN Veteran Jakarta">
      <rect width="120" height="120" rx="26" fill="#2E6FA0" />
      {/* UPN Veteran Jakarta Emblem & Gold Star */}
      <circle cx="60" cy="60" r="42" fill="#FEF08A" stroke="#CA8A04" strokeWidth="3" />
      <circle cx="60" cy="60" r="34" fill="#2E6FA0" />
      {/* Gold 5-point star */}
      <polygon
        points="60,34 64,48 78,48 67,56 71,70 60,62 49,70 53,56 42,48 56,48"
        fill="#FACC15"
      />
      {/* Open Book / Lotus Base */}
      <path
        d="M45 74Q60 68 75 74V82Q60 76 45 82Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// ==========================================
// 2. TECHNOLOGY LOGOS (Devicon / Official SVGs)
// ==========================================

export function SqlLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="SQL">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="#0284C7" />
      <path d="M4 6V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V6" stroke="#0369A1" strokeWidth="2" />
      <path d="M4 12V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V12" stroke="#0369A1" strokeWidth="2" />
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#0369A1" strokeWidth="2" />
    </svg>
  );
}

export function PythonLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Python">
      <path
        d="M11.9 2C6.8 2 7.1 4.2 7.1 4.2L7.2 6.5H12V7.2H5.2C5.2 7.2 2 6.8 2 12C2 17.2 4.8 17 4.8 17H6.3V14.6C6.3 11.9 8.6 11.9 8.6 11.9H13.4C14.7 11.9 15.6 10.9 15.6 9.6V4.4C15.6 4.4 16 2 11.9 2ZM9.4 3.7C10 3.7 10.5 4.2 10.5 4.8C10.5 5.4 10 5.9 9.4 5.9C8.8 5.9 8.3 5.4 8.3 4.8C8.3 4.2 8.8 3.7 9.4 3.7Z"
        fill="#3776AB"
      />
      <path
        d="M12.1 22C17.2 22 16.9 19.8 16.9 19.8L16.8 17.5H12V16.8H18.8C18.8 16.8 22 17.2 22 12C22 6.8 19.2 7 19.2 7H17.7V9.4C17.7 12.1 15.4 12.1 15.4 12.1H10.6C9.3 12.1 8.4 13.1 8.4 14.4V19.6C8.4 19.6 8 22 12.1 22ZM14.6 20.3C14 20.3 13.5 19.8 13.5 19.2C13.5 18.6 14 18.1 14.6 18.1C15.2 18.1 15.7 18.6 15.7 19.2C15.7 19.8 15.2 20.3 14.6 20.3Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function BigQueryLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Google BigQuery">
      {/* Google Cloud BigQuery Icon */}
      <path d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2Z" fill="#EBF5FF" stroke="#4285F4" strokeWidth="1.5" />
      <circle cx="11" cy="11" r="4.5" stroke="#4285F4" strokeWidth="2" />
      <path d="M14.5 14.5L18 18" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M9 11H13M11 9V13" stroke="#34A853" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function LookerStudioLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Looker Studio">
      <circle cx="6" cy="17" r="3" fill="#4285F4" />
      <circle cx="12" cy="7" r="3" fill="#EA4335" />
      <circle cx="18" cy="13" r="3" fill="#FBBC05" />
      <circle cx="12" cy="18" r="2.5" fill="#34A853" />
      <path d="M6 17L12 7L18 13" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 7V18" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function TableauLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Tableau">
      {/* Central Cross */}
      <rect x="10.8" y="2" width="2.4" height="20" fill="#E97627" rx="0.5" />
      <rect x="2" y="10.8" width="20" height="2.4" fill="#E97627" rx="0.5" />
      {/* Intermediate Points */}
      <rect x="5.5" y="5.5" width="2.2" height="6" fill="#1F436D" rx="0.5" transform="rotate(45 6.6 8.5)" />
      <rect x="16.5" y="5.5" width="2.2" height="6" fill="#5F889D" rx="0.5" transform="rotate(-45 17.6 8.5)" />
      <rect x="5.5" y="14.5" width="2.2" height="6" fill="#D3363F" rx="0.5" transform="rotate(-45 6.6 17.5)" />
      <rect x="16.5" y="14.5" width="2.2" height="6" fill="#6B4171" rx="0.5" transform="rotate(45 17.6 17.5)" />
    </svg>
  );
}

export function PowerBiLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Power BI">
      <rect x="15" y="3" width="5.5" height="18" rx="2" fill="#F2C811" />
      <rect x="9.25" y="8" width="5.5" height="13" rx="2" fill="#E6AD10" />
      <rect x="3.5" y="13" width="5.5" height="8" rx="2" fill="#C88E0B" />
    </svg>
  );
}

export function SupersetLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Apache Superset">
      <circle cx="12" cy="12" r="9" fill="#00A1BA" opacity="0.15" />
      <path
        d="M6 15C9 9 15 9 18 15"
        stroke="#20A68A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="12" cy="9" r="2.5" fill="#FF7F44" />
    </svg>
  );
}

export function ExcelLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Microsoft Excel">
      <rect x="3" y="3" width="18" height="18" rx="3.5" fill="#107C41" />
      <path
        d="M8.5 7.5L12 12M12 12L15.5 16.5M12 12L8.5 16.5M12 12L15.5 7.5"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AirflowLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Apache Airflow">
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.2 16.4L12 14.2L9.8 16.4L8.4 15L10.6 12.8L8.4 10.6L9.8 9.2L12 11.4L14.2 9.2L15.6 10.6L13.4 12.8L15.6 15L14.2 16.4Z"
        fill="#017CEE"
      />
    </svg>
  );
}

export function PostgresLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="PostgreSQL">
      {/* Slonik Elephant head */}
      <path
        d="M12 3C7.58 3 4 6.58 4 11C4 13.9 5.54 16.44 7.87 17.82C7.3 19.34 6.06 20.2 6.06 20.2C8.36 20.35 10.5 19.2 11.4 18.2C11.6 18.2 11.8 18.2 12 18.2C16.42 18.2 20 14.62 20 10.2C20 5.78 16.42 3 12 3Z"
        fill="#336791"
      />
      <circle cx="10" cy="9.5" r="1.2" fill="#FFFFFF" />
      <path d="M14 13C13 14.5 11 15 11 15" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function MysqlLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="MySQL">
      {/* Dolphin Sakila */}
      <path
        d="M19 12C16.5 8 13 6 9.5 7C7.5 7.5 5 10 3 12C5 12.5 7.5 12 9 11.5C9.5 13 11 15.5 13 17C14.5 18 16.5 18.5 18.5 18C18 16.5 17.5 15 17.5 13.5C18.5 14 20 14.5 21 15C21 14 20 13 19 12Z"
        fill="#00758F"
      />
      <path d="M12 7.5C13 6 15 5 17 5C16 6.5 15.5 8 15 9.5" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function GithubBrandLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="GitHub">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017C2 16.442 4.87 20.19 8.84 21.52C9.34 21.61 9.52 21.3 9.52 21.03C9.52 20.79 9.51 19.99 9.51 19.14C6.73 19.74 6.14 17.81 6.14 17.81C5.68 16.66 5.03 16.35 5.03 16.35C4.12 15.73 5.1 15.74 5.1 15.74C6.1 15.81 6.63 16.77 6.63 16.77C7.52 18.3 8.97 17.86 9.54 17.6C9.63 16.95 9.89 16.51 10.17 16.26C7.95 16.01 5.62 15.15 5.62 11.31C5.62 10.22 6.01 9.32 6.65 8.62C6.55 8.37 6.2 7.35 6.75 6C6.75 6 7.59 5.73 9.49 7.02C10.29 6.8 11.14 6.69 11.99 6.69C12.84 6.69 13.69 6.8 14.49 7.02C16.39 5.73 17.23 6 17.23 6C17.78 7.35 17.43 8.37 17.33 8.62C17.97 9.32 18.36 10.22 18.36 11.31C18.36 15.16 16.02 16 13.79 16.25C14.15 16.56 14.47 17.18 14.47 18.13C14.47 19.49 14.46 20.59 14.46 20.92C14.46 21.2 14.64 21.52 15.15 21.42C19.13 20.08 22 16.37 22 11.95C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

export function RLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="R Language">
      <ellipse cx="14" cy="16" rx="12" ry="10" stroke="#71717A" strokeWidth="2.5" fill="#E4E4E7" fillOpacity="0.4" />
      <path d="M12 11h4a3 3 0 013 3 3 3 0 01-3 3h-4v-6zm0 6h3l3.5 5h-2.5l-3-4.5H12V22h-2V11h2z" fill="#2E6FA0" />
    </svg>
  );
}

export function PowerAutomateLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Power Automate">
      <path d="M7 16l6-8h6l-6 8h7l-9 12 3-8H7z" fill="#0078D4" />
    </svg>
  );
}

export function VSCodeLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Visual Studio Code">
      <path d="M17.5 2.5L12 7.5L6.5 3.5L2 6.5V17.5L6.5 20.5L12 16.5L17.5 21.5L22 19V5L17.5 2.5Z" fill="#007ACC" />
      <path d="M17.5 2.5L7 11L12 15L22 5L17.5 2.5Z" fill="#1F9CF0" />
      <path d="M17.5 21.5L7 13L12 9L22 19L17.5 21.5Z" fill="#0065A9" />
    </svg>
  );
}

export function JupyterLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Jupyter Notebook">
      <path d="M12 4C7.58 4 4 6.69 4 10C4 10.9 4.27 11.75 4.77 12.5C4.27 13.25 4 14.1 4 15C4 18.31 7.58 21 12 21C16.42 21 20 18.31 20 15C20 14.1 19.73 13.25 19.23 12.5C19.73 11.75 20 10.9 20 10C20 6.69 16.42 4 12 4Z" fill="#F37626" fillOpacity="0.2" />
      <circle cx="12" cy="7" r="2" fill="#F37626" />
      <circle cx="7" cy="15" r="2" fill="#767676" />
      <circle cx="17" cy="15" r="2" fill="#F37626" />
    </svg>
  );
}

export function GoogleColabLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google Colab">
      <path d="M7 8C4.79 8 3 9.79 3 12C3 14.21 4.79 16 7 16C8.5 16 9.8 15.17 10.5 14H8.5C7.9 14 7.5 13.5 7.5 13C7.5 12.5 7.9 12 8.5 12H10.5C9.8 10.83 8.5 10 7 10" fill="#F9AB00" />
      <path d="M17 8C15.5 8 14.2 8.83 13.5 10H15.5C16.1 10 16.5 10.5 16.5 11C16.5 11.5 16.1 12 15.5 12H13.5C14.2 13.17 15.5 14 17 14C19.21 14 21 12.21 21 10C21 7.79 19.21 6 17 6" fill="#E37400" />
      <circle cx="12" cy="12" r="1.5" fill="#F9AB00" />
    </svg>
  );
}

export function PandasLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Pandas">
      <rect x="4" y="6" width="3" height="12" rx="1.5" fill="#150458" />
      <rect x="8.5" y="4" width="3" height="16" rx="1.5" fill="#FFD43B" />
      <rect x="13" y="8" width="3" height="12" rx="1.5" fill="#306998" />
      <rect x="17.5" y="10" width="3" height="8" rx="1.5" fill="#E70488" />
    </svg>
  );
}

export function NumpyLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="NumPy">
      <path d="M6 4L12 7.5L18 4L12 1.5L6 4Z" fill="#4DABCF" />
      <path d="M6 4V14L12 17.5V7.5L6 4Z" fill="#013243" />
      <path d="M18 4V14L12 17.5V7.5L18 4Z" fill="#4D77CF" />
      <path d="M12 10.5L9 12V15L12 16.5L15 15V12L12 10.5Z" fill="#FFFFFF" />
    </svg>
  );
}

export function ScikitLearnLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Scikit-learn">
      <circle cx="12" cy="12" r="9" fill="#F89939" fillOpacity="0.2" />
      <circle cx="9" cy="10" r="3.5" fill="#3499CD" />
      <circle cx="15" cy="14" r="3.5" fill="#F89939" />
    </svg>
  );
}

export function ScipyLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SciPy">
      <circle cx="12" cy="12" r="9" fill="#00549F" fillOpacity="0.12" />
      <path d="M16 8.5C14.8 7.2 13 6.8 11.2 7.2C9 7.7 7.5 9.5 7.5 12C7.5 14.5 9 16.3 11.2 16.8C13 17.2 14.8 16.8 16 15.5" stroke="#00549F" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 15.5C9.2 16.8 11 17.2 12.8 16.8C15 16.3 16.5 14.5 16.5 12C16.5 9.5 15 7.7 12.8 7.2C11 6.8 9.2 7.2 8 8.5" stroke="#4695D5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SeabornLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Seaborn">
      <rect width="24" height="24" rx="6" fill="#4C72B0" fillOpacity="0.12" />
      <path d="M17 7C14 5 10 6 8 8C6 10 6 13 8 15C10 17 14 18 17 16" stroke="#4C72B0" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M7 17C10 19 14 18 16 16C18 14 18 11 16 9C14 7 10 6 7 8" stroke="#55A868" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function GeopyLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Geopy">
      <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 13 6 13s6-8.5 6-13c0-3.314-2.686-6-6-6z" fill="#0284C7" fillOpacity="0.2" stroke="#0284C7" strokeWidth="1.8" />
      <circle cx="12" cy="8" r="2.5" fill="#0284C7" />
    </svg>
  );
}

export function MatplotlibLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Matplotlib">
      <rect x="2" y="3" width="20" height="18" rx="4" fill="#11557C" fillOpacity="0.12" />
      <circle cx="7" cy="15" r="2" fill="#11557C" />
      <circle cx="12" cy="9" r="2" fill="#E24A33" />
      <circle cx="17" cy="12" r="2" fill="#348ABD" />
      <path d="M7 15L12 9L17 12" stroke="#11557C" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function NltkLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="NLTK">
      <rect width="24" height="24" rx="5" fill="#1E293B" />
      <text x="12" y="15" textAnchor="middle" fill="#38BDF8" fontFamily="system-ui, sans-serif" fontSize="7.5" fontWeight="bold" letterSpacing="0.5">
        NLTK
      </text>
    </svg>
  );
}

export function MicrosoftOfficeLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft Office">
      <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#F25022" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#7FBA00" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#00A4EF" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#FFB900" />
    </svg>
  );
}

export function GoogleWorkspaceLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google Workspace">
      <rect width="24" height="24" rx="5" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
      <path d="M5 8l7-4 7 4v8l-7 4-7-4V8z" fill="#EA4335" fillOpacity="0.1" />
      <path d="M5 8l7 4 7-4" stroke="#4285F4" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 12v8" stroke="#34A853" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 16l7 4" stroke="#FBBC05" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M19 16l-7 4" stroke="#EA4335" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// Helper to get Tech Logo by name
export function getTechLogo(name: string, className = "w-4 h-4"): React.ReactNode {
  const lower = name.toLowerCase();
  if (lower === "r") return <RLogo className={className} />;
  if (lower.includes("automate")) return <PowerAutomateLogo className={className} />;
  if (lower.includes("vscode") || lower.includes("visual studio code")) return <VSCodeLogo className={className} />;
  if (lower.includes("jupyter")) return <JupyterLogo className={className} />;
  if (lower.includes("colab")) return <GoogleColabLogo className={className} />;
  if (lower.includes("pandas")) return <PandasLogo className={className} />;
  if (lower.includes("numpy")) return <NumpyLogo className={className} />;
  if (lower.includes("scikit")) return <ScikitLearnLogo className={className} />;
  if (lower.includes("scipy")) return <ScipyLogo className={className} />;
  if (lower.includes("seaborn")) return <SeabornLogo className={className} />;
  if (lower.includes("geopy")) return <GeopyLogo className={className} />;
  if (lower.includes("matplotlib")) return <MatplotlibLogo className={className} />;
  if (lower.includes("nltk")) return <NltkLogo className={className} />;
  if (lower.includes("office") || lower.includes("microsoft office")) return <MicrosoftOfficeLogo className={className} />;
  if (lower.includes("workspace") || lower.includes("google workspace")) return <GoogleWorkspaceLogo className={className} />;
  if (lower.includes("sql") && !lower.includes("postgre") && !lower.includes("my")) return <SqlLogo className={className} />;
  if (lower.includes("python")) return <PythonLogo className={className} />;
  if (lower.includes("bigquery")) return <BigQueryLogo className={className} />;
  if (lower.includes("looker")) return <LookerStudioLogo className={className} />;
  if (lower.includes("tableau")) return <TableauLogo className={className} />;
  if (lower.includes("power bi")) return <PowerBiLogo className={className} />;
  if (lower.includes("superset")) return <SupersetLogo className={className} />;
  if (lower.includes("excel")) return <ExcelLogo className={className} />;
  if (lower.includes("airflow")) return <AirflowLogo className={className} />;
  if (lower.includes("postgre")) return <PostgresLogo className={className} />;
  if (lower.includes("mysql")) return <MysqlLogo className={className} />;
  if (lower.includes("github")) return <GithubBrandLogo className={className} />;
  return null;
}
