import CountUp from 'react-countup';

export default function UserProfile({ user, logout }) {
  const badges = [
    { icon: '🏆', title: 'Weekly Streak', locked: false },
    { icon: '🚀', title: 'Fast Solver', locked: false },
    { icon: '🧠', title: 'Pattern Master', locked: true },
    { icon: '💎', title: 'Premium Member', locked: false }
  ];

  return (
    <div className="container mx-auto mt-12 max-w-4xl flex justify-center flex-col">
      <div className="relative bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-700 border-opacity-50">
        <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center md:items-start">
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

            <div className="flex-1 text-center md:text-left">
              <div className="mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  {user.name}
                </h2>
                <p className="text-gray-300 mt-1">{user.email}</p>

                <div className="flex justify-center md:justify-start space-x-6 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      <CountUp end={0} duration={2.5} />
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Problems Solved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      <CountUp end={15} duration={2.5} />%
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      <CountUp end={0} duration={2.5} />
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Streak Days</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Profile Completeness</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={logout}
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

      <button
        onClick={() => window.location.href = 'https://studio--dsa-dojo-70gzg.us-central1.hosted.app/'}
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mt-8"
      >
        Lets Get Started with DSA
      </button>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge, index) => (
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
  );
}