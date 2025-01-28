import React from 'react';
import { Code, Server, Database, LineChart } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { useIntersectionObserver } from '../utils/useIntersectionObserver';

const services = [
  {
    icon: Code,
    title: 'Web開発',
    description: 'モダンな技術スタックを用いた、高品質なWebアプリケーション開発',
    details: [
      'フロントエンド開発 (React, Vue.js)',
      'バックエンド開発 (Node.js, Java)',
      'レスポンシブデザイン',
      'パフォーマンス最適化',
    ],
  },
  {
    icon: Server,
    title: 'インフラ構築',
    description: 'スケーラブルで信頼性の高いクラウドインフラの設計・構築',
    details: [
      'AWS/GCPの環境構築',
      'Kubernetes/Dockerの導入',
      'CI/CDパイプラインの構築',
      'セキュリティ設計',
    ],
  },
  {
    icon: Database,
    title: 'データベース設計',
    description: '効率的で拡張性のあるデータベース設計とパフォーマンスチューニング',
    details: [
      'スキーマ設計',
      'クエリ最適化',
      'マイグレーション計画',
      'バックアップ戦略',
    ],
  },
  {
    icon: LineChart,
    title: '技術コンサルティング',
    description: '技術選定から開発プロセス改善まで、幅広いアドバイスを提供',
    details: [
      'アーキテクチャ設計',
      '技術スタックの選定',
      'コードレビュー',
      'チーム技術メンタリング',
    ],
  },
];

const Services = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="サービス提供内容" />

        <div 
          ref={elementRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-cyan-500 pl-4">
            稼働可能時間・契約形態
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-200 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></span>
                  稼働可能時間
                </h4>
                <ul className="space-y-2 text-gray-300 ml-5">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full mr-3"></span>
                    平日: 19:00 - 23:00
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full mr-3"></span>
                    土日: 10:00 - 18:00
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full mr-3"></span>
                    月間: 40時間程度
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-200 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></span>
                  契約形態
                </h4>
                <ul className="space-y-2 text-gray-300 ml-5">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full mr-3"></span>
                    業務委託契約
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full mr-3"></span>
                    準委任契約
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full mr-3"></span>
                    プロジェクト単位の契約
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;