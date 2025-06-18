
const LoveMessage = ({ isVisible }: { isVisible: boolean }) => {
  if (!isVisible) return null;

  return (
    <div className="animate-message-appear text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-[#f5c4ca] mb-8 font-serif">
        Te amo bailarina bonita
      </h1>
      
      <div className="flex justify-center items-center space-x-12 animate-ballet-shoes-dance">
        {/* Zapatilla izquierda */}
        <div className="relative">
          <svg width="100" height="80" viewBox="0 0 100 80" className="drop-shadow-lg">
            {/* Suela de la zapatilla */}
            <ellipse
              cx="50"
              cy="65"
              rx="35"
              ry="8"
              fill="#f5c4ca"
              stroke="#e8a3ab"
              strokeWidth="1.5"
            />
            
            {/* Cuerpo principal de la zapatilla */}
            <path
              d="M15 65 Q15 45 25 35 Q35 25 50 25 Q65 25 75 35 Q85 45 85 65"
              fill="#f5c4ca"
              stroke="#e8a3ab"
              strokeWidth="1.5"
            />
            
            {/* Punta de la zapatilla */}
            <path
              d="M25 35 Q35 20 50 20 Q65 20 75 35 Q70 30 50 30 Q30 30 25 35"
              fill="#f5c4ca"
              stroke="#e8a3ab"
              strokeWidth="1.5"
            />
            
            {/* Cintas cruzadas */}
            <path
              d="M30 50 Q20 40 15 25 M35 55 Q25 45 20 30 M40 60 Q30 50 25 35"
              stroke="#e8a3ab"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M70 50 Q80 40 85 25 M65 55 Q75 45 80 30 M60 60 Q70 50 75 35"
              stroke="#e8a3ab"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Lazos decorativos */}
            <path
              d="M20 25 Q15 20 20 15 Q25 20 20 25 M25 20 Q20 15 25 10 Q30 15 25 20"
              fill="#f5c4ca"
              stroke="#e8a3ab"
              strokeWidth="1"
            />
            <path
              d="M80 25 Q85 20 80 15 Q75 20 80 25 M75 20 Q80 15 75 10 Q70 15 75 20"
              fill="#f5c4ca"
              stroke="#e8a3ab"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Zapatilla derecha */}
        <div className="relative">
          <svg width="100" height="80" viewBox="0 0 100 80" className="drop-shadow-lg">
            {/* Suela de la zapatilla */}
            <ellipse
              cx="50"
              cy="65"
              rx="35"
              ry="8"
              fill="#f5c4ca"
              stroke="#e8a3ab"
              strokeWidth="1.5"
            />
            
            {/* Cuerpo principal de la zapatilla */}
            <path
              d="M85 65 Q85 45 75 35 Q65 25 50 25 Q35 25 25 35 Q15 45 15 65"
              fill="#f5c4ca"
              stroke="#e8a3ab"
              strokeWidth="1.5"
            />
            
            {/* Punta de la zapatilla */}
            <path
              d="M75 35 Q65 20 50 20 Q35 20 25 35 Q30 30 50 30 Q70 30 75 35"
              fill="#f5c4ca"
              stroke="#e8a3ab"
              strokeWidth="1.5"
            />
            
            {/* Cintas cruzadas */}
            <path
              d="M70 50 Q80 40 85 25 M65 55 Q75 45 80 30 M60 60 Q70 50 75 35"
              stroke="#e8a3ab"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M30 50 Q20 40 15 25 M35 55 Q25 45 20 30 M40 60 Q30 50 25 35"
              stroke="#e8a3ab"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Lazos decorativos */}
            <path
              d="M80 25 Q85 20 80 15 Q75 20 80 25 M75 20 Q80 15 75 10 Q70 15 75 20"
              fill="#f5c4ca"
              stroke="#e8a3ab"
              strokeWidth="1"
            />
            <path
              d="M20 25 Q15 20 20 15 Q25 20 20 25 M25 20 Q20 15 25 10 Q30 15 25 20"
              fill="#f5c4ca"
              stroke="#e8a3ab"
              strokeWidth="1"
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
