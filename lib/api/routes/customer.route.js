const express = require( 'express' );
const expressJwt = require( 'express-jwt' );
const config = require( '../../utils/config' );
const customerCrtl = require( '../controllers/customer.controller' );

const router = express.Router();

router.route('/')
  /** GET /api/customers/:customerId - Get customer */
  .get(expressJwt({ secret: config.jwtSecret }), customerCrtl.get)

  /** PUT /api/customers/:customerId - Update customer */
  .put(expressJwt({ secret: config.jwtSecret }), customerCrtl.update)

  /** POST /api/customers - Create new customer */
  .post(customerCrtl.create)

  /** DELETE /api/customers/:customerId - Delete customer */
  .delete(expressJwt({ secret: config.jwtSecret }), customerCrtl.remove);

module.exports = router;