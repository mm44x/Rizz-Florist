import { verifyAuth, handleUnauthorized } from './auth.js';

export default async function handler(req, res) {
  // We only allow POST requests for password verification to prevent caching
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // verifyAuth will compare the Bearer token with process.env.ADMIN_PASSWORD
  if (!verifyAuth(req)) {
    return handleUnauthorized(res);
  }

  return res.status(200).json({ success: true, message: 'Authenticated successfully.' });
}
