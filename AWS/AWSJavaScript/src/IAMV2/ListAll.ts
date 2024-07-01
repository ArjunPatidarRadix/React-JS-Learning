var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iam = new AWS.IAM();

iam.listUsers((err, data) => {
  if (err) {
    console.log("error getting user: ", err);
  } else {
    console.log("users list : ", data);
  }
});
