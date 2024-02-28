import Express from "express";
const Router = Express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  registerOtpVerifiedUser,
  forgotPassword,
  confirmResetPW,
  googleRegister,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import checkBlockedAndClearToken from "../middleware/userMiddleware/authAndBlockMiddleware.js";
import { createPost } from "../controllers/userController/postController.js";
Router.post('/signup', registerUser);
Router.post('/google-signup', googleRegister);
Router.post('/login', authUser);
Router.post('/logout', logoutUser);
Router.post('/signup-verified', registerOtpVerifiedUser);
Router.post('/forgot-password', forgotPassword);
Router.post('/confirmResetPassword', confirmResetPW);
Router.route('/profile')
  .get(protect, checkBlockedAndClearToken, getUserProfile)
  .put(protect, checkBlockedAndClearToken, updateUserProfile);

Router.post("/save-post", protect,checkBlockedAndClearToken,createPost)
export default Router;  