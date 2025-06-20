import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
<div className="text-center pt-16 pb-8">
          {/* Growth School and LinkedIn Badge - moved to top */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <img 
              src="https://go.growthschool.io/images/newgswhite.svg" 
              alt="Growth School" 
              className="h-12"
            />
           
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            4 Day AI Masterclass for
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              D2C Founders
            </span>
          </h1>
          
          <div className="flex justify-center space-x-6 mb-8">
            <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white text-sm">
              LIVE
            </span>
            <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white text-sm">
              22 hours
            </span>
            <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white text-sm">
              20+ AI tools
            </span>
          </div>





          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Learn Everything you need to automate, scale, and dominate your D2C market
          </p>
          
          {/* Mentor showcase card */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-[1px] rounded-2xl">
              <div className="bg-black rounded-2xl p-6">
                <h3 className="text-white text-xl mb-4">D2C AI Mastermind</h3>
                <img 
                  src="https://go.growthschool.io/images/d2cmm.webp" 
                  alt="D2C AI Mastermind Mentors" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Centered registration section */}
         <div className="flex justify-center mb-7">
  <span className="bg-white/10 border border-white/20 px-2 py-1 rounded-full text-white text-2xs inline-block whitespace-nowrap">
    4-Day Mastermind: June 19th-22nd
  </span>
</div>

          <Button className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 hover:from-yellow-500 hover:to-pink-600 text-white px-16 py-6 text-lg rounded-full font-semibold mb-1 shadow-[0_0_40px_10px_rgba(255,102,51,0.6)]">
  Register now @ ₹499 <span className="line-through ml-2 opacity-80">₹1999</span>
</Button>
  
          </div>
        </div>
     
    </section>
  );
};

export default HeroSection;