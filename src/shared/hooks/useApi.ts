import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const useApi = <T>(endpointOrFetcher: string | Function) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T>();

  const loadData = async () => {
    try {
      if (typeof endpointOrFetcher === "string") {
        const response = await fetch(
          `${API_URL}/${endpointOrFetcher.replace("/", "")}`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        );

        console.log({ response });
        if (response.ok) {
          // 200, 201
          const responseData: T = await response.json();

          setData(responseData);
        } else {
          throw new Error("Response error");
        }
      } else {
        // function
        const responseData = await endpointOrFetcher();

        setData(responseData);
      }
    } catch {
      console.error("Oh no!");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return { isLoading, isError, data };
};
