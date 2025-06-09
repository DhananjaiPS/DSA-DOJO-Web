import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
// import logo from './logo.svg'; // Replace with your logo
// import heroImage from '../'; // Add a dark-themed hero image

function App() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [practiceStarted, setPracticeStarted] = useState(false);
  const [difficulty, setDifficulty] = useState('medium');
  const [selectedTopic, setSelectedTopic] = useState('Arrays');
  const [currentProblem, setCurrentProblem] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [userSolution, setUserSolution] = useState('');
  const [userApproach, setUserApproach] = useState('');
  const [aiFeedback, setAiFeedback] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);


  const generateProblem = async () => {
    setIsGenerating(true);
    try {
      const prompt = `Generate a ${difficulty} difficulty DSA problem about ${selectedTopic}. 
    Include a problem statement and one hint. Format as JSON with "statement" and "hint" keys.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      const problem = JSON.parse(response.text);
      setCurrentProblem(problem);
      setShowHint(false);
      setUserSolution('');
      setUserApproach('');
      setAiFeedback('');
    } catch (error) {
      console.error("Error generating problem:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const evaluateSolution = async () => {
    setIsEvaluating(true);
    try {
      const prompt = `Evaluate this DSA solution for a ${difficulty} problem about ${selectedTopic}.
    Problem: ${currentProblem.statement}
    Solution Code: ${userSolution}
    Approach: ${userApproach}
    Provide constructive feedback focusing on: 
    1. Correctness 2. Time complexity 3. Space complexity 4. Alternative approaches
    Be concise but thorough.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      setAiFeedback(response.text);
    } catch (error) {
      console.error("Error evaluating solution:", error);
    } finally {
      setIsEvaluating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 px-4 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            DSA Dojo
          </span>

          {/* Desktop Nav (hidden on mobile) */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="hover:text-blue-400 transition">Home</a>
            <a href="#" className="hover:text-blue-400 transition">About Us</a>
            <a href="#" className="hover:text-blue-400 transition">Contact</a>
            {isAuthenticated ? (
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="bg-gradient-to-r from-blue-400 to-purple-600  hover:bg-blue-700 px-4 py-2 rounded transition"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Auth Buttons (visible on small screens) */}
          <div className="md:hidden flex items-center space-x-2">
            {isAuthenticated ? (
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 text-sm rounded transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="bg-gradient-to-r from-blue-400 to-purple-600  hover:bg-blue-700 px-4 py-2 rounded transition"

              >
                Login
              </button>
            )}

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (slides from right) */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-end px-8 space-y-6 mt-10">
            <a
              href="#"
              className="text-xl hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="text-xl hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#"
              className="text-xl hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Overlay when menu is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <img src='heropic.jpg' alt="AI DSA Instructor" className="w-full h-96 object-cover opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Master Data Structures & Algorithms
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              AI-powered learning platform to help you conquer coding interviews
            </p>
            {!isAuthenticated && (
              <button
                onClick={() => loginWithRedirect()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition transform hover:scale-105"
              >
                Start Learning Now
              </button>
            )}
          </div>
        </div>
      </div>

      {/* User Profile Card (if authenticated) */}
      {isAuthenticated && (
        <div className="container mx-auto mt-12 max-w-4xl flex justify-center flex-col">
          {/* Profile Card with Glass Morphism Effect */}
          <div className="relative bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-700 border-opacity-50">
            {/* Decorative Gradient Bar */}
            <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                {/* Profile Image with Glow Effect */}
                <div className="relative group mb-6 md:mb-0 md:mr-8">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur-md transition-all duration-300"></div>
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-gray-800 object-cover z-10"
                  />
                  <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1.5 z-20 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                      {user.name}
                    </h2>
                    <p className="text-gray-300 mt-1">{user.email}</p>

                    {/* Stats Row */}
                    <div className="flex justify-center md:justify-start space-x-6 mt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">142</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Problems Solved</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">87%</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">28</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Streak Days</div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Profile Completeness</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                        style={{ width: '75%' }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={() => logout({ returnTo: window.location.origin })}
                      className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign Out
                    </button>

                    <button className="flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-lg transition-all transform hover:scale-[1.02]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Badges Section */}
         <button
  onClick={() => window.location.href = 'https://studio--dsa-dojo-70gzg.us-central1.hosted.app/'}
  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
>
  Lets Get Started with DSA
</button>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🏆', title: 'Weekly Streak', locked: false },
              { icon: '🚀', title: 'Fast Solver', locked: false },
              { icon: '🧠', title: 'Pattern Master', locked: true },
              { icon: '💎', title: 'Premium Member', locked: false }
            ].map((badge, index) => (
              <div key={index} className={`p-4 rounded-xl ${badge.locked ? 'bg-gray-900 bg-opacity-50' : 'bg-gradient-to-br from-gray-800 to-gray-900'} border ${badge.locked ? 'border-gray-800' : 'border-gray-700'} flex flex-col items-center`}>
                <div className={`text-3xl mb-2 ${badge.locked ? 'opacity-40' : ''}`}>
                  {badge.icon}
                </div>
                <h3 className={`text-sm font-medium ${badge.locked ? 'text-gray-500' : 'text-gray-300'}`}>
                  {badge.title}
                </h3>
                {badge.locked && (
                  <span className="mt-1 text-xs text-gray-500">Locked</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16 font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Supercharge Your <span className="text-white">DSA Journey</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {[
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
          ].map((item, i) => (
            <div
              key={i}
              className={`group relative bg-gray-800 p-6 md:p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 ${item.hoverEffect} border border-gray-700 overflow-hidden`}
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>

              {/* Content */}
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

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6 text-lg md:text-xl max-w-3xl mx-auto">
            Join <span className="font-bold text-white">10,000+</span> developers who transformed their DSA skills with our platform
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your 7-Day Free Trial
          </button>
          <p className="text-gray-400 text-sm mt-3">No credit card required</p>
        </div>
      </div>
    </div>
  );
}

export default App;