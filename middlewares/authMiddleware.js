import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import User from '../models/userModel.js';


const protect = asyncHandler(async (req, res, next) => {
  // 1) Getting token and check if it exists
  let token = '';
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    token = req.headers.authorization.split(' ')[1];

  if (!token) 
    return res.status(400).json({message:'You are not logged in. Please login to get access'});

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const freshUser = await User.findById(decoded.id);
  if (!freshUser)
    return res.status(400).json({message:'USER NOT FOUND'});

  // 4) GRANT ACCESS TO PROTECTED ROUTE
  req.user = freshUser;
  req.role = req.user.role;
  next();
});


const restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles = ['admin','vendor','etc.]. req.user.role = 'user'
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }
    next();
  };
};

export { protect, restrictTo };
