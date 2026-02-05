
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-100 border-t border-gray-100 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Ready to master <br />Physics together?
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-md mb-8">
              Based in Samastipur, Bihar. Reach out for collaborations, guest lectures, or academic queries.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:mayank.mishra@resonance.ac.in" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                Send Email
              </a>
              <a href="#" className="px-6 py-3 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-all border border-1 border-black">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Location</h4>
              {/* <p className="text-gray-900 font-medium">Resonance Samastipur</p> */}
              <p className="text-gray-500">Madhepura, Bihar, India</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Focus Areas</h4>
              <ul className="text-gray-500 space-y-2">
                <li>JEE Preparation</li>
                <li>NEET Guidance</li>
                <li>Conceptual Physics</li>
                <li>Foundation Courses</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Mayank Mishra. The Ultimate Physics Mentor.</p>
          {/* <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
