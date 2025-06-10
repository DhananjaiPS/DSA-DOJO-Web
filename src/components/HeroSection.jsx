import heroImage from '../assets/heropic.jpg';

export default function HeroSection({ isAuthenticated, login }) {
  return (
    <div className="relative pt-20 md:pt-24">
      <img src={heroImage} alt="AI DSA Instructor" className="w-full h-96 object-cover opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="pt-16 pb-5 text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Master Data Structures & Algorithms
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            AI-powered learning platform to help you conquer coding interviews
          </p>
          {!isAuthenticated && (
            <button
              onClick={login}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition transform hover:scale-105"
            >
              Start Learning Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}