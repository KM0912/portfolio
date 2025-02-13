import Tooltip from "@mui/material/Tooltip";
import { menuItems } from "../data/menuItems";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              <span className="relative z-10">KM Portfolio</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></span>
            </h3>
            <div className="flex space-x-4">
              <Tooltip title="GitHub" arrow>
                <a
                  href="https://github.com/KM0912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
                >
                  <img
                    src="/images/github-mark-white.svg"
                    alt="GitHub"
                    className="h-5 w-5"
                  />
                </a>
              </Tooltip>
              <Tooltip title="Zenn" arrow>
                <a
                  href="https://zenn.dev/torakm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
                >
                  <img
                    src="/images/zenn-logo-only-white.svg"
                    alt="Zenn"
                    className="h-5 w-5"
                  />
                </a>
              </Tooltip>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              <span className="relative z-10">サイトマップ</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></span>
            </h3>
            <ul className="space-y-2">
              {Object.values(menuItems).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-cyan-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} KM Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
