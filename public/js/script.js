const messageOne= document.querySelector('#message-1')
const messageTwo= document.querySelector('#message-2')


document.querySelector('#msg').addEventListener('submit',(e)=>{
    e.preventDefault()
    const scripture=e.target.elements.msg1.value
   

   fetch('http://localhost:3000/Message?msg1='+scripture).then((response)=>{
    return response.json().then((data)=>{
        

        if(!scripture){
            
            messageOne.textContent= data.error
            messageTwo.textContent=undefined
        }
        else if(data[1]===undefined){
            
            messageOne.textContent= "Error: Enter an appropriate scripture" 
            messageTwo.textContent=undefined
                     
        }else{
            console.log(data[1])
            messageOne.textContent= data[0]
            messageTwo.textContent=data[1]
        }
    })
})   
    
})

