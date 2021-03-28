fetch ("https://randomuser.me/api/?results=6")
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        
        console.log(datos.data);
        
        let users = datos.data;
        let lista = document.querySelector (".cuerpo");

        for (let i=1; i<users.length; i++){
            lista.innerHTML += '<ul class="tarjetas">' + '<li class="tarjeta">' + '<ul class="datos">'+'<li class="profile">' + '<img class="profilefoto" src="' + users[i].picture.medium + '">' + '</li>' + '<li>' + users[i].name + '</li>' + '</li>' + '</ul>' + '</li>' + '</ul>' ;
        }

    })
    .catch(function(error){
        console.log(error);
    })