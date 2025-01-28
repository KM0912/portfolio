import React from 'react';
import SectionTitle from './SectionTitle';
import { useIntersectionObserver } from '../utils/useIntersectionObserver';

const skillCategories = [
  {
    title: 'プログラミング言語',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript/TypeScript', level: 90 },
      { name: 'Go', level: 75 },
    ],
  },
  {
    title: 'フレームワーク',
    skills: [
      { name: 'Spring Boot', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Vue.js', level: 80 },
      { name: 'Django', level: 75 },
    ],
  },
  {
    title: 'インフラ・ツール',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 80 },
      { name: 'CI/CD', level: 85 },
    ],
  },
  {
    title: 'データベース',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 75 },
    ],
  },
];

const Skills = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="スキル" />

        <div 
          ref={elementRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              style={{
                animationDelay: `${categoryIndex * 0.2}s`
              }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b-2 border-cyan-500 pb-2">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    style={{
                      animationDelay: `${(categoryIndex * 4 + index) * 0.1}s`
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 4 + index) * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;