import { useState } from 'react';

export default function ProblemSolver() {
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

  if (!practiceStarted) {
    return (
      <div className="container mx-auto mt-12 p-8 bg-gray-800 rounded-xl max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Ready to Practice DSA?
        </h2>
        <p className="text-gray-300 mb-8">
          Select your preferred difficulty and topic to get started with a personalized problem.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <div className="w-full sm:w-auto">
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-300 mb-2">
              Difficulty
            </label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          
          <div className="w-full sm:w-auto">
            <label htmlFor="topic" className="block text-sm font-medium text-gray-300 mb-2">
              Topic
            </label>
            <select
              id="topic"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {['Arrays', 'Strings', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming', 'Sorting', 'Searching'].map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>
        </div>
        
        <button
          onClick={() => setPracticeStarted(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition transform hover:scale-105"
        >
          Start Practicing
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-12 p-8 bg-gray-800 rounded-xl max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">
          {selectedTopic} Problem ({difficulty})
        </h2>
        <button
          onClick={() => setPracticeStarted(false)}
          className="text-gray-400 hover:text-white"
        >
          Change Settings
        </button>
      </div>

      {!currentProblem ? (
        <div className="text-center py-12">
          <button
            onClick={generateProblem}
            disabled={isGenerating}
            className={`bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg ${isGenerating ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isGenerating ? 'Generating Problem...' : 'Generate Problem'}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Problem Statement</h3>
            <p className="text-gray-300 whitespace-pre-line">{currentProblem.statement}</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Your Approach</h3>
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
              >
                {showHint ? 'Hide Hint' : 'Show Hint'}
              </button>
            </div>
            
            {showHint && (
              <div className="mb-4 p-4 bg-gray-800 rounded-lg border-l-4 border-yellow-500">
                <p className="text-yellow-200">{currentProblem.hint}</p>
              </div>
            )}
            
            <textarea
              value={userApproach}
              onChange={(e) => setUserApproach(e.target.value)}
              placeholder="Describe your approach to solving the problem..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white min-h-[120px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Your Solution</h3>
            <textarea
              value={userSolution}
              onChange={(e) => setUserSolution(e.target.value)}
              placeholder="Write your code solution here..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white min-h-[200px] font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={generateProblem}
              disabled={isGenerating}
              className={`bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg ${isGenerating ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              New Problem
            </button>
            
            <button
              onClick={evaluateSolution}
              disabled={isEvaluating || !userSolution}
              className={`bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg ${isEvaluating || !userSolution ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isEvaluating ? 'Evaluating...' : 'Evaluate Solution'}
            </button>
          </div>

          {aiFeedback && (
            <div className="mt-6 bg-gray-900 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-4 text-white">AI Feedback</h3>
              <div className="text-gray-300 whitespace-pre-line">{aiFeedback}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}