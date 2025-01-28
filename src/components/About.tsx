import { useIntersectionObserver } from "../utils/useIntersectionObserver";

const aboutMe: {
  title: string;
  content: string | string[];
}[] = [
  {
    title: "名前",
    content: "K.M",
  },
  {
    title: "経歴",
    content:
      "現在、大手IT企業でフルスタックエンジニアとして活躍中。5年以上のWeb開発経験を持ち、フロントエンドからバックエンド、インフラまで幅広い技術スタックを習得しています。",
  },
  {
    title: "得意分野",
    content: [
      "モダンなWebアプリケーション開発",
      "クラウドインフラの設計・構築",
      "パフォーマンス最適化",
      "チーム開発・技術メンタリング",
    ],
  },
  {
    title: "趣味・興味",
    content:
      "新しい技術のキャッチアップと実践を心がけています。休日は技術書を読んだり、個人開発を行ったりしています。また、技術ブログの執筆やコミュニティ活動にも積極的に参加しています。",
  },
];

const About = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      id="about"
      className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div
          ref={elementRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="w-full rounded-lg shadow-2xl transform transition duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </div>

          <div className="space-y-8 self-start">
            <h2 className="text-4xl font-bold text-white">About Me</h2>

            {aboutMe.map((item) => (
              <div key={item.title} className="space-y-4">
                <h3 className="text-2xl font-semibold text-white border-l-4 border-cyan-500 pl-4">
                  {item.title}
                </h3>
                {Array.isArray(item.content) ? (
                  <ul className="space-y-2">
                    {item.content.map((content) => (
                      <li
                        key={content}
                        className="flex items-center text-gray-300"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></span>
                        {content}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
