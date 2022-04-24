import { generateColorSet } from '@/lib/colors';

export default function handler(req, res) {
  res.status(200).json(generateColorSet());
}
