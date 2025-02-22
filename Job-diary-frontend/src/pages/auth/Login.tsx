import React, { useState } from "react";
import { TextField, Button, Typography, Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loginUser } from "../../redux/slices/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated } = useAppSelector(
    (state) => state.auth
  ); // Use the selector to get auth state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle login
  const handleLogin = async () => {
    if (email && password) {
      try {
        await dispatch(loginUser({ email, password })).unwrap();
      } catch (err) {
        console.error("Login failed", err); // Log the error
      }
    } else {
      console.error("Email and Password cannot be empty");
    }
  };

  // Navigate to the signup page
  const signUp = () => {
    navigate("/signup");
  };

  // Redirect user after successful login
  if (isAuthenticated) {
    navigate("/dashboard");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Box
        className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md"
        sx={{ boxShadow: 3 }}
      >
        <Typography
          variant="h5"
          className="text-center mb-6 font-bold text-gray-700"
        >
          Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-4"
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-4"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="mt-6"
          onClick={handleLogin}
          sx={{ py: 1.5, mt: 1.5 }}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

        {error && (
          <Typography
            variant="body2"
            color="error"
            className="text-center mt-4"
          >
            {error}
          </Typography>
        )}

        <Typography
          variant="body2"
          className="text-center mt-4 text-gray-600"
          sx={{ mt: 1.5 }}
        >
          Don't have an account?{" "}
          <Link
            component="button"
            onClick={signUp}
            underline="hover"
            className="text-blue-500"
          >
            Signup
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Login;
