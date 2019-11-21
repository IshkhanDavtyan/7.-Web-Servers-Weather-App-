const path = require('path')

const express = require('express');
const hbs = require('hbs')

const app = express();

const publicDirPath = path.join(__dirname,'../public')
const viewsPath =(path.join(__dirname,'../templates/views'))

const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')

app.set('views', viewsPath)

hbs.registerPartials(partialsPath)


app.use(express.static(publicDirPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Ishkhan'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me ',
        name:'Vazgen'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        name:'Ishkhan',
        title:'Help me',
        name:'Bardugimeos'
    })
})


app.get('/weather',(req,res)=>{
    res.send('<h1>Weather</h1>')
})

app.get('/help/*',(req,res)=>{
    res.render('help404',{
        name:'Babo'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        name:'Vrdo'
    })
})


app.listen(3000,()=>{
    console.log('Server started!!!')
})