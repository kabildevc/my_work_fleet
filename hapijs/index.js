'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

const loginData = {
    username : 'kabil',
    password : 'dev'
}
// Add the route
server.route([{
    method:'POST',
    path:'/login',
    handler:function(request,h) {
        let params = request.payload;
        if(loginData.username != params.username) {
            return { message : 'Invalid username', error : true};
        }
        if(loginData.password != params.password) {
            return { message : 'Invalid password', error : true};
        }
        return { message : 'hello world', error : false};
    }
},{
    method:'GET',
    path:'/event/list',
    handler:function(request,h) {
        let params = request.payload;
        
        return { data : [{
            eventId : 1,
            eventName : 'Datat',
            eventCategory : 'Test'
        },{
            eventId : 2,
            eventName : 'Test',
            eventCategory : 'Data'
        }]};
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