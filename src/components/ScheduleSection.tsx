
const ScheduleSection = () => {
  const schedule = [
    {
      date: "19TH JUNE",
      day: "DAY 1 - 7PM - 9PM IST",
      session: "Session 1",
      title: "Orientation & Program Flow Overview",
      topics: [
        "Access to LMS, tools, and AI workspaces",
        "Tools to download/setup: Notion, ChatGPT, Claude, Midjourney, Runway, Make.com, etc.",
        "Walkthrough of templates, Notion workspaces, and session formats",
        "Code of conduct and support access"
      ],
      outcomes: [
        "Complete setup instructions for all essential AI tools and workspace configuration ",
"Master workshop navigation through LMS, templates, and Notion workspaces ",
"Build community connections with fellow D2C founders and support network ",
"Achieve first quick wins to build confidence and momentum for the program "

      ]
    },
    {
      date: "21ST JUNE", 
      day: "DAY 3 - 10AM - 2PM IST",
      session: "Session 3",
      title: "Custom AI Bots, Smart Decks & The Future of AI Agents",
      topics: [
        "Stimulate AI outputs using prompts vs traditional coding",
        "Unlock growth, efficiency, and innovation across teams"
      ],
      outcomes: [
        "Master AI fundamentals from basic concepts to advanced applications",
        "Build your AI toolkit for immediate D2C implementation", 
        "Transition from traditional coding to natural language prompting",
        "Understand cost-effective AI strategies for D2C brands"
      ]
    }
  ];
  schedule.push(
    {
      date: "20TH JUNE",
      day: "DAY 2 - 7PM - 9PM IST",
      session: "Session 2",
      title: "AI-Powered D2C Brand Strategy",
      topics: [
        "Identify AI opportunities in your D2C business",
        "Build a data-driven brand strategy with AI insights",
        "Create personalized customer experiences using AI"
      ],
      outcomes: [
        "Develop a comprehensive AI strategy tailored to your brand",
        "Leverage AI for customer segmentation and targeting",
        "Enhance customer engagement through AI-driven personalization"
      ]
    },
    {
      date: "22ND JUNE", 
      day: "DAY 4 - 10AM - 2PM IST",
      session: "Session 4",
      title: "AI Tools & Automation for D2C Brands",
      topics: [
        "Implement AI tools for marketing, sales, and operations",
        "Automate repetitive tasks to focus on strategic growth"
      ],
      outcomes: [
        "Integrate AI tools into your existing workflows",
        "Automate key processes to improve efficiency and scalability",
        "Prepare your brand for the future of AI-driven commerce"
      ]
    }
  );

  return (
    <section className="py-20 bg-black 100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Here's the 4 Day Schedule?
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-4xl mx-auto">
          Designed and taught by top AI experts, you'll master the essential concepts, proven strategies, 
          and tools to build and scale your D2C brand with AI
        </p>
        
        {/* Timeline dots with animation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {[...Array(7)].map((_, i) => (
              <div 
                key={i} 
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  i === 0 ? 'bg-orange-500 animate-pulse' : 'bg-gray-600'
                }`}
                style={{
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-orange-500 via-gray-700 to-gray-700"></div>
            
            {schedule.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Animated timeline circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full border-4 border-black z-10 animate-pulse shadow-lg shadow-orange-500/50"></div>
                
                {/* Moving circle animation */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full z-20 animate-ping"></div>
                
                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
                    <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium mb-4 inline-block">
                      {item.date}
                    </div>
                    <h3 className="text-orange-400 text-lg font-semibold mb-2">{item.day}</h3>
                    <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                      <h4 className="text-orange-400 text-lg font-medium mb-2">{item.session}</h4>
                      <h5 className="text-white text-xl font-bold mb-4">{item.title}</h5>
                      <div className="text-gray-300">
                        <p className="font-medium mb-2">Topics:</p>
                        <ul className="space-y-1 text-sm">
                          {item.topics.map((topic, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                        {item.outcomes.length > 0 && (
                          <>
                            <p className="font-medium mb-2 mt-4">Outcomes:</p>
                            <ul className="space-y-1 text-sm">
                              {item.outcomes.map((outcome, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {outcome}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
