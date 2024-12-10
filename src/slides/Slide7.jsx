import { useState } from "react";
import Demo2 from "../demos/demo2";
const codeString = `
function Demo2() {
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery("accounts", fetchAccounts, {
    enabled: true,
    staleTime: 25000,
    cacheTime: 30000,
    keepPreviousData: false,
    placeholderData: null,
  });

  return (
    <div className="w-full">
      <div className="flex mt-8 gap-3">
        <button
          onClick={() => queryClient.invalidateQueries("accounts")}
        >
          {isFetching ? "Fetching..." : "Invalidate"}
        </button>
      </div>

      <pre className="overflow-y-auto max-h-80">
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}
    `;
function Slide7() {
  const [mount, setMount] = useState(false);

  return (
    <div className="text-left">
      <h4>Demo - React Query</h4>
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
          {mount && <Demo2 />}
        </div>
      </div>
    </div>
  );
}

export default Slide7;
