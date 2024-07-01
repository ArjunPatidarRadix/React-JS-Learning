var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iam = new AWS.IAM();

const params = {
  NewUserName: "bob",
  UserName: "john2",
};

iam.updateUser(params, (err, data) => {
  if (err) {
    console.log("error updating user: ", err);
  } else {
    console.log("user updated: ", data);
  }
});
