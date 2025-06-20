
const AIToolsSection = () => {
  const tools = [
    { name: "Apollo.io", logo: "🚀" },
    { name: "make", logo: "🔧" },
    { name: "ChatGPT", logo: "💬" },
    { name: "perplexity", logo: "🔍" },
    { name: "Midjourney", logo: "🎨" },
    { name: "runway", logo: "🎬" },
    { name: "Notion", logo: "📝" },
    { name: "Writesonic", logo: "✍️" }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          This is Your Chance to Master the
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Most Powerful AI Tools Used by Industry Leaders
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl p-6 flex items-center justify-center hover:scale-105 transition-transform">
              <span className="text-2xl mr-2">{tool.logo}</span>
              <span className="font-bold text-gray-800">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
