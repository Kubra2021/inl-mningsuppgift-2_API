import ExerciseType from "../models/exerciseTypeModel.js";
export default function exerciseType(server, mongoose) {

  
  server.get("/api/exerciseType", async (req, res) => {
    try {
      const exerciseTypeData = await ExerciseType.find();
      res.json(exerciseTypeData);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  
  server.post("/api/exerciseType", async (req, res) => {
    try {
    const exerciseType = new ExerciseType ({
      userId: req.body.userId,
      date: req.body.date,
      exerciseType: req.body.exerciseType
    });

      const newExerciseType = await exerciseType.save();
      res.status(201).json(newExerciseType);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


  server.put("/api/exerciseType:id", async (req, res) => {
    try {
      const updatedExerciseType = await ExerciseType.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedExerciseType);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  
  server.delete("/api/exerciseType:id", async (req, res) => {
    try {
      await ExerciseType.findByIdAndDelete(req.params.id);
      res.json({ message: ' ExerciseType data deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

}
