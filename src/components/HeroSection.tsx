import RotatingText from "@/block/TextAnimations/RotatingText/RotatingText";
import InfiniteMovingCard from "./InfiniteMovingCard";
import WorldMap from "./ui/world-map";

export default function HeroSection() {
  return (
    <>
      <div className="py-24 sm:py-32">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-slate-700 md:text-5xl">
              Hi! I'm ,{" "}
            </h1>
            <RotatingText
              texts={["Eduardo", "Programmer", "Developer", "Designer"]}
              mainClassName="px-2 sm:px-2 md:px-2 bg-radial from-pink-400 to-pink-600 text-2xl text-white sm:text-3xl md:text-4xl font-bold text-black overflow-hidden py-0.5 sm:py-1 md:py-1 rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              rotationInterval={3000}
            />
          </div>
          <h1 className="mb-4 text-2xl lg:text-4xl font-extrabold leading-tight tracking-tight text-slate-700 md:text-5xl ">
            a <span className="text-pink-600">Frontend Developer</span> from{" "}
            <span className="text-pink-600">Colombia</span>
          </h1>
          <p className="mb-8 text-lg font-light text-gray-500 lg:text-lg">
            I'm a frontend developer, currently working at{" "}
            <a
              href="https://www.talentsprint.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600"
            >
              Talentsprint
            </a>
          </p>
          <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg  relative font-sans">
            <WorldMap
              dots={[
                {
                  start: { lat: 60.4501, lng: -75.5234 },
                  end: { lat: -20.4501, lng: -40.5234 },
                },
                {
                  start: { lat: -30.4501, lng: -75.5234 },
                  end: { lat: -20.4501, lng: -40.5234 },
                },
                {
                  start: { lat: -70.4501, lng: 30.5234 },
                  end: { lat: -20.4501, lng: -40.5234 },
                },
                {
                  start: { lat: 20.4501, lng: 90.5234 },
                  end: { lat: 80.4501, lng: 20.5234 },
                },
                {
                  start: { lat: 20.4501, lng: 90.5234 },
                  end: { lat: -50.4501, lng: 10.5234 },
                },
              ]}
              lineColor="#DA498D"
            />
          </div>
          <div className="mb-4 h-[15rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCard />
          </div>
        </div>
      </div>
    </>
  );
}
