export default function handler(req, res) {
    const player = req.query.player || "Unknown";
    const message = req.query.msg || "";

    const response = {
        success: true,
        player,
        message,
        timestamp: new Date().toISOString()
    };

    console.log(response);

    return res.status(200).json(response);
}
