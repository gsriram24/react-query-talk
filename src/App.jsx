// App.tsx
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import "./App.css";
import Slide1 from "./Slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";
import { QueryClient, QueryClientProvider } from "react-query";
import Slide8 from "./slides/Slide8";

function App() {
  const deckDivRef = useRef(null); // reference to deck container div
  const deckRef = useRef(null); // reference to deck reveal instance

  const queryClient = new QueryClient();

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, {
      transition: "slide",
      // other config options
      plugins: [RevealMarkdown, RevealHighlight],
      center: false,
      margin: 0.1,
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (error) {
        console.error(error);
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <QueryClientProvider client={queryClient}>
      <div className="reveal" ref={deckDivRef}>
        <div className="slides">
          <section className="mt-40">
            <h3>Data Fetching in React</h3>
            <h6>
              Async State Management - Why use something like React Query?
            </h6>
            <div className="text-right  mt-64">
              <h6 className="text-2xl font-semibold">G Sriram</h6>
            </div>
          </section>
          <section>
            <Slide1 />
          </section>
          <section>
            <Slide2 />
          </section>
          <section>
            <Slide3 />
          </section>
          <section>
            <Slide4 />
          </section>
          <section>
            <Slide5 />
          </section>
          <section>
            <Slide6 />
          </section>
          <section>
            <Slide7 />
          </section>
          <section>
            <Slide8 />
          </section>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
