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
   *Takes authentication token as argument, gets a confirmation response from server */
  getUserInfo(auth) {
    const response = DataSource.apiCall(`api/persons/${auth.user}`, 'GET', auth.user, auth.token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },
  /* Updates the current users personal information
  *Takes authentication token as argument, and data for current user as objects {"name":"newname","surname":"newsurname","username":"newusername", "email":"newemail", "password";"newpswd"},
  *  gets a confirmation response from server or an error why it did not update the information */
  updateUserInfo(data, token) {
    const response = DataSource.apiCall(`api/persons/${data.username}`, 'PUT', data, token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },
  /* Gets a list of competence information from the server for the current user
  *Takes authentication as argument, gets a list with the competence information for the current user or null */
  getCompetenceForUser(auth) {
    const response = DataSource.apiCall(`competence/${auth.user}`, 'GET', '', auth.token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },
  /* Gets a list of competence information from the server
  *Takes authentication as argument, gets a list with the competences that are available to choose from */
  getCompetences(auth) {
    const response = DataSource.apiCall(`applicant/competences`, 'GET', '', auth.token);
    return response.then(res => {
      return res.json()
    }).catch(err => {
      throw new Error(err.message)
    });
  },
  /* Gets availability information from the server for the current user
  *Takes authentication as argument, gets the availability data for the current user */
  getAvailability(auth) {
    const response = DataSource.apiCall(`availability/${auth.user}`, 'GET', '', auth.token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },
  /* Register availability information to the server for the current user
  *Takes authentication as argument and the availability data as an object,gets a confirmation response or error*/
  registerAvailability(data, auth) {
    const response = DataSource.apiCall(`availability`, 'POST', data, auth.token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },
  /* Register an application to the server for the current user
  *Takes authentication token, and form data as argument, gets a confirmation response from server */
  registerApplication(data, token) {
    const response = DataSource.apiCall(`applicant/apply`, 'POST', data, token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },
  /* Gets the application from the server for the current user
  *Takes authentication as argument, gets the current users application data from server */
  getApplication(auth) {
    const response = DataSource.apiCall(`application/${auth.user}`, 'GET', auth.user, auth.token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },

  /* Gets a list of applications from the server
  *Takes authorization as argument*/
  getListOfApplications(auth) {
    const response = DataSource.apiCall(`recruiter/applications`, 'GET', '', auth.token);
    console.log(response);
    return response.then(res => {
      return res.json()
    }).catch(err => {
      throw new Error(err.message)
    });
  },
  /* Gets a list of applications from the server
  *Takes authorization token and the application data with {id, status} as argument*/
  updateApplicationStatus(data, token) {
    const response = DataSource.apiCall(`application/${data.id}`, 'PUT', data.status, token);
    return response.then(res => {
      return res.text()
    }).catch(err => {
      throw new Error(err.message)
    });
  },

};
export default DataSource;