const express= require('express')
const path= require('path')
const hbs= require('hbs')
const app= express()
const read=require('./utils/bible')


//Defining paths

const viewsPath= path.join(__dirname,'../templates/views')
const partialsPath= path.join(__dirname, '../templates/partials')
const publicDirectoryPath = path.join(__dirname, '../public')
//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))
app.get('/',(req,res)=>{
    
    res.render('index',{
        title:'GOD SAVES',
        name:'Kwaku Fosu'
    })
        
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'ABOUT ME',
        name:'Kwaku Fosu'
    })
    
})
app.get('/message',(req,res)=>{
    if(!req.query.msg1){
         res.send({
            error:'You must provide a scripture'
        })
    }else{
        res.send([req.query.msg1,read(req.query.msg1)])
    }    
})
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Kwaku Fosu',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000)