
const MentorsSection = () => {
  const mentors = [
    {
      name: "K V S Dileep",
      role: "Head of AI Initiatives, GrowthSchool",
      image: "👨‍💼"
    },
    {
      name: "Priyanku Sarmah", 
      role: "Visual Art Director, Samur AI",
      image: "👨‍🎨"
    },
    {
      name: "Siddharth",
      role: "Head of Product, GrowthSchool", 
      image: "👨‍💻"
    },
    {
      name: "Divij Bajaj",
      role: "Data Scientist, Microsoft",
      image: "👨‍🔬"
    },
    {
      name: "Manish",
      role: "Founder, GrowwStacks",
      image: "👨‍🚀"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Meet Your Mentors
        </h2>
        
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-colors">
              <div className="text-6xl mb-4">{mentor.image}</div>
              <h3 className="text-white font-bold text-lg mb-2">{mentor.name}</h3>
              <p className="text-gray-400 text-sm">{mentor.role}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-white text-xl mb-8">Want to know more about the mentors and the program?</p>
          <button className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 hover:from-yellow-500 hover:to-pink-600 text-white px-16 py-5 text-lg rounded-full font-semibold mb-4 shadow-[0_0_40px_10px_rgba(255,102,51,0.6)]">
  Register now @ ₹499 <span className="line-through ml-2 opacity-70">₹1999</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
