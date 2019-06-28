//This is the class that will manage all your APIs

class APIManager {

    constructor() {
        this.data = {}
    }

    randomRange=function(min, max) {
        return ~~(Math.random() * (max - min + 1)) + min
      }


    loadData() {

        let self = this.data

        $.ajax({  
            url: 'https://randomuser.me/api/?results=7',
            dataType: 'json',
            success: function (result) {
                self.data = {
                    mainUser: {
                        name: `${result.results[0].name.first} ${result.results[0].name.last}`,
                        city: `${result.results[0].location.city}`,
                        state: `${result.results[0].location.state}`,
                        picture: `${result.results[0].picture.medium}`,
                    },
                    friends: []
                }

                for (let i = 1; i < 7; i++) {
                    self.data.friends[i - 1] = { name: `${result.results[i].name.first} ${result.results[i].name.last}` }
                }
            }
        })

        self = this.data

        $.ajax({
            url: 'https://quotes.rest/qod',
            dataType: 'json',
            success: function(result) {
              self.quote ={quote: result.contents.quotes[0].quote,
                author: result.contents.quotes[0].author}
            
            }
          })


          self = this.data

          $.ajax({

              url: `https://pokeapi.co/api/v2/ability/?limit=20&offset=${this.randomRange(1,100)}`,
              dataType: 'json',
              success: function(result) {
                self.pokemon = result.results[0].name
              
              }
            })


            self = this.data

          $.ajax({
              url: 'https://baconipsum.com/api/?type=meat-and-filler',
              dataType: 'json',
              success: function(result) {
                self.about = result[0]
             
            
              
              }
            })


    }

}
let x=new APIManager
x.loadData()
console.log(x.data)