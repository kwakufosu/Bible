const verses = require('kjv/json/verses-1769.json')

 const read=(scripture)=>{
  try{
    return (verses[scripture])
  }catch(e){
    throw new Error('Enter an appropriate Scripture')
  }
   
}

module.exports= read
  
  