$(document).ready(function() {
    let next_url = 'https://rickandmortyapi.com/api/character';
    fetchData();
    $('#nexto').click(function(e){
        e.preventDefault();
        $('#characters').html(" ");
        fetchData();
    });

    function fetchData() {
        $.ajax({
            //'https://rickandmortyapi.com/api/character'
            url: next_url, 
            dataType: 'json',
            method: 'GET',
            success: function(response) {
                // https://rickandmortyapi.com/api/character?page=2
                next_url = response.info.next; 
                response.results.forEach(function(character) {
                    let list = `
                    <div class="card img-fluid col-4" >
                        <img src="${character.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                            <p class="card-text">${character.status}</p>
                            <a href="#" id="${character.id}" class="btn btn-primary">Soon...</a>
                        </div>
                    </div>`;
                    $('#characters').append(list);
                    $(`#${character.id}`).click(function(e){
                        e.preventDefault();
                        $('#characters').html(`<img src="${character.image}" class="card-img-top" alt="...">`);
                    });

                });
            }
        });
    };
})