const mongoose = require('mongoose')// importa o mongoose

const Universities = mongoose.model('Universities', { // informa os tipos de dados 
    domains: String,
    alpha_two_code: String,
    country: String,
    web_pages: String,
    name: String,
    state_province: String,
})

module.exports = Universities // exporta o modulo pessoa