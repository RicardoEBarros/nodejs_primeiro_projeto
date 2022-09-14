const express = require('express')
const { randomUUID } = require('crypto')

const app      = express()
const products = []

/* define a middleware */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* post request */
app.post('/products', (request, response) => {
    
    const { name, price } = request.body
    
    const product = {
        id: randomUUID(),
        name,
        price
    }

    products.push(product)

})

app.get('/products', (request, response) => {
    return response.json(products)
})



app.listen(4002, () => console.log('Servidor está rodando na porta 4002'))