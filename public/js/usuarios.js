$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
});

fetch (user)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        
        console.log(datos.data);
        
        let users = datos.data;
        let lista = document.querySelector (".datos");

        for (let i=1; i<users.length; i++){
            lista.innerHTML += '<li class="profile">' + '<img class="fotoGenero" src="' + users[i].picture.medium + '">' + '</div>' + '<h3 class="genreTitle">' + users[i].name + '</h3>' + '</li>' ;
        }

    })
    .catch(function(error){
        console.log(error);
    })