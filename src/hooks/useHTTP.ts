import React, { useState } from "react";

type requestConfigType = {
  url: RequestInfo | URL;
  method?: string;
  headers?: HeadersInit;
  body?: any;
};

interface IUseHTTP {
  (): {
    isLoading: boolean;
    error: string | null;
    sendRequest: (
      requestConfig: requestConfigType,
      applyData: (arg0: any) => void,
      handleError?: () => void
    ) => Promise<void>;
  };
}

const useHTTP: IUseHTTP = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = React.useCallback(
    async (
      requestConfig: requestConfigType,
      applyData: (arg0: any) => void,
      handleError?: () => void
    ) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        applyData(data);
      } catch (err) {
        setError((err as Error).message || "Something went wrong!");
        handleError && handleError();
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHTTP;
