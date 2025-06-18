
import { useState } from 'react';
import HeartComponent from '@/components/Heart';
import LoveMessage from '@/components/LoveMessage';

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [heartVisible, setHeartVisible] = useState(true);

  const handleHeartClick = () => {
    setHeartVisible(false);
    // Esperar a que termine la animación del corazón antes de mostrar el mensaje
    setTimeout(() => {
      setShowMessage(true);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100 p-4">
      <div className="text-center">
        {heartVisible && (
          <HeartComponent 
            onClick={handleHeartClick} 
            isVisible={heartVisible}
          />
        )}
        
        <LoveMessage isVisible={showMessage} />
      </div>
    </div>
  );
};

export default Index;
