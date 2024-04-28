import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import Calories from './models/caloriesModel.js';
import Distance from './models/distanceModel.js';
import ExerciseType from './models/exerciseTypeModel.js';
import PersonalGoal from './models/personalGoalModel.js';
import Steps from './models/stepsModel.js';
import User from './models/userModel.js';

mongoose.connect("mongodb+srv://kubercin:kubra12345@cluster0.61vmlnw.mongodb.net/PVT23");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const seedDB = async () => {
  try {
    
    await Promise.all([
      Calories.deleteMany({}),
      Distance.deleteMany({}),
      ExerciseType.deleteMany({}),
      PersonalGoal.deleteMany({}),
      Steps.deleteMany({}),
      User.deleteMany({})
    ]);

    
    const users = [];
    for (let i = 0; i < 100; i++) {
      const newUser = new User({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      });
      users.push(newUser);
    }
    await User.insertMany(users);

    
    const allData = [];
    const caloriesData = [];
    const distanceData = [];
    const exerciseTypeData = [];
    const personalGoalData = [];
    const stepsData = [];

    for (let i = 0; i < 100; i++) {
      const date = faker.date.recent();
      const userId = faker.helpers.arrayElement(users)._id;

      const calories = faker.number.int({ min: 100, max: 1000 });
      const distance = faker.number.int({ min: 1, max: 10 });
      const exerciseType = faker.helpers.arrayElement(['Running', 'Cycling', 'Swimming', 'Walking', 'Yoga']);
      const personalGoal = faker.lorem.words(5);
      const steps = faker.number.int({ min: 1000, max: 10000 });

      allData.push({ userId, date, calories, distance, exerciseType, personalGoal, steps });

      caloriesData.push({ userId, date, calories });
      distanceData.push({ userId, date, distance });
      exerciseTypeData.push({ userId, date, exerciseType });
      personalGoalData.push({ userId, date, personalGoal });
      stepsData.push({ userId, date, steps });
    }

    
    await Promise.all([
      Calories.insertMany(caloriesData),
      Distance.insertMany(distanceData),
      ExerciseType.insertMany(exerciseTypeData),
      PersonalGoal.insertMany(personalGoalData),
      Steps.insertMany(stepsData)
    ]);

    console.log('Database seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

 seedDB();





