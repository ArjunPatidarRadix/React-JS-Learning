var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iamC = new AWS.IAM();

const deleteUserParams = {
  UserName: "newUser",
};

const removeAccessKeyParams = {
  UserName: "newUser",
  AccessKeyId: "AKIAXYKJQ55CRD4Z6V4C",
};

iamC.deleteAccessKey(removeAccessKeyParams, (err, data) => {
  if (err) {
    console.log("error creating user: ", err);

    iamC.deleteUser(deleteUserParams, (err, data) => {
      if (err) {
        console.log("error creating user: ", err);
      } else {
        console.log("user created: ", data);
      }
    });
  } else {
    console.log("user created: ", data);
  }
});
