
const LoveMessage = ({ isVisible }: { isVisible: boolean }) => {
  if (!isVisible) return null;

  return (
    <div className="animate-message-appear text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-[#f5c4ca] mb-8 font-serif">
        Te amo bailarina bonita
      </h1>
      
      <div className="flex justify-center items-center space-x-8 animate-ballet-shoes-dance">
        {/* Zapatilla izquierda */}
        <div className="relative">
          <svg width="80" height="60" viewBox="0 0 80 60" className="drop-shadow-lg">
            <path
              d="M15 45 Q20 35 35 35 Q50 35 65 40 Q70 42 70 45 Q70 50 60 52 L20 52 Q15 50 15 45 Z"
              fill="#f5c4ca"
              stroke="#e8a3ab"
              strokeWidth="2"
            />
            <path
              d="M35 35 Q40 25 45 20 Q50 15 55 20 Q60 25 55 30 Q50 35 35 35"
              fill="#f5c4ca"
              stroke="#e8a3ab"
              strokeWidth="2"
            />
            {/* Cintas */}
            <path
              d="M30 35 Q25 30 20 25 M40 35 Q35 30 30 25 M50 35 Q45 30 40 25"
              stroke="#e8a3ab"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Zapatilla derecha */}
        <div className="relative">
          <svg width="80" height="60" viewBox="0 0 80 60" className="drop-shadow-lg">
            <path
              d="M65 45 Q60 35 45 35 Q30 35 15 40 Q10 42 10 45 Q10 50 20 52 L60 52 Q65 50 65 45 Z"
              fill="#f5c4ca"
              stroke="#e8a3ab"
              strokeWidth="2"
            />
            <path
              d="M45 35 Q40 25 35 20 Q30 15 25 20 Q20 25 25 30 Q30 35 45 35"
              fill="#f5c4ca"
              stroke="#e8a3ab"
              strokeWidth="2"
            />
            {/* Cintas */}
            <path
              d="M50 35 Q55 30 60 25 M40 35 Q45 30 50 25 M30 35 Q35 30 40 25"
              stroke="#e8a3ab"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="mt-8 text-[#f5c4ca] text-lg font-light">
        ✨ Con todo mi amor ✨
      </div>
    </div>
  );
};

export default LoveMessage;
