import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SearchResultItem from "../../components/SearchResultItem";

export default function Search() {
  const [results, setResults] = useState([]);
  const router = useRouter();
  const type = router.query.type || undefined;
  const query = router.query.q || undefined;
  const paramString = "/api/search?q=" + query + "&type=" + type;

  const fetchResults = async () => {
    const response = await fetch(paramString);
    const data = await response.json();
    setResults(data);
  };

  useEffect(() => {
    fetchResults();
  }, [router.query.q]);

  return (
    <div>
      {results.map((image) => {
        return (
          <SearchResultItem key={image.id} id={image.id} path={image.path} />
        );
      })}
    </div>
  );
}
