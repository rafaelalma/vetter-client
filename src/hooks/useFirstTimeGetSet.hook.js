import { useEffect } from "react";

export default function useFirstTimeGetSet(
  get,
  url,
  setState,
  setLoading,
  message = "Get"
) {
  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        setLoading(true);

        const data = await get(url, abortController.signal);
        console.log(message, data);

        setState(data);
        setLoading(false);
      } catch (error) {
        console.error(error);

        if (error.name !== "AbortError") {
          setLoading(false);
        }
      }
    })();

    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
