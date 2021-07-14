const express = require('express');
const fs = require('fs').promises;

require('dotenv').config();

const PORT = process.env.PORT || 3003;

const app = express();

app.get('/v1/events', async (req, res) => {
  try {
    const events = await getEvents();

    res.json(events);
  } catch (ex) {
    console.error(ex);
    res.status(500).send({ error: ex.message })
  }
});

app.get('/v1/events/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const { events } = await getEvents();
    const event = events.find(event => event.id === id);

    if (event) {
      res.json({ event });
    } else {
      res.status(404).send({ message: 'no event found' });
    }
  } catch (ex) {
    console.error(ex);
    res.status(500).send({ error: ex.message });
  }
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

async function getEvents() {
  const eventsRaw = await fs.readFile(__dirname + '/data/events.json');
  return JSON.parse(eventsRaw.toString());
}