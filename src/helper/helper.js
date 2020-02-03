import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

/**
 *
 *
 * @export
 * @class Helper
 */
export default class Helper {
  /**
   *
   * Handles the logic to compare plaintext and hashed password if the same
   * @static
   * @param {String} plaintextPasssword plaintext password
   * @param {String} hashedPasssword hashed password
   * @returns {Boolean} return true if successful or false if unsuccessful
   * @memberof Helper
   */
  static async comparePassword(plaintextPasssword, hashedPasssword) {
    const comparePassword = await bcryptjs.compare(plaintextPasssword, hashedPasssword);
    return comparePassword;
  }

  /**
   *
   * Handles the logic to generate user token
   * @static
   * @param {Object} userData user data to be encrypted
   * @returns {String} encrypted user data
   * @memberof Helper
   */
  static generateToken(userData) {
    const { id, firstname, lastname, jobrole, isadmin, department } = userData;
    const token = jwt.sign(
      {
        userId: id,
        firstName: firstname,
        lastName: lastname,
        userRole: userrole,
        isAdmin: isadmin
      },
      process.env.JWT_PRIVATE_KEY,
      { expiresIn: '24h' }
    );

    return token;
  }

  /**
   *
   * Handles the logic to hash a plaintext password
   * @static
   * @param {String} plaintextPassword plaintext password to be hash
   * @returns {String} return the hashed password
   * @memberof Helper
   */
  static async hashPassword(plaintextPassword) {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(plaintextPassword, salt);
    return hashedPassword;
  }

  /**
   *
   * Handles the logic to decrypt user's token
   * @static
   * @param {String} token encrypted data to be decrypt
   * @returns {Object} decrypted data
   * @memberof Helper
   */
  static verifyToken(token) {
    const decode = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    return decode;
  }
}
