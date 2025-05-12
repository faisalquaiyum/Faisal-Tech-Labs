const User = require("../models/user-model.js");
const Contact = require("../models/contact-model.js");
const { get } = require("mongoose");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

// Delete user by ID
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne(
      {
        _id: id,
      },
      { password: 0 }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Update user by ID
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;
    const updatedData = await User.updateOne({_id: id}, {$set: updateUserData});
    return res.status(200).json({ message: "User updated successfully", updatedData });
  } catch (error) {
    next(error);
  }
};

// Delete contact by ID
const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById,
};
