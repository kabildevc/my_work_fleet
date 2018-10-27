import request from 'superagent'


export function login(username, password, callback) {
  return function (dispatch) {
    let value = {
      username,
      password
    }
    post('login', value).then((response) => {
      callback(response.body);
      dispatch({
        type: 'LOGIN',
        payload: response.body
      });
    }).catch((error) => {
      alert(false)
    });
  };
}

export function getList(callback) {
  return function (dispatch) {
    get('event/list', {}).then((response) => {
      callback(response.body);
      dispatch({
        type: 'LIST',
        payload: response.body
      });
    }).catch((error) => {
      alert(false)
    });
  };
}

export function getDetails(event_id, callback) {
  return function (dispatch) {
    get('event/view', {event_id}).then((response) => {
      callback(response.body);
      dispatch({
        type: 'VIEW',
        payload: response.body
      });
    }).catch((error) => {
      alert(false)
    });
  };
}


function get(url, params) {
  return new Promise(function (success, failed) {
    request.get('http://localhost:8000/'+url)
    .query(params)
    .withCredentials()
      .end((err,response) => {
        if(err) {
          console.log('GET ::::::: err', err);
          failed(err);
          return
        }
        if(response) {
          console.log('GET ::::::: response', response);
          success(response);
        }
        })

  });
}

function post(url, data) {
  return new Promise(function (success, failed) {
    request.post('http://localhost:8000/'+url)
      .send(data) // sends a JSON post body
      .set('accept', 'json')
      .end((err,response) => {
          if(err) {
            console.log('GET ::::::: err', err);
            failed(err);
            return
          }
          if(response) {
            console.log('GET ::::::: response', response);
            success(response);
          }
        })

  });
}