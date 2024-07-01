var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iamC = new AWS.IAM();

const createUserParams = {
  OldPassword: "2YiY1{7r",
  NewPassword: "Test@123",
};

iamC.changePassword(createUserParams, (err, data) => {
  if (err) {
    console.log("error creating user: ", err);
  } else {
    console.log("user created: ", data);
  }
});
