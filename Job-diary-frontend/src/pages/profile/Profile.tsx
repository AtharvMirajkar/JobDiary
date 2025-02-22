import React, { useState } from "react";
import { TextField, Button, Avatar } from "@mui/material";

interface UserProfile {
  name: string;
  email: string;
  linkedin: string;
  extraDetails: string;
  profilePicture: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserProfile>({
    name: "John Doe",
    email: "johndoe@example.com",
    linkedin: "",
    extraDetails: "",
    profilePicture: "https://via.placeholder.com/150",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profilePicture: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile Updated:", user);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile</h1>
      <div className="flex flex-col items-center mb-6">
        <Avatar
          src={user.profilePicture}
          alt="Profile"
          className="w-24 h-24 mb-4"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <TextField
            name="name"
            fullWidth
            value={user.name}
            disabled
            size="small"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <TextField
            name="email"
            fullWidth
            value={user.email}
            disabled
            size="small"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-700">LinkedIn Profile</label>
          <TextField
            name="linkedin"
            fullWidth
            value={user.linkedin}
            onChange={handleChange}
            size="small"
            placeholder="Enter your LinkedIn profile link"
          />
        </div>
        <div>
          <label className="block text-gray-700">Extra Details</label>
          <TextField
            name="extraDetails"
            multiline
            rows={4}
            fullWidth
            value={user.extraDetails}
            onChange={handleChange}
            size="small"
            placeholder="Enter additional details"
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full md:w-auto"
        >
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default Profile;
