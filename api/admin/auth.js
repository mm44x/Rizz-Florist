export function verifyAuth(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  const token = authHeader.substring(7);
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'; // Fallback default password
  return token === adminPassword;
}

export function handleUnauthorized(res) {
  return res.status(401).json({ error: 'Unauthorized: Invalid password.' });
}
