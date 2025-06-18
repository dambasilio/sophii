
import { Heart } from 'lucide-react';

interface HeartComponentProps {
  onClick: () => void;
  isVisible: boolean;
}

const HeartComponent = ({ onClick, isVisible }: HeartComponentProps) => {
  return (
    <div
      className={`cursor-pointer transition-all duration-300 hover:scale-110 ${
        isVisible ? '' : 'animate-heart-disappear'
      }`}
      onClick={onClick}
    >
      <Heart
        size={120}
        fill="#f5c4ca"
        color="#f5c4ca"
        className="drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
      />
    </div>
  );
};

export default HeartComponent;
