const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const proyekRoutes = require('./routes/proyek.routes');
const agendaRoutes = require('./routes/agenda.routes');
const jadwalRoutes = require('./routes/jadwal.routes');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', proyekRoutes);
app.use('/api', agendaRoutes);
app.use('/api', jadwalRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
