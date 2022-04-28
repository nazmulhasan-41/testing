const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:{
      type:String
  },
  email: {type:String},
  password:{
        type:String,
        minlength:6
    }
});
export default mongoose.model("User",userSchema);