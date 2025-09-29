import React from 'react'

interface HomyLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function HomyLogo({ className = '', size = 'md' }: HomyLogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-16',
    md: 'h-12 w-24',
    lg: 'h-16 w-32',
    xl: 'h-20 w-40'
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Orange circle above 'h' */}
        <circle
          cx="12"
          cy="8"
          r="5"
          fill="#CD853F"
        />
        
        {/* Blue dots above 'ö' */}
        <circle
          cx="28"
          cy="8"
          r="1.5"
          fill="#4169E1"
        />
        <circle
          cx="32"
          cy="8"
          r="1.5"
          fill="#4169E1"
        />
        
        {/* Light yellow rectangle behind 'm' */}
        <rect
          x="45"
          y="35"
          width="18"
          height="8"
          fill="#FFFF99"
          rx="1"
        />
        
        {/* Light green rectangle behind 'y' */}
        <rect
          x="65"
          y="38"
          width="15"
          height="6"
          fill="#90EE90"
          rx="1"
        />
        
        {/* Text: "hö" - top line */}
        <text
          x="12"
          y="22"
          fontSize="18"
          fontWeight="900"
          fill="black"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          hö
        </text>
        
        {/* Text: "my" - bottom line, offset to the right */}
        <text
          x="48"
          y="42"
          fontSize="18"
          fontWeight="900"
          fill="black"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          my
        </text>
      </svg>
    </div>
  )
}
