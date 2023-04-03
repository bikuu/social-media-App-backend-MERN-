import mongoose from "mongoose";

const Userschema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    age: Number,
    livesin: String,
    gender: String,
    relationship: String,
    profilePicture: String,
    coverPicture: String,
    education: [
      {
        degree: String,
        gradFrom: String,
        gradDate: Date,
      },
    ],

    work: [
      {
        worksAt: String,
        position: String,
        experience: String,
      },
    ],
    qualification: [],
    followers: [],
    following: [],

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", Userschema);
export default UserModel;
