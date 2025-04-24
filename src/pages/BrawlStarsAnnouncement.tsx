
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const BrawlStarsAnnouncement = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#5B41A8] relative overflow-hidden">
      {/* Фоновый паттерн с черепами */}
      <div className="absolute inset-0 bg-repeat opacity-20" 
           style={{ backgroundImage: "url('/placeholder.svg')", backgroundSize: "80px" }}>
      </div>
      
      {/* Заголовок */}
      <div className="text-center mb-10 z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] tracking-wide px-4">
          <span className="bg-gradient-to-r from-white to-[#E0EAFF] bg-clip-text text-transparent">
            АЛМАЗНАЯ ЛИГА: в боевую карту добавлен новый дивизион
          </span>
        </h1>
      </div>

      {/* Карточка с персонажем */}
      <Card className="relative w-72 h-80 flex flex-col bg-[#1D9AAC] border-2 border-white shadow-xl z-10">
        {/* Область с голубой сеткой */}
        <div className="flex-1 flex items-center justify-center bg-[#1D9AAC] p-4 relative overflow-hidden">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 opacity-30">
            {Array(9).fill(null).map((_, i) => (
              <div key={i} className="border border-[#15798a]"></div>
            ))}
          </div>
          
          {/* Персонаж */}
          <div className="absolute top-2 left-0 right-0 flex justify-center">
            <div className="bg-[#0099CC] p-2 rounded-md shadow-md">
              <div className="text-white text-3xl">🎮</div>
            </div>
          </div>
        </div>
        
        {/* Черная полоса внизу с ником */}
        <div className="bg-black p-2 text-yellow-400 font-mono text-left">
          [бан]sen1s
        </div>
      </Card>

      {/* Кнопка "Продолжить" */}
      <Button 
        className="mt-8 bg-[#00CC00] hover:bg-[#00AA00] text-white font-bold px-10 py-6 text-xl rounded-md shadow-md border-2 border-[#009900] z-10"
      >
        ПРОДОЛЖИТЬ
      </Button>

      {/* Счетчик внизу справа */}
      <div className="absolute bottom-6 right-6 flex items-center z-10">
        <div className="bg-black p-2 rounded-md flex items-center">
          <Trophy className="w-6 h-6 text-white mr-2" />
          <span className="text-white text-2xl font-bold">200</span>
        </div>
      </div>

      {/* Кнопка для возврата на главную */}
      <div className="absolute top-4 left-4 z-10">
        <Button asChild variant="ghost" className="text-white hover:bg-white/20">
          <Link to="/">На главную</Link>
        </Button>
      </div>
    </div>
  );
};

export default BrawlStarsAnnouncement;
