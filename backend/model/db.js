const { Pool } = require('pg');

const connectionString = 'postgresql://PlanAhead_owner:nNHbcjqJ0Z1E@ep-rough-shape-a1pbx0mo-pooler.ap-southeast-1.aws.neon.tech/PlanAhead?sslmode=require';

const pool = new Pool({
  connectionString: connectionString,
});

module.exports = pool;

