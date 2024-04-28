import User from '../models/userModel.js';

export default function user(server, mongoose) {

  
  server.get('/api/users', async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      const results = {};

      results.next = {
        page: page + 1,
        limit: limit
      };

      results.previous = {
        page: page - 1,
        limit: limit
      };

      if (endIndex < (await User.countDocuments().exec())) {
        results.next = null;
      }

      if (startIndex > 0) {
        results.previous = null;
      }

      results.results = await User.find().limit(limit).skip(startIndex).exec();
      res.json(results);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  
  server.post('/api/users', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const newUser = new User({ username, email, password });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });



  
  server.put('/api/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { username, email, password } = req.body;
      const updatedUser = await User.findByIdAndUpdate(id, { username, email, password }, { new: true });
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  
  server.delete('/api/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
}



