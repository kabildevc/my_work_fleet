var model = require('./model')

function getList() {
  return model.query("SELECT * FROM `event`", { type: model.QueryTypes.SELECT})
  .then(function(response){
   return {response}
  }).catch(function(err){
    return {error : true}
  })
}

function getDetails(params) {
  return model.query(`SELECT * FROM event WHERE event_id=${params.event_id}`, { type: model.QueryTypes.SELECT})
  .then(function(response){
    if(response) {
      return {response : response[0]}
    } else {
      return {error : true}
    }
  }).catch(function(err){
    return {error : true}
  })
}

function login(params) {
  return model.query(`SELECT * FROM user WHERE username='${params.username}' AND password='${params.password}'`, { type: model.QueryTypes.SELECT})
  .then(function(resp){
    if(resp && resp[0]) {
      return {error : false, message : 'Success'}
    } else {
      return {error : true}
    }
  }).catch(function(err){
    return {error : true}
  })
}

module.exports = {
  getList : getList,
  login : login,
  getDetails
}