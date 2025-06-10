import CountUp from 'react-countup';

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI-Powered Tutor",
      desc: "Get personalized problem recommendations and explanations tailored to your skill level",
      stats: "24/7 availability",
      hoverEffect: "hover:shadow-lg hover:shadow-blue-500/20"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Progress Analytics",
      desc: "Track your improvement with detailed metrics and performance dashboards",
      stats: "95% of users improve 2x faster",
      hoverEffect: "hover:shadow-lg hover:shadow-purple-500/20"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Interview Prep",
      desc: "Master patterns used in FAANG interviews with our curated problem sets",
      stats: "300+ success stories",
      hoverEffect: "hover:shadow-lg hover:shadow-green-500/20"
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="pb-10 text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16 font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Supercharge Your <span className="text-white">DSA Journey</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {features.map((item, i) => (
          <div
            key={i}
            className={`group relative bg-gray-800 p-6 md:p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 ${item.hoverEffect} border border-gray-700 overflow-hidden`}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6 p-3 bg-gray-700 rounded-lg w-max text-blue-400 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{item.desc}</p>
              <div className="flex items-center mt-auto">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-900 text-blue-200">
                  {item.stats}
                </span>
                <button className="ml-auto text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}