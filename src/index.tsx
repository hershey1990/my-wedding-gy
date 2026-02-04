import { render } from "preact";

import "./style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurVotes from "./components/OurVotes";
import AboutLocation from "./components/AboutLocation";
import Timer from "./components/Timer";
import AudioBg from "./components/AudioBg";
import ConfirmReservation from "./components/ConfirmReservation";
import Gifts from "./components/Gifts";

export function App() {
  return (
    <>
      <AudioBg />
      <main id="home" class="min-h-screen relative bg-white">
        <Header />
        <Hero />
        <OurVotes />
        <Timer />
        <AboutLocation />
        <Gifts />
        <ConfirmReservation />
      </main>
    </>
  );
}

render(<App />, document.getElementById("app"));
