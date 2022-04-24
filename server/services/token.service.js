const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Token = require('../models/Token');

dotenv.config();

class TokenService {
  generate(payload) {
    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: '1h'
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET);

    return {
      accessToken,
      refreshToken,
      expiresIn: 3600
    };
  }
  
  async save(user, refreshToken) {
    const data = await Token.findOne({ user });
    if (data) {
      data.refreshToken = refreshToken;
      return data.save();
    }
    const token = await Token.create({ user, refreshToken });
    return token;
  }

  async findToken(refreshToken) {
    try {
      return await Token.findOne({ refreshToken });
    } catch (error) {
      return null;
    }
  }

  validateAccess(accessToken) {
    try {
      return jwt.verify(accessToken, process.env.ACCESS_SECRET);
    } catch (error) {
      return null;
    }
  }

  validateRefresh(refreshToken) {
    try {
      return jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    } catch (error) {
      return null;
    }
  }

  async findToken(refreshToken) {
    try {
      return await Token.findOne({ refreshToken });
    } catch (error) {
      return null;
    }
  }
}

module.exports = new TokenService();
