const router = require('express').Router()
let baseUrl = "http://universities.hipolabs.com/search?country"
let axios = require("axios")

router.get("/myserver/customers", function (req, res) {
    axios.get(baseUrl + "/customers").then(function (response) {
        // console.log(response)
        res.send(response.data)
    })
        .catch(function (error) {
            if (error.response) {
                let { status, statusText } = error.response
                console.log(status, statusText)
                res.status(status).send(statusText)
            } else res.status(404).send(error.message)
        })
})
module.exports = router