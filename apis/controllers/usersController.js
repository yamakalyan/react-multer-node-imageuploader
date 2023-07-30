const express = require("express");
const user = express.Router();
const database = require("../database/Database");
const multer = require("multer");
const path = require("path");

// USER ID
user.get("/list", async (req, res) => {
  try {
  
      const userCheck = `SELECT * FROM users `;
      database.query(userCheck, (err, results) => {
        if (err) {
          res.status(400).json({
            success: false,
            message: "HavingIssues",
            err,
          });
        } else {
          if ((results.length == 0) | "") {
            res.status(400).json({
              success: false,
              message: "No user found",
            });
          } else {
            res.status(200).json({
              success: true,
              message: "Successfully found user",
              results,
            });
            // res.status(200).send({
            //   success: true,
            //   message: "Successfully found user",
            //   results,
            // });
          }
        }
      });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
});


user.get("/by/:id", async (req, res) => {
  try {
  
      const userCheck = `SELECT * FROM users WHERE user_id='${req.params.id}'`;
      database.query(userCheck, (err, results) => {
        if (err) {
          res.status(400).json({
            success: false,
            message: "HavingIssues",
            err,
          });
        } else {
          if ((results.length == 0) | "") {
            res.status(400).json({
              success: false,
              message: "No user found",
            });
          } else {
            res.status(200).json({
              success: true,
              message: "Successfully found user",
              results,
            });
            // res.status(200).send({
            //   success: true,
            //   message: "Successfully found user",
            //   results,
            // });
          }
        }
      });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
});

// UPLOAD RESUME USING MULTER
const filePath = multer.diskStorage({
  destination: (req, file, cb)=> {
    cb(null, "public/resumes");
  },
  filename: (req, file, cb)=> {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: filePath });
// USER CREATE
user.post("/create", upload.single("resume"), (req, res) => {
  try {

    const resume = req.file.filename;
    console.log(resume)

    const createUser = `INSERT INTO users(user_id, user_name, user_resume) VALUES ('${Math.floor(1000 * Math.random() * 9999)}',
       '${req.body.name}', '${resume}')`;
      database.query(createUser, (err, results) => {
        if (err) {
          res.status(400).json({
            success: false,
            message: "HavingIssues",
            err,
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Successful",
            results,
          });
        }
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
});


module.exports = user;
