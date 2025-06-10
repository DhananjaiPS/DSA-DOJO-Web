import CountUp from 'react-countup';

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden container mx-auto py-24 px-4">
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 md:p-16 border border-gray-700 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between mb-16">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-900 bg-opacity-50 rounded-full mb-4">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Beyond Traditional
                </span>
                <br />
                <span className="text-white">Learning Methods</span>
              </h2>
              <div className="w-13 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8"></div>
              <p className="w-13 text-lg text-gray-300 leading-relaxed">
                We're pioneering the future of technical interview preparation with adaptive AI that understands your unique learning patterns.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:w-2/5 mx-auto">
              <StatCard 
                value={100} 
                suffix="+" 
                label="Developers Trained" 
                hoverColor="blue" 
              />
              <StatCard 
                value={92} 
                suffix="%" 
                label="Success Rate" 
                hoverColor="purple" 
              />
              <StatCard 
                value={500} 
                suffix="+" 
                label="Hours of Content" 
                hoverColor="green" 
              />
              <StatCard 
                value={24} 
                suffix="/7" 
                label="AI Availability" 
                hoverColor="pink" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <InfoCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Our Mission"
              content="We're revolutionizing DSA learning through AI-powered coaching that adapts in real-time to your skill level, providing personalized problems and immediate feedback to accelerate your mastery of data structures and algorithms."
              gradient="from-blue-500 to-purple-600"
              borderColor="blue"
            />

            <InfoCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="The Team"
              content="Founded by ex-FAANG engineers and education specialists, our team combines world-class technical expertise with cutting-edge pedagogical research to create the most effective interview preparation system available."
              gradient="from-purple-500 to-pink-600"
              borderColor="purple"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, suffix, label, hoverColor }) {
  const colorClasses = {
    blue: 'group-hover:text-blue-400',
    purple: 'group-hover:text-purple-400',
    green: 'group-hover:text-green-400',
    pink: 'group-hover:text-pink-400'
  };

  return (
    <div className={`bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700 hover:border-${hoverColor}-500 transition-colors group w-[140px] sm:w-[160px]`}>
      <div className={`text-4xl font-bold text-white mb-2 ${colorClasses[hoverColor]} transition-colors`}>
        <CountUp end={value} duration={2} />
        {suffix}
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-wider text-center">
        {label}
      </div>
    </div>
  );
}

function InfoCard({ icon, title, content, gradient, borderColor }) {
  return (
    <div className={`group relative bg-gray-800 bg-opacity-50 rounded-2xl p-8 border border-gray-700 hover:border-${borderColor}-500 transition-all duration-300 overflow-hidden`}>
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300`}></div>
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className={`p-3 bg-${borderColor}-900 bg-opacity-50 rounded-lg mr-4`}>
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed mb-6">{content}</p>
      </div>
    </div>
  );
}