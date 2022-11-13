function errorFind(str){
    try{
       let test = str.match(/ab/i);
       
       if(test === null) throw {
        message: "No Match Found",
        name: "Match error"
       }
    } catch(err){
        console.log(err)
    }

    finally{
        console.log("Try harder and solve it")
    }
}

errorFind("Imran");