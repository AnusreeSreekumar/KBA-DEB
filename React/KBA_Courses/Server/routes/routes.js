import { Router } from "express";
const router = Router();
import { find, findOne, create, findOneAndUpdate, findOneAndDelete } from "../models/courses";
import verifyToken from "../middleware/authMiddleware";

//To fetch all courses in the DB
router.get("/courses",verifyToken, async (req, res) => {
  const details = await find({});
  res.json(details);
});

//To fetch the details of selected course
router.get("/courses/:id",verifyToken, async (req, res) => {
  const courseId = req.params.id;
  const details = await findOne({ courseId: courseId }, { _id: 0 });
  res.json(details);
});

//To add a course to the DB
router.post("/courses",verifyToken, async (req, res) => {
  try {
    if (req.userType == "admin") {
      const data = req.body;
      const result = await create(data);
      res.status(201).json("Added course successfully");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("error while adding data");
  }
});

//To update the selected course details
router.put("/courses/:id",verifyToken, async (req, res) => {
  const data = req.body;
  const courseId = req.params.id;
  try {
    const result = await findOneAndUpdate({ courseId: courseId }, data);
    if (!result) {
      return res.status(404).send("Course not found");
    }
    res.send("Course updated successfully");
  } catch (error) {
    res.status(500).send("error updating data");
  }
});

//To delete a selected course
router.delete("/courses/:id",verifyToken, async (req, res) => {
  const courseId = req.params.id;
  try {
    const result = await findOneAndDelete({ courseId: courseId });
    if (!result) {
      return res.status(404).send("Course not found");
    }
    res.send("Course deleted successfully");
  } catch (error) {
    res.status(500).send("error deleting data");
  }
});

export default router;