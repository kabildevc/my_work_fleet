'use strict';

const Hapi=require('hapi');
var corsHeaders = require('hapi-cors-headers');
var method = require('./methods');

// Create a server with a host and port
// const server=Hapi.server({
//     host:'localhost',
//     port:8000
// });

const server = new Hapi.Server();

server.connection({
    port: 8000
});


const loginData = {
    username : 'demo',
    password : 'demo123'
}
// Add the route
server.route([{
    method:'POST',
    path:'/login',
    handler:function(request,h) {
        let params = request.payload;
        return Promise.resolve(method.login(params))
        .then((resp)=> {
            return h(resp)
        }).catch(function(err){
            return h({error : true})
        })
    }
},{
    method:'GET',
    path:'/event/list',
    handler:function(request,h) {
        let params = request.query;
        
        return Promise.resolve(method.getList())
        .then((resp)=> {
            return h(resp)
        }).catch(function(err){
            return h({error : true})
        })
    }
},{
    method:'GET',
    path:'/event/view',
    handler:function(request,h) {
        let params = request.query;
        
        return Promise.resolve(method.getDetails(params))
        .then((resp)=> {
            return h(resp)
        }).catch(function(err){
            return h({error : true})
        })
    }
},{
    method:'GET',
    path:'/ping',
    handler:function(request,h) {
        return { message : 'pong'};
    }
}]);

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
server.ext('onPreResponse', corsHeaders);