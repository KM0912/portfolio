import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          あなたのプロジェクトを
          <br className="sm:hidden" />
          <span className="text-blue-600">加速させる</span>
          <br className="sm:hidden" />
          ITエンジニア
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          フルスタックエンジニアとして、あなたのビジョンを実現するお手伝いをいたします。
          最新のテクノロジーと豊富な経験を活かし、価値のあるソリューションを提供します。
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            お問い合わせ
          </a>
        </div>
        <div className="mt-20 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-gray-600">
            <ChevronDown className="mx-auto h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;