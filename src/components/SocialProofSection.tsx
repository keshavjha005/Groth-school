
const SocialProofSection = () => {
  const companies = [
    "MY FITNESS PEANUT BUTTER", "trulymadly", "GetVantage", "ānveya", "yaa fee",
    "ZFW", "COSCO SPORTS | FITNESS", "SUPR DAILY", "Blue Koala", "NuTaste", 
    "klearme", "FACES CANADA", "Revv"
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          In the past, 1200+ D2C founders and enablers have taken our program to 
          scale their businesses
        </h2>
        
        {/* Animated marquee */}
        <div className="overflow-hidden mb-8">
          <div className="flex animate-marquee space-x-8">
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="bg-white rounded-xl px-6 py-4 flex-shrink-0">
                <span className="font-bold text-gray-800 whitespace-nowrap">{company}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-marquee-reverse space-x-8">
            {[...companies.slice().reverse(), ...companies.slice().reverse()].map((company, index) => (
              <div key={index} className="bg-white rounded-xl px-6 py-4 flex-shrink-0">
                <span className="font-bold text-gray-800 whitespace-nowrap">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
