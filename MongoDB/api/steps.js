import Steps from "../models/stepsModel.js";
export default function steps(server, mongoose) {


  server.get("/api/steps", async (req, res) => {
  try {
    const stepsData = await Steps.find();
    res.json(stepsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ett fel inträffade", error });
  }
});


  server.post("/api/steps", async (req, res) => {
    try {
  const steps = new Steps({
    userId: req.body.userId,
    date: req.body.date,
    steps: req.body.steps
  });

 
    const newSteps = await steps.save();
    res.status(201).json(newSteps);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


  server.put("/api/steps/:id", async (req, res) => {
  try {
    const updatedSteps = await Fitness.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSteps);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


  server.delete("/api/steps/:id", async (req, res) => {
  try {
    await Steps.findByIdAndDelete(req.params.id);
    res.json({ message: 'Steps data deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

}