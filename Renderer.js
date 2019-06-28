class Renderer {

    _renderUsers(users) {
        $(".user-container").html(`<img id='profile-pic' src=${users.data.mainUser.picture}>
        <div class='user-info'>${users.data.mainUser.name}<br>
         ${users.data.mainUser.city} ,${users.data.mainUser.state}</div>`)
    }


    _renderFriends(users) {
        $('.friends-container').html(`<div class='user-friends'>
        ${users.data.friends.map(i=>i.name).join('<br><br>')}</div>`)
    }

    _renderQuote(quoteInfo) {
      $('.quote-container').html(`<div id='quote-template'>Favorite quote: <br>
       ${quoteInfo.quote.quote}  <br> - ${quoteInfo.quote.author}</div>`)
    }

    _renderPokemon(pokemonInfo) {
    $('.pokemon-container').html(`<div id="pokemon-text">Favorite Pokemon: ${pokemonInfo.pokemon}</div>`)
    }

    _renderMeat(meatText) {
    $('.meat-container').html(`<div>${meatText.about}</div>`)
    }

    render(data){
      this._renderUsers(data)  
      this._renderFriends(data)
      this._renderQuote(data)
      this._renderPokemon(data)
      this._renderMeat(data)
    }

}


