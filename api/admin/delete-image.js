import { del } from '@vercel/blob';
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
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: 'Missing image url to delete.' });
    }

    // Delete from Vercel Blob if it's a Vercel Blob URL
    if (url.startsWith('https://') && (url.includes('public.blob.vercel-storage.com') || url.includes('vercel-storage.com'))) {
      try {
        await del(url);
      } catch (blobError) {
        console.error("Vercel Blob deletion error (continuing database update):", blobError);
      }
    }

    // Retrieve existing data
    let data = await getDbData();
    if (data && data.gallery) {
      // Filter out the image from KV
      data.gallery = data.gallery.filter(item => item.url !== url);
      await setDbData(data);
    }

    return res.status(200).json({ message: 'Image deleted successfully.', data });
  } catch (error) {
    console.error("Delete Image Error:", error);
    return res.status(500).json({ error: 'Failed to delete image.' });
  }
}
