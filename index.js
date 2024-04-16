import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({result:'Hello World!'})
})
app.listen(3000, () => {
    console.log('Server started on port 3000')
})