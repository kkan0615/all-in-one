import { jwtTokenKey } from '@/config'
import _jwt from 'jsonwebtoken'
import Logger from '@/utils/logger'

/* Logger */
const logger = new Logger(__filename)

/**
 *
 */
class jwt {
  /**
     *
     * @param data - data in token
     * @param time - expried date
     */
  public signToken (data: Record<string, any>, time: string): string {
    return _jwt.sign({
      ...data
    }, jwtTokenKey, { expiresIn: time })
  }

  /**
   *
   * @param token - Target token
   */
  public verifyToken (token: string): any {
    try {
      console.log(token)
      return _jwt.verify(token, jwtTokenKey)
    } catch (error) {
      console.log(token)
      logger.error(error)
    }
  }
}

export default jwt
