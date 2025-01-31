import { profile } from "../data/data";
import { useIntersectionObserver } from "../utils/useIntersectionObserver";

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
          <div className="relative group w-80 h-80 mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative rounded-full overflow-hidden w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/public/images/profile-image.png"
                alt="Profile"
                className="w-full rounded-lg shadow-2xl transform transition duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </div>

          <div className="space-y-8 self-start">
            <h2 className="text-4xl font-bold text-white">About Me</h2>
            {profile.map((item) => (
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
