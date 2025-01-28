import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              <span className="relative z-10">KM Portfolio</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></span>
            </h3>
            <p className="text-gray-400">
              あなたのプロジェクトを加速させるITエンジニア
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              <span className="relative z-10">サイトマップ</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></span>
            </h3>
            <ul className="space-y-2">
              {[
                { label: '自己紹介', href: '#about' },
                { label: 'スキル', href: '#skills' },
                { label: '実績', href: '#projects' },
                { label: 'サービス', href: '#services' },
                { label: '資格', href: '#certifications' },
                { label: 'お問い合わせ', href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-cyan-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              <span className="relative z-10">連絡先</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></span>
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-center">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                Email: contact@example.com
              </li>
              <li className="text-gray-400 flex items-center">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                稼働時間: 平日 19:00-23:00
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} KM Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;