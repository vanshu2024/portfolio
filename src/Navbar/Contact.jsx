import React from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react"; // icons

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-[8vw] bg-linear-to-b from-[#0a0a0f] via-[#111827] to-[#0a0a0f] text-white font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          CONTACT
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-3 max-w-lg mx-auto text-base">
          I’d love to hear from you — reach out for any opportunities or questions!
        </p>
      </div>

      {/* Compact Contact Card */}
      
      <div className="max-w-md mx-auto bg-[#111827]/90 backdrop-blur-md border border-[#8245ec]/30 rounded-2xl shadow-[0_0_20px_rgba(130,69,236,0.2)] hover:shadow-[0_0_25px_rgba(130,69,236,0.35)] transition-all duration-300 p-6 md:p-7">
        <h3 className="text-center text-lg font-semibold text-[#c9b6ff] mb-5">
          Connect With Me 🚀
        </h3>

        <form
          action="https://formspree.io/f/xkgkwwyn" 
          method="POST"
          className="space-y-4"
        >
          {/* Name */}
          <div className="flex items-center bg-[#0f172a] rounded-lg border border-gray-700 focus-within:border-[#8245ec] transition">
            <User className="text-[#8245ec] w-4 h-4 ml-3" />
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full bg-transparent text-gray-200 px-3 py-2 focus:outline-none text-sm"
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-[#0f172a] rounded-lg border border-gray-700 focus-within:border-[#8245ec] transition">
            <Mail className="text-[#8245ec] w-4 h-4 ml-3" />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full bg-transparent text-gray-200 px-3 py-2 focus:outline-none text-sm"
            />
          </div>

          {/* Subject */}
          <div className="bg-[#0f172a] rounded-lg border border-gray-700 focus-within:border-[#8245ec] transition">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full bg-transparent text-gray-200 px-3 py-2 rounded-lg focus:outline-none text-sm"
            />
          </div>

          {/* Message */}
          <div className="flex items-start bg-[#0f172a] rounded-lg border border-gray-700 focus-within:border-[#8245ec] transition">
            <MessageSquare className="text-[#8245ec] w-4 h-4 ml-3 mt-3" />
            <textarea
              name="message"
              rows="3"
              required
              placeholder="Your Message..."
              className="w-full bg-transparent text-gray-200 px-3 py-2 resize-none focus:outline-none text-sm"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="flex items-center justify-center w-full py-2 mt-2 bg-[#8245ec] hover:bg-[#6b3fd1] text-white font-semibold rounded-full transition-colors duration-300 text-sm"
          >
            <Send className="w-4 h-4 mr-1" /> Send
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-14 text-center text-gray-500 text-xs md:text-sm">
        <ul className="flex flex-wrap justify-center gap-5 mb-3 text-gray-400">
          <li><a href="#about" className="hover:text-[#8245ec] transition">About</a></li>
          <li><a href="#skills" className="hover:text-[#8245ec] transition">Skills</a></li>
          <li><a href="#experience" className="hover:text-[#8245ec] transition">Experience</a></li>
          <li><a href="#projects" className="hover:text-[#8245ec] transition">Projects</a></li>
          <li><a href="#education" className="hover:text-[#8245ec] transition">Education</a></li>
        </ul>
        <p>
          © 2025 <span className="text-[#c9b6ff] font-medium">Tarun Kaushik</span>. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;

