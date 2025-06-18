
const LoveMessage = ({ isVisible }: { isVisible: boolean }) => {
  if (!isVisible) return null;

  return (
    <div className="animate-message-appear text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-[#f5c4ca] mb-8 font-light">
        Te amo bailarina bonita
      </h1>
      
      <div className="flex justify-center items-center">
        <img 
          src="/lovable-uploads/8627c59f-7ef6-497a-9ab3-85e8fcb77c7a.png" 
          alt="Zapatillas de ballet rosadas"
          className="w-32 h-32 md:w-40 md:h-40 drop-shadow-lg"
        />
      </div>

      <div className="mt-8 text-[#f5c4ca] text-lg font-light">
        Ya te quiero ver mi amor
      </div>
    </div>
  );
};

export default LoveMessage;
