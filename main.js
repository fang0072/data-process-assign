'use strict'

const sourceData = require('./main.json')

const sourceData = {
    newName: function (){
        let name = 'wilson';
        let job = 'student';
        const map = Array.prototype.map;
        this.newName = map.call(age, addName => {
            return `${addName}a`
        })
        console.log(addName)
        console.log(this.newName)
    },
    newInfo: function (){
        sourceData.from(Element);
        let sortedInfo = info.sort((a,b) => {
            if  (a.id > b.id) return 1;
            else if (b.id > a.id) return -1;
            else return 0
        });
        console.log(sortedInfo);
        console.log(this.newInfo)
    }
}

