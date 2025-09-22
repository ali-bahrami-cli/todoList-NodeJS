const {getIndex,saveIndex} = require('../utils/todos')

class Todo{
    constructor(id, text, completed=false){
        this.id = id,
        this.text = text,
        this.completed = completed
    }

    create(callback){

        getIndex(get => {
            let newDatas = []
            if (get) {
                try{
                    newDatas = get
                }catch(error){
                    callback(error)
                }
            }
            newDatas.push(this)
            saveIndex(newDatas,err=>{
                if (err) return callback(err)
                callback (null)
            })
        })
    }

    static read(callback){
        getIndex(get => callback(get))
    }

    static delete (id,callback){
        getIndex(get => {
            const newTodos = get.filter(t => t.id != id)
            saveIndex(newTodos,err=>{
                if (err) return callback(err)
                callback (null)
            })
        })
    }

    static update (id,callback){
        getIndex(get => {
            const selected = get.findIndex(t => t.id == id)
            get[selected].completed ? get[selected].completed = false : get[selected].completed = true
            saveIndex (get, err=>{
                if (err) return callback(err)
                callback (null)
            })
        })
    }

    static delAll (callback){
        saveIndex('',err=>{
            if (err) return callback(err)
            callback (null)
        })
    }
}
module.exports = Todo