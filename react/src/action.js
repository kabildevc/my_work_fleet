


export function login(username, password,callback) {
  return function (dispatch) {
    let value = {
      username,
      password
    }
    Client.get('url', values, true).then((response) => {
      // callBack(response.data);
      dispatch({
        type: 'LOGIN',
        payload: response
      });
    }).catch((error) => {
      alert(false)
    });
  };
}
