import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import CountUp from 'react-countup';
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import UserProfile from './components/UserProfile';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CTASection from './components/CTASection';
import ProblemSolver from './components/ProblemSolver';

function App() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      alert("7-Day Trial Activated – Welcome to DSA Dojo!");
      setLoading(false);
    }, 2000);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar 
        isAuthenticated={isAuthenticated} 
        login={loginWithRedirect} 
        logout={logout}
      />
      
      <HeroSection isAuthenticated={isAuthenticated} login={loginWithRedirect} />
      
      {isAuthenticated && (
        <>
          <UserProfile user={user} logout={logout} />
          <ProblemSolver />
        </>
      )}

      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <CTASection loading={loading} handleClick={handleClick} />
    </div>
  );
}

export default App;