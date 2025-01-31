import React from 'react';
import { useIntersectionObserver } from '../utils/useIntersectionObserver';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '' }) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-gray-300">{subtitle}</p>}
      <div className="mt-2 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
    </div>
  );
};

export default SectionTitle;