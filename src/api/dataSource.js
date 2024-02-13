const DataSource = {
  async apiCall(endpoint, method, data, token) {
   const url = process.env.REACT_APP_BACKEND_URL +`${endpoint}`;

    return await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined,
      },
      body: data ? JSON.stringify(data) : undefined
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      }
        return response.text().then(errorMessage => {
          console.error("datasource: " + errorMessage);
          throw new Error(errorMessage);
        });

    })
  },

  registerUser(data) {
    return DataSource.apiCall('api/auth/register', 'POST', data);
  },


};
export default DataSource;
