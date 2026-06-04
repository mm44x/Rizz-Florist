import { put } from '@vercel/blob';
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
    const { filename, contentType, base64, alt, addToGallery = true } = req.body;
    if (!filename || !base64) {
      return res.status(400).json({ error: 'Missing filename or base64 data.' });
    }

    // Convert base64 to buffer
    const buffer = Buffer.from(base64, 'base64');

    // Upload to Vercel Blob
    // Vercel Blob uses BLOB_READ_WRITE_TOKEN from environment variables
    const blob = await put(filename, buffer, {
      contentType: contentType || 'image/jpeg',
      access: 'public',
    });

    // Retrieve existing data
    let data = await getDbData();
    if (!data) {
      data = { gallery: [], pricing: [], contacts: {} };
    }

    // Add to gallery list if addToGallery is true
    const newImage = {
      url: blob.url,
      alt: alt || 'Papan bunga Rizz Florist'
    };

    if (addToGallery) {
      if (!data.gallery || !Array.isArray(data.gallery)) {
        data.gallery = [];
      }
      data.gallery.push(newImage);
      await setDbData(data);
    }

    return res.status(200).json({ message: 'Image uploaded successfully.', image: newImage, data });
  } catch (error) {
    console.error("Upload Image Error:", error);
    return res.status(500).json({ error: 'Failed to upload image. Make sure BLOB_READ_WRITE_TOKEN is configured in Vercel.' });
  }
}
