
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-black">Добро пожаловать!</h1>
        <p className="text-xl text-gray-600 mb-6">Здесь вы можете увидеть фото бобра</p>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link to="/beaver">Посмотреть фото бобра</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
