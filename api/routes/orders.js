const express = require('express');
const mongoose = require('mongoose');
const Order = require('../models/order');

const router = express.Router();

// GET: /orders
router.get('/', (req, res, next) => {
  Order.find((err, orders) => {
    if (err) {
      console.log(err);
      return res.json(err).status(400);
    }
    return res.json(orders).status(200);
  });
});

// POST: /orders
router.post('/', (req, res, next) => {
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

// DELETE: /orders/12345
router.delete('/:_id', (req, res, next) => {
  Order.remove({ _id: req.params._id }, (err, order) => {
    if (err) {
      console.log(err);
      return res.json(err).status(501);
    }
    return res.json(order).status(204);
  });
});

// UPDATE: /orders/12345
router.put('/:id', (req, res, next) => {
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
