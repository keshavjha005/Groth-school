
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const FixedFooterCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-t border-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <div className="text-2xl font-bold text-white mb-1">
              ₹499 <span className="text-gray-500 line-through text-lg">₹1999</span>
            </div>
            <div className="text-gray-400 text-sm flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              Deadline June 11, 2025
            </div>
          </div>
          
          <Button className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 hover:from-yellow-500 hover:to-pink-600 text-white px-4 py-9 text-lg rounded-full font-semibold mb-4 shadow-[0_0_40px_10px_rgba(230,102,51,0.6)]">
  Register now @ ₹499 <span className="line-through ml-2 opacity-90">₹1999</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FixedFooterCTA;
