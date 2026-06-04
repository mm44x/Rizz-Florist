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
    const { contacts } = req.body;
    if (!contacts) {
      return res.status(400).json({ error: 'Missing contacts object in request body.' });
    }

    // Retrieve existing data
    let data = await getDbData();
    if (!data) {
      data = {};
    }

    // Update contacts
    data.contacts = {
      email: contacts.email || "",
      phone: contacts.phone || "",
      whatsapp: contacts.whatsapp || "",
      instagram: contacts.instagram || "",
      instagramUser: contacts.instagramUser || "",
      address: contacts.address || "Jakarta, Indonesia"
    };

    await setDbData(data);
    return res.status(200).json({ message: 'Contact details saved successfully.', data });
  } catch (error) {
    console.error("Save Contacts Error:", error);
    return res.status(500).json({ error: 'Failed to save contact details.' });
  }
}
