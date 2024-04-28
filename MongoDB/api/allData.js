import Calories from "../models/caloriesModel.js";
import Distance from "../models/distanceModel.js";
import Steps from "../models/stepsModel.js";
import ExerciseType from "../models/exerciseTypeModel.js";
import PersonalGoal from "../models/personalGoalModel.js";
import User from "../models/userModel.js";
import AllData from "../models/allDataModel.js";

export default function allData(server, mongoose) {
  // GET all data
  server.get("/api/allData", async (req, res) => {
    try {
      const allData = await AllData.find();
      res.json(allData);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // POST new data for a user
  server.post("/api/allData", async (req, res) => {
    try {
      const { userId, date, dataType, data } = req.body;

      // Check if the user exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Save the data to the corresponding model
      let newData;
      switch (dataType) {
        case "calories":
          newData = new Calories(data);
          break;
        case "distance":
          newData = new Distance(data);
          break;
        case "steps":
          newData = new Steps(data);
          break;
        case "exerciseType":
          newData = new ExerciseType(data);
          break;
        case "personalGoal":
          newData = new PersonalGoal(data);
          break;
        default:
          return res.status(400).json({ message: "Invalid data type" });
      }

      await newData.save();

      // Save the data to the allData collection
      const allDataEntry = new AllData({ userId, date, dataType, data: newData });
      const savedAllDataEntry = await allDataEntry.save();

      res.status(201).json(savedAllDataEntry);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // PUT update data by ID
  server.put("/api/allData/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { userId, date, dataType, data } = req.body;

      const updatedAllDataEntry = await AllData.findByIdAndUpdate(
        id,
        { userId, date, dataType, data },
        { new: true }
      );

      res.json(updatedAllDataEntry);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // DELETE data by ID
  server.delete("/api/allData/:id", async (req, res) => {
    try {
      const { id } = req.params;

      await AllData.findByIdAndDelete(id);

      res.json({ message: "Data deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
}
