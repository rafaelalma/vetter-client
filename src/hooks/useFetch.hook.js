import { useState } from "react";

export default function useFetch(baseUrl) {
  const [loading, setLoading] = useState(false);

  function get(url) {
    return new Promise((resolve, reject) => {
      setLoading(true);
      fetch(baseUrl + url)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  function post(url, body) {
    return send("post", url, body);
  }

  function put(url, body) {
    return send("put", url, body);
  }

  function patch(url, body) {
    return send("patch", url, body);
  }

  function del(url, body) {
    return send("delete", url, body);
  }

  function send(method, url, body) {
    return new Promise((resolve, reject) => {
      setLoading(true);
      fetch(baseUrl + url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return { get, post, put, patch, del, loading };
}
