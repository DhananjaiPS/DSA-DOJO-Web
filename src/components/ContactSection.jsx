import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully :) Keep Exploring!");
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="container mx-auto py-20 px-4 md:px-8">
      <div className="bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-16 transition-all duration-300 ease-in-out">
        <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6 text-gray-300">
            <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
            <p className="flex items-center text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@dsadojo.com
            </p>
            <p className="flex items-center text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              @dsadojo on Twitter
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full bg-gray-800 border border-gray-700 rounded-xl px-5 py-3 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  required
                />
                <label className="absolute left-5 top-2 text-sm text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all">
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full bg-gray-800 border border-gray-700 rounded-xl px-5 py-3 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  required
                />
                <label className="absolute left-5 top-2 text-sm text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all">
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="peer w-full bg-gray-800 border border-gray-700 rounded-xl px-5 py-3 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  required
                ></textarea>
                <label className="absolute left-5 top-2 text-sm text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="text-2xl w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}