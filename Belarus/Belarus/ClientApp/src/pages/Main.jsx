import About from "../components/About";
import Advertisement from "../components/Advertisement";
import Contests from "../components/Contests";
import Slider from "../components/Slider";

export const DEFAULT_URL = "http://localhost:7001/api/";

const Main = () => {
  return (
    <div>
      <Slider />
      <About />
      <Advertisement />
      <Contests />
    </div>
  );
};

export default Main;
