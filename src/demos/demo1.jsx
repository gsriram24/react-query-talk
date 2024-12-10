import { useEffect } from "react";
import { useState } from "react";

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
      {loading && <div className="text-lg">Fetching...</div>}
      <pre className="overflow-y-auto max-h-80">
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}

export default Demo1;
