$('.render').on('click',function(){
apiManager.loadData()
renderer.render(apiManager.data)
})


const apiManager = new APIManager()
const renderer = new Renderer()


