import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Generate JWT token for a user
 * @param {string} userId - The ID of the user
 * @returns {string} - Signed JWT token
 */

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

export default generateToken;
