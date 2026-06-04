import { getDbData, setDbData } from './db.js';
import { verifyAuth, handleUnauthorized } from './auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!verifyAuth(req)) {
    return handleUnauthorized(res);
  }

  try {
    const { pricing } = req.body;
    if (!pricing || !Array.isArray(pricing)) {
      return res.status(400).json({ error: 'Missing or invalid pricing array in request body.' });
    }

    // Retrieve existing data
    let data = await getDbData();
    if (!data) {
      data = {};
    }

    // Update pricing list
    data.pricing = pricing.map(item => ({
      id: item.id || `p_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      title: item.title || "",
      size: item.size || "",
      price: item.price || "",
      image: item.image || "",
      features: Array.isArray(item.features) ? item.features : []
    }));

    await setDbData(data);
    return res.status(200).json({ message: 'Pricing details saved successfully.', data });
  } catch (error) {
    console.error("Save Pricing Error:", error);
    return res.status(500).json({ error: 'Failed to save pricing details.' });
  }
}
