
const TargetAudienceSection = () => {
  const audiences = [
    {
      title: "D2C Brand Founders",
      description: "Running a D2C brand but drowning in marketing tasks? Learn to automate 80% of your workload with AI systems."
    },
    {
      title: "E-commerce Marketing Managers", 
      description: "Overwhelmed by content creation and social media management? Multiply your output without increasing hours worked."
    },
    {
      title: "Solo Entrepreneurs",
      description: "Building your D2C business alone with limited time? Run professional campaigns that normally require entire teams."
    },
    {
      title: "Marketing Agencies",
      description: "Want to offer cutting-edge AI services to D2C clients? Master tools that deliver 10x better results faster."
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-96 h-2 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-96 h-2 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-96 h-2 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Who is this program for?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-colors">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">{audience.title}</h3>
              <p className="text-gray-300">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
