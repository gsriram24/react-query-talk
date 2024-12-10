const Slide3 = () => {
  const codeString = `
const [data, setData] = useState(null);
const [error, setError] = useState();
const [loading, setLoading] = useState(false);

useEffect(() => {

  let ignore = false;
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.example.com/data?page=\${page}');
      if (!res.ok) {
        throw new Error('Failed to fetch')
      }
      const result = await response.json();
      if(ignore) return;
      setError(null);
      setData(result);
    } catch (error) {
      if(!ignore) {
        setError(error);
        setData(undefined);
      } 
    } finally {
      if(!ignore) setLoading(false);
    }
    return () => { ignore = true; };
  };

  fetchData();

}, [page]);
	`;

  return (
    <div className="text-left">
      <h4>Data Fetching - Error and Loading</h4>
      <hr />{" "}
      <pre className="overflow-visible">
        <code data-trim data-noescape data-line-numbers="3,9,24-26|2,14,20-23">
          {codeString}
        </code>
      </pre>
      <p className="fragment text-lg">Okay..? This is still not so bad..?</p>
    </div>
  );
};

export default Slide3;
