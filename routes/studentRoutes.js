var express = require('express');
const studentModel = require('../models/student.model');
var studentRoutes = express.Router();

studentRoutes.route('/').get((req, resp,next) => {
    studentModel.find((err, data) => {
        if (err) {
          return next(err)
        } else {
            resp.json(data)
        }
    })
})

studentRoutes.route('/student/:id').get((req, resp, next) => {
    studentModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            resp.json(data)
        }
    })
})

studentRoutes.route('/add-student').post((req, resp, next) => {
    studentModel.create(req.body, (error,data) => {
        if (error) {
            return next(error)
        } else {
            resp.json(data)
        }
    })
})

studentRoutes.route('/student/:id').delete((req, resp) => {
    studentModel.findByIdAndRemove(req.params.id, (error,data) => {
        if (error) {
            return next(error);
        } else {
            resp.status(200).json({
                msg: data
            })
        }
    })
})

studentRoutes.route('/student/:id').put((req, resp) => {
    studentModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            resp.json(data);
        }
    })
})


module.exports = studentRoutes;