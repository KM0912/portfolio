import SectionTitle from "./SectionTitle";
import { useIntersectionObserver } from "../utils/useIntersectionObserver";
import { skills } from "../data/data";

const Skills = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="スキル" />

        <div
          ref={elementRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {skills.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              style={{
                animationDelay: `${categoryIndex * 0.2}s`,
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
                      animationDelay: `${(categoryIndex * 4 + index) * 0.1}s`,
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400">{skill.level} / 5</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible
                            ? `${(skill.level / 5) * 100}%`
                            : "0%",
                          transitionDelay: `${
                            (categoryIndex * 4 + index) * 0.1
                          }s`,
                        }}
                      ></div>
                      <div className="absolute inset-0 flex justify-between">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className={
                              i !== 0 && i !== 5
                                ? "w-0.5 h-full bg-gray-600"
                                : ""
                            }
                            style={{
                              left: `${i * 20}%`,
                            }}
                          ></div>
                        ))}
                      </div>
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
