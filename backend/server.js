// index.js (Backend)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRouter = require('./routes/api');
const User = require('./models/user');
const messageRoutes = require('./routes/messageRoutes');
const roomRoutes = require('./routes/roomRoutes');
const Message = require('./models/message');


const { GoogleGenerativeAI } = require("@google/generative-ai");





const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://sanket:%23iitbombaycseho@cluster0.nol82qn.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes
app.use('/api/messages', messageRoutes);

app.use('/api/rooms', roomRoutes);





app.use('/api', apiRouter);
app.get('/pending/get', async (req, res) => {
    try {
        const pendingUsers = await User.find({ isReviewed: 'pending' }); // Fetch users with 'pending' review status
        res.json(pendingUsers); // Return the users with pending review status as JSON response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
});

app.put('/api/users/:userId/status', async (req, res) => {
    try {
        // Extract userId from the request parameters
        const userId = req.params.userId;

        // Update the pending status of the user with the given userId
        await User.findByIdAndUpdate(userId, { isReviewed: req.body.isReviewed });

        // Send a success response
        res.status(200).json({ message: 'Pending status updated successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error updating pending status:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});








const server = app.listen(process.env.PORT || 3001, () => {
    console.log(`Socket.io server is running on port ${server.address().port}`);
});

const { Server } = require("socket.io");

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
});

io.on("connection", async (socket) => {
    console.log("A user connected:", socket.id);

    // Join Room
    socket.on("join_room", async (data) => {
        socket.join(data.roomId);

        try {
            const messages = await Message.find({ roomId }).exec();
            socket.emit("load_messages", messages);
        } catch (error) {
            console.error("Error loading messages:", error);
        }
    });

    // Create Room
    socket.on("create_room", async (roomName) => {
        try {
            const newRoom = await Room.create({ name: roomName });
            socket.emit("room_created", newRoom);
        } catch (error) {
            console.error("Error creating room:", error);
        }
    });

    // Send Message
    socket.on("send_msg", async (data) => {
        try {
            console.log(data, "DATA");
            const translatedText = await translateToLanguage(data.msg, data.roomId, data.language);
            const message = new Message({
                roomId: data.roomId,
                text: data.msg, // Save the original message to the database
                translatedText: translatedText // Save the translated message to the database
            });
            console.log(translatedText);
            await message.save();

            // Emit the original message to the sender
            socket.emit("receive_msg", { ...data, msg: data.msg });

            // Emit the translated message to all other users in the room except the sender
            socket.to(roomId).emit("receive_msg", { ...data, msg: translatedText });
        } catch (error) {
            console.error("Error saving message:", error);
        }
    });

    // Disconnect
    socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
    });
});


const genAI = new GoogleGenerativeAI('AIzaSyCZO5QIIO6kF1OSMV3qfH21RqYM8VGW8IM');

async function translateToLanguage(message, language) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `translate "${message}" to english`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const translated = await response.text(); // Await the response.text() promise
        console.log(translated);
        return translated;
    } catch (error) {
        console.error("Error translating text:", error);
        return null;
    }
}



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const apiRouter = require('./routes/api');
// const User = require('./models/user');
// const messageRoutes = require('./routes/messageRoutes');
// const roomRoutes = require('./routes/roomRoutes');

// const { Server } = require("socket.io");

// const app = express();
// const PORT = process.env.PORT || 5000;

// mongoose.connect('mongodb+srv://sanket:%23iitbombaycseho@cluster0.nol82qn.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });

// const server = app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// const io = new Server(server);

// io.on('connection', (socket) => {
//     console.log('A user connected');

//     socket.on('disconnect', () => {
//         console.log('User disconnected');
//     });
// });

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use('/api/messages', messageRoutes);
// app.use('/api/rooms', roomRoutes);
// app.use('/api', apiRouter);

// app.get('/pending/get', async (req, res) => {
//     try {
//         const pendingUsers = await User.find({ isReviewed: 'pending' }); // Fetch users with 'pending' review status
//         res.json(pendingUsers); // Return the users with pending review status as JSON response
//     } catch (error) {
//         res.status(500).json({ message: error.message }); // Handle errors
//     }
// });

