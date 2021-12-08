const express = require("express")
const app = express()
const engine = require("express-handlebars").engine
const port = 5000
const translations = require("./translations.json")
console.log(translations);

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


app.get('/', (req,res) => {
    res.send(`home`)
})



app.get('/:lang?', (req, res) => {
    const {lang} = req.params

        res.render(lang, {
            pageTitle: translations[lang].pageTitle,
            title : translations[lang].title,
            image : translations[lang].image
        })
    
})

app.listen(port, () => {
    console.log(`Serveur is running at port ${port}`);
})

