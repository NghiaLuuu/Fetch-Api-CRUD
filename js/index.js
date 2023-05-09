var Api = 'https://64598c608badff578e0fbc61.mockapi.io/apitable'
fetch(Api)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        render(data);
    })

function render(data) {
    console.log(data);
    var table = document.getElementsByTagName('table')[0];
    for (var i = 1, row;
        (row = table.rows[i]) && i <= data.length; i++) {
        row.cells[0].innerHTML = `${data[i-1].id}`;
        row.cells[1].innerHTML = `
            <img src="${data[i-1].image}"> </img>
        `;
        row.cells[2].innerHTML = `${data[i-1].name}`;

    }

}
var deleted = document.getElementById('delete')
deleted.addEventListener('click', function() {
        row.cell[i]
    })
    // bo' tay