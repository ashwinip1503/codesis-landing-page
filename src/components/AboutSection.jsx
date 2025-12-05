import React from "react";
import { Shield, Users, ChartBar, UserCheck } from "lucide-react";

const AboutSection = () => {
  const cards = [
    {
      icon: <Shield className="w-10 h-10 text-[#8B3DFF]" />,
      title: "Become a Data-Driven Investor",
      desc: "Lilypad is the cloud-based real estate investment platform that helps you make data-driven investment decisions and assists with reaching your long term investment objectives.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#8B3DFF]" />,
      title: "Lilypads can help you make smarter decisions.",
      desc: "Streamline your investment evaluation process and collaborate in reaching your long term investment objectives.",
    },
    {
      icon: <UserCheck className="w-10 h-10 text-[#8B3DFF]" />,
      title: "Manager Due Diligence",
      desc: "Evaluate managers against your objectives using traditional risk metrics with the addition of factor analysis. All it takes is a set of returns.",
    },
    {
      icon: <ChartBar className="w-10 h-10 text-[#8B3DFF]" />,
      title: "Optimize Asset Allocation",
      desc: "Understand the underlying risk drivers in your portfolio using the Lilypads analysis factors and optimize that portfolio based on objectives.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#8B3DFF]" />,
      title: "Our Subscribers",
      desc: "Serving a constellation of global subscribers Pension funds, Funds of Funds, Banks, Family offices, Asset managers, Wealth Managers.",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 relative">

          {/* TOP LEFT ABOUT BOX */}
          <div className="p-6 rounded-xl bg-white relative">
            <p className="text-[#9E2349] font-semibold mb-2">   —About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
              Lilypad is the only Real <br />
              Estate Investment tool <br />
              you need for your <br />
              business
            </h2>

        
            <div className="hidden lg:block absolute top-0 right-0 h-full w-px bg-gray-200"></div>

        
            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200"></div>
          </div>

          {/* FEATURE CARDS */}
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white relative hover:shadow-md transition-all"
            >
             
              {idx % 3 !== 2 && (
                <div className="hidden lg:block absolute top-0 right-0 h-full w-px bg-gray-200"></div>
              )}

          
              {idx < 3 && (
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200"></div>
              )}

              {/* Card Content */}
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-[#F4E8FF] flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
