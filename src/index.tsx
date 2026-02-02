import { render } from "preact";

import "./style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurVotes from "./components/OurVotes";
import AboutLocation from "./components/AboutLocation";
import Timer from "./components/Timer";
import AudioBg from "./components/AudioBg";

export function App() {
  return (
    <>
      <AudioBg />
      <main class="min-h-screen relative">
        <Header />
        <Hero />
        <OurVotes />
        <Timer />
        <AboutLocation />
      </main>
    </>
  );
}

render(<App />, document.getElementById("app"));
