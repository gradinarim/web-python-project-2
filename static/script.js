document.addEventListener('DOMContentLoaded', () => {
    
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);
    
    socket.on('connect', () => {
    
        document.querySelector('#form').onsubmit = () => {
            const message = document.querySelector('#message').value;
            socket.emit('submit message', {'message': message});
            
            return false;
        };
        
    });
    
    socket.on('announce message', data => {
        const div = document.createElement('div');
        div.innerHTML = `${data.message}`;
        document.querySelector('#messages').append(div);
    });
    
});


