import { useState } from "react";
import Demo1 from "../demos/demo1";
const codeString = `
function Demo1() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setData(null);
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      try {
        const response = await fetch(
          "https://api.sampleapis.com/fakebank/accounts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full">
      {loading && <div>Fetching...</div>}
      <pre className="overflow-y-auto max-h-80">
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}

    `;
function Slide6() {
  const [mount, setMount] = useState(false);

  return (
    <div className="text-left">
      <h4>Demo - Manually Fetch</h4>
      <hr />{" "}
      <div className="flex gap-6">
        <pre>
          <code
            style={{ maxHeight: "400px", overflowX: "hidden" }}
            data-trim
            data-noescape
            data-line-numbers
          >
            {codeString}
          </code>
        </pre>
        <div className="w-3/5">
          <button
            className="outline-none border-none px-8 py-2 text-sm bg-blue-500 text-white"
            onClick={() => setMount(!mount)}
          >
            {mount ? "Unmount" : "Mount"}
          </button>
          {mount && <Demo1 />}
        </div>
      </div>
    </div>
  );
}

export default Slide6;
