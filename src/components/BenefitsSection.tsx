
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const benefits = [
    "3-Day Live Workshop",
    "20+ Essential AI Tools to Master for D2C Growth", 
    "Lifetime Access to the AI-Driven Community",
    "Practical Assignments for Real-World Impact",
    "No-Code AI Product Building & MVP Execution",
    "20 Hours of Commitment"
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          D2C AI Mastermind
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-white text-lg font-semibold leading-tight">
                {benefit}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-12 py-4 text-lg rounded-full shadow-lg shadow-orange-500/25 font-semibold">
            Register now @ ₹499 ₹1999
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
