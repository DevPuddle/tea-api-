const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use('cors')

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'Yo mammas house',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'delicious'
    }
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/api', (request, response) =>{
    response.json(tea)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT} Better go catch it!`)
})