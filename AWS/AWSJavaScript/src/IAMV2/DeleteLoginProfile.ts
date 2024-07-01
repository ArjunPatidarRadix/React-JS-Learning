var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iamC = new AWS.IAM();

const params = {
  UserName: "newUser",
};

iamC.deleteLoginProfile(params, (err, data) => {
  if (err) {
    console.log("error creating password: ", err);
  } else {
    console.log("password created: ", data);
  }
});
