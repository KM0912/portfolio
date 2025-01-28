import React from 'react';
import SectionTitle from './SectionTitle';
import { useIntersectionObserver } from '../utils/useIntersectionObserver';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'ECサイトリニューアル',
    description: '大手小売企業のECサイトをモダン化。売上30%増加を達成。',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'TypeScript', 'Node.js', 'AWS'],
    role: '技術リード・フルスタック開発',
    achievements: [
      'マイクロサービスアーキテクチャの設計と実装',
      'CI/CDパイプラインの構築',
      'パフォーマンス最適化による読み込み時間50%削減',
    ],
  },
  {
    title: '社内業務システム刷新',
    description: '従来の基幹システムをクラウドネイティブなアプリケーションへ移行',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['Spring Boot', 'Vue.js', 'PostgreSQL', 'Docker'],
    role: 'バックエンドリード',
    achievements: [
      'レガシーシステムのモダン化',
      'セキュリティ強化',
      '運用コスト40%削減',
    ],
  },
  {
    title: 'AIチャットボット開発',
    description: 'カスタマーサポート業務の自動化システムを開発',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['Python', 'FastAPI', 'React', 'GCP'],
    role: 'プロジェクトマネージャー・AI開発',
    achievements: [
      '問い合わせ対応時間70%削減',
      'カスタマー満足度20%向上',
      '24時間対応の実現',
    ],
  },
];

const Projects = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="実績" />

        <div 
          ref={elementRef}
          className={`space-y-24 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-full md:w-1/2 group">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-lg shadow-lg transform transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">担当範囲</h4>
                  <p className="text-gray-300">{project.role}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">使用技術</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">主な成果</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;