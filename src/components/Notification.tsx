import React, { useEffect, useState } from "react";

interface NotificationProps {
  message: string;
  type?: "success" | "error";
  onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type = "success",
  onClose,
}) => {
  const [mounted, setMounted] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true)); // スライドイン開始
    const timer = setTimeout(() => {
      setAnimateOut(true); // スライドアウト開始
      setTimeout(() => {
        onClose && onClose();
      }, 300); // アニメーション完了待ち
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icon =
    type === "error" ? (
      <svg
        className="h-6 w-6 text-red-400"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        className="h-6 w-6 text-green-400"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2l4-4"
        />
      </svg>
    );

  return (
    <div
      className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ${
        mounted && !animateOut
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      }`}
    >
      <div
        className={`max-w-sm w-full ${
          type === "error" ? "bg-red-50" : "bg-white"
        } shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden`}
      >
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">{icon}</div>
            <div className="ml-3 flex-1">
              <p
                className={`text-sm font-medium ${
                  type === "error" ? "text-red-900" : "text-gray-900"
                }`}
              >
                {message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
