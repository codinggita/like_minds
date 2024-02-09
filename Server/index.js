const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require("dotenv").config();
const port = process.env.PORT;



app.use(cors());

app.use(express.json());
app.listen(port,()=>{
  console.log(`Server listening at http://localhost:${port}`);
})

// Middleware to parse JSON bodies
app.use(bodyParser.json());

const mongoose = require("mongoose");
const uri = "mongodb+srv://user:user123@cluster0.ehcgize.mongodb.net/LikeMinds";
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

const communitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  members: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  moderators: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
});
// Create model for Community
const Community = mongoose.model('Community', communitySchema);
module.exports = Community;

//Api requests for communities ********************************************

// GET all communities
app.get('/communities', async (req, res) => {
  try {
    const communities = await Community.find();
    res.json(communities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one community
app.get('/communities/:id', getCommunity, (req, res) => {
  res.json(res.community);
});

// POST create a new community
app.post('/communities/createCommunity', async (req, res) => {
  const community = new Community({
    name: req.body.name,
    description: req.body.description,
    members: req.body.members,
    createdAt: req.body.createdAt,
    createdBy: req.body.createdBy,
    moderators: req.body.moderators,
    posts: req.body.posts
  });
  try {
    const newCommunity = await community.save();
    res.status(201).json("Community created successfully");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update a community
app.put('/communities/:id', getCommunity, async (req, res) => {
  try {
    await res.community.updateOne(req.body);
    res.json({ message: 'Community updated' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH update a community
app.patch('/communities/:id', getCommunity, async (req, res) => {
  if (req.body.name != null) {
    res.community.name = req.body.name;
  }
  if (req.body.description != null) {
    res.community.description = req.body.description;
  }
  if (req.body.members != null) {
    res.community.members = req.body.members;
  }
  try {
    const updatedCommunity = await res.community.save();
    res.json("updated Community");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


app.delete('/communities/:id', getCommunity, async (req, res) => {
  try {
    await Community.deleteOne({ _id: res.community._id });
    res.json({ message: 'Community deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.delete('/communities/:name', getCommunity,async (req, res) => {
  const communityName = req.params.name;
  try {
    const deletedCommunity = await Community.deleteOne({ name: res.community.name });
    if (deletedCommunity.deletedCount === 0) {
      return res.status(404).json({ message: 'Community not found' });
    }
    res.json({ message: 'Community deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



async function getCommunity(req, res, next) {
  let community;
  try {
    community = await Community.findById(req.params.id);
    if (community == null) {
      return res.status(404).json({ message: 'Community not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.community = community;
  next();
}


module.exports = app;


// MongoDB schema for a event
// Define schema for Event
const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

// Create model for Event
const Event = mongoose.model('Event', eventSchema);
module.exports = Event;



//Api requests for events*****************************************

app.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one event
app.get('/events/:id', getEvent, (req, res) => {
  res.json(res.event);
});

// POST create a new event
app.post('/events/createevent', async (req, res) => {
  const event = new Event({
    name: req.body.name,
    date: req.body.date,
    location: req.body.location,
    description: req.body.description,
    organizer: req.body.organizer,
    attendees: req.body.attendees
  });

  try {
    const newEvent = await event.save();
    res.status(201).json("event added");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update an event
app.put('/events/:id', getEvent, async (req, res) => {
  try {
    await res.event.updateOne(req.body);
    res.json({ message: 'Event updated' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH update an event
app.patch('/events/:id', getEvent, async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.patch('/events/:id', getEvent, async (req, res) => {
  if (req.body.name != null) {
    res.event.name = req.body.name;
  }
  if (req.body.description != null) {
    res.event.description = req.body.description;
  }
  if (req.body.date != null) {
    res.event.date = req.body.date;
  }
  try {
    const updatedevent = await res.community.save();
    res.json("updated Event");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// PATCH update a community
// app.patch('/communities/:id', getCommunity, async (req, res) => {
//   if (req.body.name != null) {
//     res.community.name = req.body.name;
//   }
//   if (req.body.description != null) {
//     res.community.description = req.body.description;
//   }
//   if (req.body.members != null) {
//     res.community.members = req.body.members;
//   }
//   try {
//     const updatedCommunity = await res.community.save();
//     res.json("updated Community");
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });
// DELETE an event
app.delete('/events/:id', getEvent, async (req, res) => {
  try {
    await res.event.remove();
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.delete('/events/:name', async (req, res) => {
  const eventName = req.params.name;
  try {
    const deletedEvent = await Event.deleteOne({ name: eventName });
    if (deletedEvent.deletedCount === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.delete("/events/:eventName", async (req, res) => {
  const eventName = req.params.eventName;
  try {
    const deletedEvent = await Event.findOneAndDelete({ name: eventName });
    if (!deletedEvent) {
      res.status(404).send("Event not found");
    } else {
      res.send("Event deleted");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});


async function getEvent(req, res, next) {
  try {
    const event = await Event.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.event = event;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = app;

// GET request to retrieve all events
// app.get('/events', (req, res) => {
//   res.json(events);
// });

// // GET request to retrieve a specific event by ID
// app.get('/events/:id', (req, res) => {
//   const eventId = parseInt(req.params.id);
//   const event = events.find(event => event.id === eventId);
//   if (event) {
//     res.json(event);
//   } else {
//     res.status(404).send('Event not found');
//   }
// });

// // POST request to create a new event
// app.post('/events', (req, res) => {
//   const newEvent = req.body;
//   events.push(newEvent);
//   res.status(201).send('Event created successfully');
// });

// // PUT request to update a specific event by ID
// app.put('/events/:id', (req, res) => {
//   const eventId = parseInt(req.params.id);
//   const updatedEvent = req.body;
//   const index = events.findIndex(event => event.id === eventId);
//   if (index !== -1) {
//     events[index] = { ...events[index], ...updatedEvent };
//     res.send('Event updated successfully');
//   } else {
//     res.status(404).send('Event not found');
//   }
// });

// // PATCH request to partially update a specific event by ID
// app.patch('/events/:id', (req, res) => {
//   const eventId = parseInt(req.params.id);
//   const partialEvent = req.body;
//   const index = events.findIndex(event => event.id === eventId);
//   if (index !== -1) {
//     events[index] = { ...events[index], ...partialEvent };
//     res.send('Event partially updated successfully');
//   } else {
//     res.status(404).send('Event not found');
//   }
// });

// // DELETE request to delete a specific event by ID
// app.delete('/events/:id', (req, res) => {
//   const eventId = parseInt(req.params.id);
//   const index = events.findIndex(event => event.id === eventId);
//   if (index !== -1) {
//     events.splice(index, 1);
//     res.send('Event deleted successfully');
//   } else {
//     res.status(404).send('Event not found');
//   }
// });

// // Start the server
// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });

//api requests for communities
// GET request to retrieve all communities
// app.get("/communities",async(req,res)=>{
//   try {
//     const doc = await Community.find();
//     res.json(doc);
//   } catch (error) {
//     res.status(500).send(error);
//   }
//   });
// // GET request to retrieve a specific community by ID
// app.get("/communities/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const doc = await Community.findById(id);
//     if (doc) {
//       res.json(doc);
//     } else {
//       res.status(404).send('User not found');
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// app.post("/:category/:subcat/add-product", async (req, res) => {
//   const category = req.params.category;
//   const subcat = req.params.subcat;
//   const newProduct = new Products({ ...req.body, category: category, sub_cat: subcat });
//   try {
//     await newProduct.save();
//     res.send("Product added");
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// app.post("/communities/add", async (req, res) => {
//   const newCommunity = new Community({ ...req.body});
//   try {
//     await newCommunity.save();
//     res.send("Community created successfully");
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// POST request to create a new community
// app.post('/communities', (req, res) => {
//   const newCommunity = req.body;
//   Community.push(newCommunity);
//   res.status(201).send('Community created successfully');
// });

// PUT request to update a specific community by ID
// app.put('/communities/:id', (req, res) => {
//   const communityId = parseInt(req.params.id);
//   const updatedCommunity = req.body;
//   const index = Community.findIndex(community => community.id === communityId);
//   if (index !== -1) {
//     Community[index] = { ...Community[index], ...updatedCommunity };
//     res.send('Community updated successfully');
//   } else {
//     res.status(404).send('Community not found');
//   }
// });

// app.post("/communities/add", async (req, res) => {
//   const newCommunity = new Community({ ...req.body});
//   try {
//     await newCommunity.save();
//     res.send("Community created successfully");
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// PATCH request to partially update a specific community by ID
// app.patch('/communities/:id', (req, res) => {
//   const communityId = parseInt(req.params.id);
//   const partialCommunity = req.body;
//   const index = Community.findIndex(community => community.id === communityId);
//   if (index !== -1) {
//     Community[index] = { ...Community[index], ...partialCommunity };
//     res.send('Community partially updated successfully');
//   } else {
//     res.status(404).send('Community not found');
//   }
// });
// DELETE a community
// app.delete('/communities/:id', getCommunity, async (req, res) => {
//   try {
//     await res.community.remove();
//     res.json({ message: 'Community deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// app.delete('/communities/:name', (req, res) => {
//   const communityId = parseInt(req.params.name);
//   const index = Community.findIndex(community => community.id === communityId);
//   if (index !== -1) {
//     Community.splice(index, 1);
//     res.send('Community deleted successfully');
//   } else {
//     res.status(404).send('Community not found');
//   }
// });
// DELETE request to delete a specific community by ID
// app.delete('/communities/:id', (req, res) => {
//   const communityId = parseInt(req.params.id);
//   const index = Community.findIndex(community => community.id === communityId);
//   if (index !== -1) {
//     Community.splice(index, 1);
//     res.send('Community deleted successfully');
//   } else {
//     res.status(404).send('Community not found');
//   }
// });

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



// MongoDB schema for a community
// const mongoose = require('mongoose');

// Define schema for Community



//api requests for events
// const express = require('express');
// const bodyParser = require('body-parser');


// // Middleware to parse JSON bodies
// app.use(bodyParser.json());

// Example data - Events
// let events = [
//   { id: 1, name: 'Tech Conference', date: '2022-10-15', location: 'San Francisco' },
//   { id: 2, name: 'Music Festival', date: '2022-09-25', location: 'New York' },
//   { id: 3, name: 'Art Exhibition', date: '2022-11-05', location: 'Los Angeles' }
// ];















