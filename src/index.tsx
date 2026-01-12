import { render } from "preact";

import preactLogo from "./assets/preact.svg";
import "./style.css";
import Header from "./components/Header";

export function App() {
  return (
    <div class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <Header />
      <div class="max-w-4xl mx-auto px-4 text-center">
        <a href="https://preactjs.com" target="_blank">
          <img
            src={preactLogo}
            alt="Preact logo"
            height="160"
            width="160"
            class="mx-auto mb-6 hover:drop-shadow-[0_0_2em_#673ab8aa] transition-all"
          />
        </a>
        <h1 class="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">
          Get Started building Vite-powered Preact Apps
        </h1>
        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <Resource
            title="Learn Preact"
            description="If you're new to Preact, try the interactive tutorial to learn important concepts"
            href="https://preactjs.com/tutorial"
          />
          <Resource
            title="Differences to React"
            description="If you're coming from React, you may want to check out our docs to see where Preact differs"
            href="https://preactjs.com/guide/v10/differences-to-react"
          />
          <Resource
            title="Learn Vite"
            description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
            href="https://vitejs.dev"
          />
        </section>
      </div>
    </div>
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
