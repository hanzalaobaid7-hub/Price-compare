import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const sampleResults = [
      { site: "Amazon", price: "₹999", link: "https://www.amazon.in/s?k=" + query },
      { site: "Myntra", price: "₹1049", link: "https://www.myntra.com/" + query },
      { site: "Flipkart", price: "₹950", link: "https://www.flipkart.com/search?q=" + query }
    ];
    setResults(sampleResults);
  };

  return (
    <div>
      <h1>Price Comparison Tool</h1>
      <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search clothing..."/>
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((r,i)=>(<li key={i}><a href={r.link} target="_blank">{r.site}: {r.price}</a></li>))}
      </ul>
    </div>
  );
}
