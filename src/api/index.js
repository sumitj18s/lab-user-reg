const BASE_URL = process.env.API_HOST || "http://localhost:8080/";

function api() {
  return {
    getUsers: async () => {
      const url = `${BASE_URL}users`;
      const response = await fetch(url);
      const apiResponse = await response.json();

      return apiResponse;
    },

    submitUser:  ({ name, address, city }) => {
      const url = `${BASE_URL}user`;
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, address, city }),
      });      
    },
  };
}

export default api;
