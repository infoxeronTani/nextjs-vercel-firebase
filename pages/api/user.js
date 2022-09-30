import { db } from '../../lib/firebase';

export default async function handler(req, res) {
  const user = await db.collection('db-dev').doc('categories').get();

  if (!user.exists) {
    return res.status(404).json({});
  }

  return res.status(200).json({ ...user.data() });
}
