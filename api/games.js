export default async function handler(req, res) {
  try {
    const response = await fetch("https://raw.githubusercontent.com/GLITCHED-OVERRIDE/Hypper-Drive-2/refs/heads/main/Games/Zones.json");
    const json = await response.text();
    
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(json);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Zones.json" });
  }
}
