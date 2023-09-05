import { useState } from 'react';
import axios from 'axios';

interface SearchResult {
  sickCd: string;
  sickNm: string;
}

const useSearchAPI = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);
  const [data, setData] = useState<SearchResult[] | null>(null);

  const search = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<SearchResult[]>(
        `http://localhost:4000/sick?q=${query}`,
      );
      setData(response.data);
    } catch (event: any) {
      setError(event);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, search };
};

export default useSearchAPI;
