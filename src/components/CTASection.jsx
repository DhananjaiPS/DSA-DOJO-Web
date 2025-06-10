import CountUp from 'react-countup';

export default function CTASection({ loading, handleClick }) {
  return (
    <div className="mt-24 text-center px-4">
      <p className="text-gray-300 mb-4 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
        Trusted by{" "}
        <span className="font-extrabold text-white text-3xl">
          <CountUp end={1000} duration={5} separator="," />+
        </span>{" "}
        developers leveling up their{" "}
        <span className="ml-1 font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          DSA skills
        </span>{" "}
        with DSA Dojo.
      </p>

      <button
        disabled={loading}
        className={`relative inline-flex items-center justify-center mt-6 px-8 py-4 text-lg font-semibold text-white 
                bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full shadow-xl 
                transition-all duration-300 transform hover:scale-105 active:scale-95 
                focus:outline-none focus:ring-4 focus:ring-indigo-500/50 ${loading ? "opacity-60 cursor-not-allowed" : "hover:shadow-2xl"
          }`}
        onClick={handleClick}
      >
        {loading ? "Activating..." : "Start Your 7-Day Free Trial"}
      </button>

      <p className="text-gray-400 text-sm mt-4">
        No credit card required. Cancel anytime.
        <span className="block mt-1 italic text-xs text-gray-500">
          Your journey begins now.
        </span>
      </p>

      <p className="text-sm text-gray-400 mt-6 italic max-w-md mx-auto">
        "This platform helped me crack my FAANG interview!" – Dhananjai, IIT Bombay
      </p>

      <p className="mt-4 text-sm text-gray-400">
        Want to learn more first?{" "}
        <a
          href="#about"
          className="underline text-blue-400 hover:text-blue-200 transition"
        >
          See how it works
        </a>
      </p>
    </div>
  );
}