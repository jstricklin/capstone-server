const menus = require('./data/dummyData.js')

module.exports ={

    getDummyData(){
        return menus
    },
    getDummyMenu(id){
        return menus.filter(menu => menu.id == id)[0]
    }

}
