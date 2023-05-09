var fetApi = 'https://64598c608badff578e0fbc61.mockapi.io/apitable'
fetch(fetApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(post) {
        console.log(post)
    })