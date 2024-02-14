const DataSource = {
  async apiCall(endpoint, method, data, token) {
   const url = process.env.REACT_APP_BACKEND_URL +`${endpoint}`;

    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined,
      },
      body: data ? JSON.stringify(data) : undefined
    })

      if (response.ok) {
        return response;
      }
        return response.text().then(errorMessage => {
          console.error("datasource: " + errorMessage);
          throw new Error(errorMessage);
        });


  },
  //Sends request to server to register a new user with form data
  registerUser(data) {
    const response = DataSource.apiCall('api/auth/register', 'POST', data);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },
  /*Request current users personal information
   *Takes authorization token as argument, gets a confirmation response from server */
  getUserInfo(token) {
    const response = DataSource.apiCall('user', 'GET', '', token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },
  /* Updates the current users personal information
  *Takes authorization token as argument, and data for current user, gets a confirmation response from server */
  updateUserInfo(data, token) {
    const response = DataSource.apiCall('user', 'PUT', data, token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },
  /* Gets a list of competence information from the server for the current user
  *Takes authorization token as argument, gets a list with the competence information for the current user */
  getCompetences(token) {
    const response = DataSource.apiCall('competence', 'GET', '', token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },
  /* Gets availability information from the server for the current user
  *Takes authorization token as argument, gets the availability data for the current user */
  getAvailability(token) {
    const response = DataSource.apiCall('availability', 'GET', '', token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },
  /* Register an application to the server for the current user
  *Takes authorization token, and form data as argument, gets a confirmation response from server */
  registerApplication(data, token) {
    const response = DataSource.apiCall('application', 'POST', data, token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },
  /* Gets the application from the server for the current user
  *Takes authorization token, gets the current users application data from server */
  getApplication(token) {
    const response = DataSource.apiCall('application', 'GET', '', token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },

  /* Gets a list of applications from the server
  *Takes authorization token */
  getApplications(token) {
    const response = DataSource.apiCall('applications', 'GET', '', token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },






};
export default DataSource;
