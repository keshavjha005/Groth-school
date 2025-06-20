import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "When is the Business Mastermind?",
      answer: "The Business Mastermind is scheduled for June 19th-22nd, 2025. It's a 4-day intensive program designed to help D2C founders master AI tools and strategies."
    },
    {
      question: "How will the mastermind sessions be conducted?",
      answer: "The sessions will be conducted live online through our interactive platform. You'll have direct access to mentors and can participate in real-time discussions and Q&A sessions."
    },
    {
      question: "Is the event completely online?",
      answer: "Yes, the entire mastermind is conducted online, allowing you to participate from anywhere in the world. All you need is a stable internet connection and a device to join the sessions."
    },
    {
      question: "Why can't I receive a recording of the sessions?",
      answer: "This is a live, interactive mastermind focused on real-time learning and engagement. The value comes from live participation, immediate feedback, and direct interaction with mentors and peers."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-700/30 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <ChevronDown 
                  className={`w-6 h-6 text-orange-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;