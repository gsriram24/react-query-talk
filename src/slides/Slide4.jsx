const Slide4 = () => {
  const codeString = `
  const { isLoading, data, error } = useQuery({
    queryKey: ['products', page],
    queryFn: () =>
      fetch('https://api.example.com/data?page=\${page}').then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch')
        }
        return res.json()
      }),
  })
	`;

  return (
    <div className="text-left">
      <h4>Data Fetching - React Query</h4>
      <hr />{" "}
      <pre className="overflow-visible">
        <code data-trim data-noescape data-line-numbers>
          {codeString}
        </code>
      </pre>
      <p className="fragment text-lg">That's it!</p>
    </div>
  );
};

export default Slide4;
