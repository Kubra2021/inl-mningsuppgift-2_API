import PersonalGoal from "../models/personalGoalModel.js";
export default function personalGoal(server, mongoose) {

  
  server.get("/api/personalGoal", async (req, res) => {
    try {
      const personalGoalData = await PersonalGoal.find();
      res.json(personalGoalData);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  
  server.post("/api/personalGoal", async (req, res) => {
    try {
    const personalGoal = new PersonalGoal({
      userId: req.body.userId,
      date: req.body.date,
      personalGoal: req.body.personalGoal
    });

     const newPersonalGoal = await personalGoal.save();
      res.status(201).json(newPersonalGoal);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  
  server.put("/api/personalGoal/:id", async (req, res) => {
    try {
      const updatedPersonalGoal = await Fitness.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedPersonalGoal);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  
  server.delete("/api/personalGoal/:id", async (req, res) => {
    try {
      await PersonalGoal.findByIdAndDelete(req.params.id);
      res.json({ message: 'PersonalGoal data deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

}
