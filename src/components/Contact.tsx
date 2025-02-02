import { useState } from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "./SectionTitle";
import { useIntersectionObserver } from "../utils/useIntersectionObserver";
import Notification from "./Notification";

type NotificationState = {
  message: string;
  type: "success" | "error";
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { handleSubmit, register } = useForm<FormData>();
  const [notification, setNotification] = useState<NotificationState | null>(
    null
  );

  const onSubmit = (data: FormData) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then((res) => {
        if (res.ok) {
          setNotification({
            message: "フォームが正常に送信されました。",
            type: "success",
          });
        } else {
          setNotification({
            message: "フォームの送信中にエラーが発生しました。",
            type: "error",
          });
        }
      })
      .catch((error) => {
        setNotification({
          message: "フォームの送信中にエラーが発生しました。",
          type: "error",
        });
        console.error("Form submission error:", error);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="お問い合わせ" />
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
        <div
          ref={elementRef}
          className={`grid grid-cols-1 gap-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700"
            data-netlify="true"
          >
            <div>
              <p className="text-gray-300 mb-4">
                プロジェクトについてのご相談、お見積もりのご依頼など、
                お気軽にお問い合わせください。
              </p>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                お名前
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                メールアドレス
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                メッセージ
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message", { required: true })}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium 
                        hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800
                        transform hover:-translate-y-0.5 transition-all duration-300"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
