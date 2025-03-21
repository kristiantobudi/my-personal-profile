import BounceCards from "./block/Components/BounceCards/BounceCards";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <HeroSection />
        <div className="grid items-center justify-center">
          <BounceCards
            images={[
              "../src/assets/Dashboard.jpg",
              "../src/assets/Dashboard1.jpg",
              "../src/assets/Dashboard2.jpg",
              "../src/assets/Dashboard3.jpg",
              "../src/assets/Dashboard4.jpg",
            ]}
            animationDelay={0}
            animationStagger={10}
            easeType="elastic.out(1, 0.8)"
            enableHover
          />
        </div>
      </div>
    </>
  );
}

export default App;
