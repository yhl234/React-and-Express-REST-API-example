const express = require('express');
const mongoose = require('mongoose');
const Order = require('../models/order');

const router = express.Router();

// GET: /api/orders
// To load all posts
router.get('/', (req, res, next) => {
  Order.find((err, orders) => {
    if (err) {
      console.log(err);
      return res.json(err).status(400);
    }
    return res.json(orders).status(200);
  });
});

// GET: /api/orders/12345
// To populate edit form
router.get('/:_id', (req, res, next) => {
  Order.findById({ _id: req.params._id }, (err, order) => {
    if (err) {
      console.log(err);
      return res.json(err).status(400);
    }
    return res.json(order).status(200);
  });
});

// GET: /api/orders/search/234423523
// search by phone number
router.get('/search/:phone', (req, res, next) => {
  Order.find({ phone: req.params.phone }, (err, order) => {
    if (err) {
      console.log(err);
      return res.json(err).status(400);
    }
    return res.json(order).status(200);
  });
});

// POST: /api/orders
router.post('/add', (req, res, next) => {
  // use order model to save new order
  const { name, phone, time, numOfPeople, email } = req.body;
  const newOrder = new Order({
    name,
    phone,
    time,
    numOfPeople,
    email,
  });
  newOrder
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'Order created successfully!',
        order: result,
      });
    })
    .catch(err => {
      console.log(err);
    });
});

// DELETE: /api/orders/12345
router.delete('/delete/:_id', (req, res, next) => {
  Order.remove({ _id: req.params._id }, (err, order) => {
    if (err) {
      console.log(err);
      return res.json(err).status(501);
    }
    return res.json(order).status(204);
  });
});

// UPDATE: /api/orders/update/12345
router.put('/update/:_id', (req, res, next) => {
  const { name, phone, time, numOfPeople, email } = req.body;
  Order.findByIdAndUpdate(
    { _id: req.params._id },
    {
      name,
      phone,
      time,
      numOfPeople,
      email,
    },
    null,
    (err, order) => {
      if (err) {
        console.log(err);
        return res.json(err).status(501);
      }
      return res.json(order).status(202);
    }
  );
});

module.exports = router;
