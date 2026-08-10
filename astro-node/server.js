const express = require("express");

const app = express();

app.use(express.json());

// Universal gravitational constant
const G = 6.67430e-11;

// Gravity calculation
function calculateGravity(m1, m2, distance) {
    return G * m1 * m2 / (distance ** 2);
}

// API
app.post("/gravity", (req, res) => {

    const { m1, m2, distance } = req.body;

    // Basic validation
    if (!m1 || !m2 || !distance) {
        return res.status(400).json({
            error: "m1, m2 and distance are required"
        });
    }

    const force = calculateGravity(
        m1,
        m2,
        distance
    );

    res.json({
        gravitationalForce: force,
        unit: "Newton"
    });
});

app.listen(3000, () => {
    console.log("Astro server running on port 3000");
});