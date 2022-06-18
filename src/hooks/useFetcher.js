import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

export default function useFetcher(url, update) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const getData = useCallback(
    () => {
      setLoading(true);
      axiosInstance
        .get(url)
        .then((res) => {
          setData(res?.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => setLoading(false));
    },
    [url]
  );

  useEffect(() => {
    getData()
  }, [update]);

  return { data, loading, error };
}
