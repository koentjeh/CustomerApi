'use strict';
const express = require( 'express' );
const customerRoutes = require( './customer.route' );
const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// router.use('/auth', authRoutes);

// mount user routes at /users
router.use('/customer', customerRoutes);

module.exports = router;