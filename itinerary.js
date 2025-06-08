export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { duration, interests, budget } = req.body;
    const itinerary = `Day 1: Visit the British Museum and Covent Garden.\nDay 2: Explore Tower Bridge and enjoy a Thames River cruise.\nDay 3: Discover Notting Hill and the V&A Museum.`;
    return res.status(200).json({ success: true, itinerary });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
