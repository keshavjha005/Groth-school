
import { Button } from "@/components/ui/button";

const MarketStatsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          D2C Market is only GROWING with AI Integration 🚀
        </h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            So, to help you make the most of this opportunity while building and scaling your AI-powered D2C brand, we've launched this
          </p>
        </div>

        {/* D2C AI Mastermind Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-16">
            D2C AI Mastermind
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "3-Day Live Workshop",
              "20+ Essential AI Tools to Master for D2C Growth", 
              "Lifetime Access to the AI-Driven Community",
              "Practical Assignments for Real-World Impact",
              "No-Code AI Product Building & MVP Execution",
              "20 Hours of Commitment"
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
                <h4 className="text-white text-lg font-semibold leading-tight">
                  {benefit}
                </h4>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 hover:from-yellow-500 hover:to-pink-600 text-white px-16 py-5 text-lg rounded-full font-semibold mb-4 shadow-[0_0_40px_10px_rgba(255,102,51,0.6)]">
  Register now @ ₹499 <span className="line-through ml-2 opacity-70">₹1999</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStatsSection;