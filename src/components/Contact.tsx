import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { useIntersectionObserver } from '../utils/useIntersectionObserver';

const Contact = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="お問い合わせ" />

        <div 
          ref={elementRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6 border-l-4 border-cyan-500 pl-4">
                お気軽にご連絡ください
              </h3>
              <p className="text-gray-300 mb-8">
                プロジェクトについてのご相談、お見積もりのご依頼など、
                お気軽にお問い合わせください。
                通常24時間以内にご返信いたします。
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-colors duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="ml-3">contact@example.com</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <span className="ml-3">LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-colors duration-300">
                    <Github className="h-5 w-5" />
                  </div>
                  <span className="ml-3">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium 
                       hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800
                       transform hover:-translate-y-0.5 transition-all duration-300"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;