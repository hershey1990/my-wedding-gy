import { render } from "preact";

import preactLogo from "./assets/preact.svg";
import "./style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurVotes from "./components/OurVotes";

export function App() {
  return (
    <>
      <main class="min-h-screen relative">
        <Header />
        <Hero />
        <OurVotes />
      </main>
    </>
  );
}

function Resource(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      class="p-6 rounded-lg text-left no-underline bg-gray-100 dark:bg-gray-800 border border-transparent hover:border-gray-900 dark:hover:border-gray-300 hover:shadow-[0_25px_50px_-12px_#673ab888] transition-all text-gray-900 dark:text-gray-100"
    >
      <h2 class="text-xl font-semibold mb-2">{props.title}</h2>
      <p class="text-gray-600 dark:text-gray-400">{props.description}</p>
    </a>
  );
}

render(<App />, document.getElementById("app"));
