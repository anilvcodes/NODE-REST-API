const express = require("express");

const app = express();

app.use(express.json());

const G = 6.67430e-11;

function calculateGravity(m1, m2, distance) {
    return G * m1 * m2 / (distance ** 2);
}

// Temporary storage
let gravityRecords = [];

let nextId = 1;


// CREATE
app.post("/gravity", (req, res) => {

    const { m1, m2, distance } = req.body;

    if (
        typeof m1 !== "number" ||
        typeof m2 !== "number" ||
        typeof distance !== "number" ||
        distance <= 0
    ) {
        return res.status(400).json({
            error: "m1, m2 and distance must be valid numbers"
        });
    }

    const force = calculateGravity(
        m1,
        m2,
        distance
    );

    const record = {
        id: nextId++,
        m1,
        m2,
        distance,
        gravitationalForce: force
    };

    gravityRecords.push(record);

    res.status(201).json(record);
});


// READ - All
app.get("/gravity", (req, res) => {

    res.json(gravityRecords);
});


// READ - Single
app.get("/gravity/:id", (req, res) => {

    const id = Number(req.params.id);

    const record = gravityRecords.find(
        item => item.id === id
    );

    if (!record) {
        return res.status(404).json({
            error: "Record not found"
        });
    }

    res.json(record);
});


// UPDATE
app.put("/gravity/:id", (req, res) => {

    const id = Number(req.params.id);

    const record = gravityRecords.find(
        item => item.id === id
    );

    if (!record) {
        return res.status(404).json({
            error: "Record not found"
        });
    }

    const { m1, m2, distance } = req.body;

    if (
        typeof m1 !== "number" ||
        typeof m2 !== "number" ||
        typeof distance !== "number" ||
        distance <= 0
    ) {
        return res.status(400).json({
            error: "Invalid input"
        });
    }

    record.m1 = m1;
    record.m2 = m2;
    record.distance = distance;

    record.gravitationalForce =
        calculateGravity(m1, m2, distance);

    res.json(record);
});


// DELETE
app.delete("/gravity/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = gravityRecords.findIndex(
        item => item.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            error: "Record not found"
        });
    }

    gravityRecords.splice(index, 1);

    res.json({
        message: "Record deleted successfully"
    });
});


app.listen(3000, () => {
    console.log("Astro server running on port 3000");
});