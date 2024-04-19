import express from "express"
import mongoose from "mongoose"

const server = express()
const port = 3000

server.use(express.json())

mongoose.connect("mongodb+srv://kubercin:kubra12345@cluster0.61vmlnw.mongodb.net/")

const usersSchema = new mongoose.Schema({
  username: String  
});

const User = mongoose.model('users', usersSchema);

server.get('/api/users', async (req, res) => {
  res.json(await User.find()); 
});

server.listen(port, () => console.log(`Listening on port http://localhost:${port}`))