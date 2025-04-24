
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-black">Добро пожаловать!</h1>
        <p className="text-xl text-gray-600 mb-6">Выберите страницу для просмотра:</p>
        <div className="flex flex-col space-y-4">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/beaver">Посмотреть фото бобра</Link>
          </Button>
          <Button asChild className="bg-[#5B41A8] hover:bg-[#4A3597]">
            <Link to="/brawl-stars">Алмазная лига Brawl Stars</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
