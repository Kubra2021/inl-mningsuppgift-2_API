import Distance from "../models/distanceModel.js";
export default function distance(server, mongoose) {


  server.get("/api/distance", async (req, res) => {
    try {
      const distanceData = await Distance.find({ userId: req.params.userId }).sort({ distance: 1 });
      res.json(distanceData);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  
  server.post("/api/distance", async (req, res) => {
    try {
      const distance = new Distance({
      userId: req.body.userId,
      date: req.body.date,
      distance: req.body.distance
    });

    
      const newDistance = await distance.save();
      res.status(201).json(newDistance);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  
  server.put("/api/distance/:id", async (req, res) => {
    try {
      const updatedDistance = await Fitness.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedDistance);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  
  server.delete("/api/distance/:id", async (req, res) => {
    try {
      await Distance.findByIdAndDelete(req.params.id);
      res.json({ message: 'Distance data deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

}
