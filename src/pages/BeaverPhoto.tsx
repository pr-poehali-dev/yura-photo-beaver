
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BeaverPhoto = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Фотография бобра</h1>
          
          <div className="aspect-w-16 aspect-h-9 mb-6 rounded-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1550169173-f19d7577a0a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Бобер в естественной среде обитания" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                (e.target as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
          </div>
          
          <p className="text-gray-700 mb-6 text-center">
            Бобры - умные полуводные грызуны, известные своей способностью строить плотины и хатки.
            Они имеют водонепроницаемый мех и мощные зубы для резки деревьев.
          </p>
          
          <div className="flex justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/">Вернуться на главную</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeaverPhoto;
