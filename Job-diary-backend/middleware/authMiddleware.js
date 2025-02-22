import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  let token;

  console.log("Auth Middleware Triggered"); // Debugging

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Extract token
      console.log("Extracted Token:", token); // Debugging

      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode token
      console.log("Decoded Token:", decoded); // Debugging

      req.userId = decoded.id; // Attach only userId to the request
      console.log("User ID attached to request:", req.userId); // Debugging

      next();
    } catch (error) {
      console.error("JWT Verification Failed:", error.message); // Debugging
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    console.warn("Authorization header missing or incorrect format"); // Debugging
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

export default authMiddleware;
