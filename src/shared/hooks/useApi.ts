import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const useApi = <T>(endpoint: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T>();

  const loadData = async () => {
    try {
      const response = await fetch(`${API_URL}/${endpoint.replace("/", "")}`, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });

      console.log({ response });
      if (response.ok) {
        // 200, 201
        const responseData: T = await response.json();

        setData(responseData);
      } else {
        throw new Error("Response error");
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
