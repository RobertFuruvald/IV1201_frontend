const DataSource = {
  apiCall(endpoint, method, data) {
   const url = process.env.REACT_APP_BACKEND_URL +`${endpoint}`;

    return fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: data ? JSON.stringify(data) : undefined
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
        return response.text().then(errorMessage => {
          throw new Error(errorMessage);
        });

    })
  },

  registerUser(data) {
    return DataSource.apiCall('api/auth/register', 'POST', data);
  },

};

export default DataSource;
