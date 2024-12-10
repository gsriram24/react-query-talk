import { useQuery, useQueryClient } from "react-query";
const fetchAccounts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://api.sampleapis.com/fakebank/accounts");
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response.json();
};
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
      <button
        className="outline-none border-none px-8 py-2 text-sm bg-blue-500 text-white"
        onClick={() => queryClient.invalidateQueries("accounts")}
      >
        {isFetching ? "Fetching..." : "Invalidate"}
      </button>

      <pre className="overflow-y-auto max-h-80">
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}

export default Demo2;
