export default function useFetch(baseUrl) {
  function get(url, signal) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, { signal })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            return reject(data);
          }
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  function post(url, body) {
    return send("POST", url, body);
  }

  function put(url, body) {
    return send("PUT", url, body);
  }

  function patch(url, body) {
    return send("PATCH", url, body);
  }

  function del(url, body) {
    return send("DELETE", url, body);
  }

  function send(method, url, body) {
    return new Promise((resolve, reject) => {
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
            return reject(data);
          }
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  return { get, post, put, patch, del };
}
