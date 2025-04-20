interface JsonResponse<T> {
  status: number;
  ok: boolean;
  json: T;
}

type RequestOptions = RequestInit;

type NetworkError = {
  networkError: string;
};

interface ServerError {
  error: boolean;
  message: string;
  code: number;
}

function parseJSON<T>(response: Response): Promise<JsonResponse<T>> {
  return new Promise((resolve) => {
    response.json().then((json) => {
      resolve({
        status: response.status,
        ok: response.ok,
        json,
      });
    });
  });
}

export default function request<T>(
  url: string,
  options?: RequestOptions,
): Promise<T> {
  const endpoint = "http://localhost:8080/"; // Define your endpoint base URL here

  return new Promise((resolve, reject) => {
    fetch(endpoint + url, options)
      .then((response) => parseJSON<T | ServerError>(response))
      .then((response) => {
        if (response.ok) {
          return resolve(response.json as T);
        }
        const errorResponse = response.json as ServerError;
        // Extract the error from the server's JSON
        return reject(errorResponse || "Unknown error");
      })
      .catch((error) =>
        reject({
          networkError: error.message,
        } as NetworkError),
      );
  });
}
