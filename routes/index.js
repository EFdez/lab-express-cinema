const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {

    Movie.find()
        .then(allMovies => res.render('movies', { allMovies }))
        .catch(err => console.log("Error en la BBDD", err))
})

// router.get('/movie/:id', (req, res, next) => { //ASÍ SÍ SALE.
//     const id = req.params.id
//     Movie.findById('5ef4f26fc74ce91f10c99e68')
//         .then(theMovie => (res.render('movie'), theMovie))
// })

router.get('/movie/:id', (req, res, next) => { //ASÍ SÍ SALE.
    const id = req.params.id
    Movie.findOne({ id: "id" })
        //.then(theMovie => (res.send(id), theMovie))
        .then(theMovie => res.render('movie', theMovie))
})


// router.get('/movie/:id', (req, res) => {
//     const id = req.params.id
//     id.toString()
//     Movie.findById(id) //PROBLEMA CON EL ID
//         //.then(res.send("el id es", id))
//         .then(theMovie => res.render('movies/movie', theMovie))
//         .catch(err => console.log("Error en la movie DETALLES", err))
// })

//5ef4f26fc74ce91f10c99e68

module.exports = router;
