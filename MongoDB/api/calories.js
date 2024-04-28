import Calories from "../models/caloriesModel.js";
export default function calories(server, mongoose) {
  
  
  server.get("/api/calories", async (req, res) => {
    try {
      const caloriesData = await Calories.find();
      res.json(caloriesData);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  
  server.post("/api/calories", async (req, res) => {
    try {
      const calories = new Calories({
        userId: req.body.userId,
        date: req.body.date,
        calories: req.body.calories
      });

      const newCalories = await calories.save();
      res.status(201).json(newCalories);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });



  server.put("/api/calories/:id", async (req, res) => {
    try {
      const updatedCalories = await Calories.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedCalories);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  server.delete("/api/calories/:id", async (req, res) => {
    try {
      await Calories.findByIdAndDelete(req.params.id);
      res.json({ message: 'Calories data deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

}




