import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { 
      type: String,
      required: true
    },
    Activity: { 
      type: String,
      required: true
    },

    Duration: { 
        type: String,
        required: true
      },
  
      Date: { 
        type: String,
        required: true
      },
      Actions : { 
        type: String,
        required: true
      }

  });

  const User = mongoose.model('User', userSchema);
  export default User;