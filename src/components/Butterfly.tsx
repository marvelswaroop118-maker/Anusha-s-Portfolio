import React from "react";

export default function ButterflyAnimation() {
  return (
    <>
      <style>{`
        :root {
          --color-wing: #1D4ED8; /* Deep Monarch Blue */
          --color-sub-wing: #3B82F6; /* Vibrant Blue */
          --color-background: transparent;
        }

        .butterfly-wrapper {
          align-items: center;
          background: var(--color-background);
          display: flex;
          justify-content: center;
          perspective-origin: 50% 50%;
          perspective: 1000px;
          overflow: visible;
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .butterfly {
          animation: hover 2.5s ease-in-out infinite alternate;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(60deg) rotateY(15deg) rotateZ(30deg) translateY(0px);
          width: 40px;
          z-index: 10;
          /* Position it so it hovers slightly above the branch */
          margin-bottom: 60px;
          margin-left: 20px;
        }

        .butterfly::before {
          background: #1e1b18;
          border-radius: 50%;
          content: '';
          display: block;
          height: 90px;
          left: 50%;
          margin-left: -6px;
          position: absolute;
          top: -5px;
          transform: rotateY(100deg);
          width: 12px;
          z-index: 2;
        }

        .shadow {
          animation: shadow 2.5s ease-in-out infinite alternate;
          background: #000;
          border-radius: 50%;
          display: block;
          height: 15px;
          opacity: 0.1;
          position: absolute;
          transform-origin: 50% 50%;
          /* Shadow stays grounded on the branch area */
          transform: translateX(30px) translateY(70px) scale(1, 1);
          width: 80px;
          z-index: 1;
        }

        .wing {
          background: rgba(37, 99, 235, 0.4);
          display: block;
          position: absolute;
          top: 0;
          transform-style: preserve-3d;
        }

        .wing:first-child {
          animation: leftflap 350ms cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
          height: 1px;
          left: 0;
          transform: rotateY(-20deg);
          transform-origin: 700% 50%;
          width: 1px;
          z-index: 3;
        }

        .wing:last-child {
          animation: rightflap 350ms cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
          right: 0;
          transform-origin: -600% 50%;
          transform: rotateY(200deg);
          z-index: 1;
        }

        .wing .bit {
          background: var(--color-wing);
          border-radius: 50%;
          overflow: hidden;
          position: absolute;
          right: 0;
          top: 0;
          transform-origin: 100% 50%;
        }

        .wing .bit::after {
          background: var(--color-sub-wing);
          border-radius: 50%;
          content: '';
          display: inline-block;
          position: absolute;
          right: 0;
          top: 0;
          transform-origin: 100% 50%;
        }

        .wing .bit:first-child {
          height: 80px;
          top: 15px;
          transform: rotateZ(30deg);
          width: 120px;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3);
        }

        .wing .bit:first-child::after {
          height: 60px;
          left: -20px;
          top: 10px;
          width: 90px;
        }

        .wing .bit:last-child {
          height: 60px;
          transform: rotateZ(-40deg);
          width: 90px;
          box-shadow: inset 0 0 15px rgba(255, 255, 255, 0.2);
        }

        .wing .bit:last-child::after {
          height: 40px;
          left: -15px;
          top: 10px;
          width: 50px;
          z-index: 1;
        }

        @keyframes hover {
          0% {
            transform: rotateX(60deg) rotateY(15deg) rotateZ(30deg) translateZ(0px) translateY(0px);
          }
          100% {
            transform: rotateX(60deg) rotateY(15deg) rotateZ(30deg) translateZ(25px) translateY(-10px);
          }
        }

        @keyframes shadow {
          0% {
            transform: translateX(30px) translateY(70px) scale(0.9, 0.9);
            opacity: 0.15;
          }
          100% {
            transform: translateX(30px) translateY(70px) scale(1.1, 1.1);
            opacity: 0.05;
          }
        }

        @keyframes leftflap {
          0% { transform: rotateY(-30deg); }
          100% { transform: rotateY(70deg); }
        }

        @keyframes rightflap {
          0% { transform: rotateY(210deg); }
          100% { transform: rotateY(110deg); }
        }
      `}</style>

      <div className="butterfly-wrapper">
        {/* SVG Floral Branch Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-90">
          <svg className="w-[300px] h-[300px] translate-y-10 -translate-x-4" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Elegant curving branch */}
            <path d="M-20 180 Q 80 160 120 100 T 160 40" stroke="#8B5A2B" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M120 100 Q 150 110 180 90" stroke="#8B5A2B" strokeWidth="2" strokeLinecap="round" fill="none" />
            
            {/* Soft Green Leaves */}
            <path d="M60 140 Q 70 120 80 135 Z" fill="#86EFAC" />
            <path d="M90 125 Q 110 110 115 125 Z" fill="#4ADE80" />
            <path d="M135 75 Q 150 60 155 75 Z" fill="#4ADE80" />
            <path d="M150 100 Q 165 90 170 100 Z" fill="#86EFAC" />
            
            {/* Beautiful Pink Flowers */}
            <g transform="translate(120, 100) scale(0.8)">
              <circle cx="0" cy="-12" r="8" fill="#F472B6"/>
              <circle cx="11" cy="-4" r="8" fill="#F472B6"/>
              <circle cx="7" cy="10" r="8" fill="#F472B6"/>
              <circle cx="-7" cy="10" r="8" fill="#F472B6"/>
              <circle cx="-11" cy="-4" r="8" fill="#F472B6"/>
              <circle cx="0" cy="0" r="6" fill="#FBBF24"/>
            </g>
            
            <g transform="translate(160, 40) scale(0.6)">
              <circle cx="0" cy="-12" r="8" fill="#F9A8D4"/>
              <circle cx="11" cy="-4" r="8" fill="#F9A8D4"/>
              <circle cx="7" cy="10" r="8" fill="#F9A8D4"/>
              <circle cx="-7" cy="10" r="8" fill="#F9A8D4"/>
              <circle cx="-11" cy="-4" r="8" fill="#F9A8D4"/>
              <circle cx="0" cy="0" r="6" fill="#FBBF24"/>
            </g>
          </svg>
        </div>

        <div className="shadow"></div>
        <div className="butterfly">
          <div className="wing">
            <div className="bit"></div>
            <div className="bit"></div>
          </div>
          <div className="wing">
            <div className="bit"></div>
            <div className="bit"></div>
          </div>
        </div>
      </div>
    </>
  );
}