import "../styles/slide2.css";

const Slide2 = () => {
  const codeString = `
const [data, setData] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data?page=\${page}');
      if (!res.ok) {
        throw new Error('Failed to fetch')
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();

}, [page]);
	`;
  const codeString2 = `
const [data, setData] = useState(null);

useEffect(() => {
  let ignore = false;
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data?page=\${page}');
      if (!res.ok) {
        throw new Error('Failed to fetch')
      }
      const result = await response.json();
      if(ignore) return;
      setData(result);
    } catch (error) {
      if(!ignore) console.error(error);
    }
    return () => { ignore = true; };
  };

  fetchData();

}, [page]);
	`;

  return (
    <>
      <section>
        <div className="text-left">
          <h4>Data Fetching</h4>
          <hr />{" "}
          <pre>
            <code data-trim data-noescape data-line-numbers="1-19|19">
              {codeString}
            </code>
          </pre>
          <p className="text-lg">
            See? That's it! Why do I need react query for this?
          </p>
        </div>
      </section>
      <section>
        <div className="text-left">
          <h4>Data Fetching</h4>
          <hr />{" "}
          <pre>
            <code data-trim data-noescape data-line-numbers="4|4,12,15,17">
              {codeString2}
            </code>
          </pre>
          <p className="fragment text-lg">
            But what about error, loading, and empty states?
          </p>
        </div>
      </section>
    </>
  );
};

export default Slide2;
