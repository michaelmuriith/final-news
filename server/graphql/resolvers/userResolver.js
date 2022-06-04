const bcrypt = require('bcrypt');
const { Token } = require('graphql');
const jwt = require('jsonwebtoken');

const User = require("../../models/user");

module.exports = {
  Query: {
    getUser: async (parent, args) => {
      try {
        const { id } = args;
        const user = await User.findById(id);
        if (!user) {
          const error = new Error("No user found!");
          error.code = 404;
          throw error;
        }

        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {
    login: async(_, {loginData : {
      email,
      password
    }}) => {
      try {
        const user = await User.findOne({email})

        if(!user) {
          const error = new Error("User does nots exist");
          error.code = 404;
          throw error;
        } else {
          const hash = await bcrypt.compare(password, user.password);   
          if(hash == true){
            const token = jwt.sign({
              id: user.id,
              email: user.email,
              display_name: user.display_name
            }, 'SECRETKEY', { expiresIn: '1h'});

            console.log(token)

            return {
              ...user._doc,
              id:user._id,
              token
            }
          }
          else{
            const error = new Error("Something went wrong");
            error.code = 404;
            throw error;
          }
        }
      } catch (error) {
        throw new Error(error);
      }
    },


    registerUser: async (_,{userInput : {
      full_name,
      display_name,
      image,
      email,
      password
    }}) => {
      try {

        const user = await User.find({email})

        if(user.length === 0 ){
          password = await bcrypt.hash(password, 10);

          const newUser = new User({
            full_name,
            display_name,
            image,
            email,
            password,
          });

          const res = await newUser.save();

          const token = jwt.sign({
            id: res.id,
            email: res.email,
            display_name: res.display_name
          }, 'SECRETKEY', { expiresIn: '1h'});

          console.log(token);

          return {
            ...res._doc,
            id:res._id,
            token
          }
        } else {
          const error = new Error("Email already used");
          error.code = 15023;
          throw error;
        }
      } catch (error) {
        throw new Error(error);
      }
    },

    // updateNote: async (parent, args) => {
    //   try {
    //     const { id, noteInput } = args;
    //     const note = await Note.findById(id);
    //     if (!note) {
    //       const error = new Error("No note found!");
    //       error.code = 404;
    //       throw error;
    //     }
    //     return await Note.findOneAndUpdate(id, noteInput, { new: true });
    //   } catch (error) {
    //     throw new Error(error);
    //   }
    // },
    // deleteNote: async (parent, args) => {
    //   try {
    //     const { id } = args;
    //     const note = await Note.findById(id);
    //     if (!note) {
    //       const error = new Error("No note found!");
    //       error.code = 404;
    //       throw error;
    //     }
    //     await Note.findByIdAndDelete(id);
    //     return true;
    //   } catch (error) {
    //     throw new Error(error);
    //   }
    // },
  },
};
