import { data } from "@/content/logoMovingCard";

export default function InfiniteMovingCard() {
  return (
    <div className="overflow-hidden relative w-full h-40 flex items-center">
      <div className="flex space-x-4 animate-[scroll_30s_linear_infinite] w-max">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-48 h-32 bg-white border shadow-lg rounded-lg flex flex-col items-center justify-center text-lg font-semibold"
          >
            <item.logo size={40} className="mb-2 text-pink-600" />
            <span className="text-pink-600">{item.title}</span>
          </div>
        ))}
        {data.map((item, index) => (
          <div
            key={`duplicate-${index}`}
            className="w-48 h-32 bg-white border shadow-lg rounded-lg flex flex-col items-center justify-center text-lg font-semibold"
          >
            <item.logo size={40} className="mb-2 text-pink-600" />
            <span className="text-pink-600">{item.title}</span>
          </div>
        ))}
      </div>
      <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
    </div>
  );
}
