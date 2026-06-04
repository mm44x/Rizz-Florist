import { createClient } from 'redis';

// Helper function to create and connect a Redis client
async function connectRedis() {
  const redisUrl = process.env.REDIS_URL;
  if (!redisUrl) {
    throw new Error('REDIS_URL environment variable is missing.');
  }
  const client = createClient({
    url: redisUrl
  });
  client.on('error', (err) => console.error('Redis Client Error', err));
  await client.connect();
  return client;
}

export async function getDbData() {
  let client;
  try {
    client = await connectRedis();
    const data = await client.get('rizz_florist_data');
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Failed to retrieve data from Redis:", error);
    return null; // Return null so callers can fallback to defaults
  } finally {
    if (client) {
      try {
        await client.quit();
      } catch (err) {
        console.error("Error closing Redis client:", err);
      }
    }
  }
}

export async function setDbData(data) {
  let client;
  try {
    client = await connectRedis();
    await client.set('rizz_florist_data', JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("Failed to save data to Redis:", error);
    throw error;
  } finally {
    if (client) {
      try {
        await client.quit();
      } catch (err) {
        console.error("Error closing Redis client:", err);
      }
    }
  }
}
