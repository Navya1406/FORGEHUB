const mongoClient=require('mongodb').mongoClient
const state={
    db:null
}
module.export.connect=function(done){
    const url='mongodb://localhost:27017'
    const dbname='job'

    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        state.db=data(dbname)
    })
    done()
}
module.exports.get=function(){
    return state.db
}