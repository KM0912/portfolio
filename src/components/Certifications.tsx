import SectionTitle from "./SectionTitle";
import { useIntersectionObserver } from "../utils/useIntersectionObserver";

const certifications = [
  {
    name: "AWS認定ソリューションアーキテクト プロフェッショナル",
    issuer: "Amazon Web Services",
    date: "2023年取得",
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2023年取得",
  },
  {
    name: "応用情報技術者試験",
    issuer: "IPA",
    date: "2022年取得",
  },
  {
    name: "Oracle Certified Professional, Java SE 11 Developer",
    issuer: "Oracle",
    date: "2022年取得",
  },
];

const Certifications = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="資格" />

        <div
          ref={elementRef}
          className={`overflow-x-auto ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <table className="w-full border-b border-gray-700 border-collapse bg-gray-800 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-800 border-b border-gray-700">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  資格名
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  発行元
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  取得時期
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {certifications.map((cert, index) => (
                <tr
                  key={cert.name}
                  className="hover:bg-gray-800 transition-colors duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <td className="px-6 py-4 text-white">{cert.name}</td>
                  <td className="px-6 py-4 text-gray-300">{cert.issuer}</td>
                  <td className="px-6 py-4 text-cyan-400 font-medium">
                    {cert.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
