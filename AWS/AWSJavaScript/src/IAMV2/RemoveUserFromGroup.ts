var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iam = new AWS.IAM();

const params = {
  UserName: "newUser",
  GroupName: "S3Group",
};

iam.removeUserFromGroup(params, (err, data) => {
  if (err) {
    console.log("error creating user: ", err);
  } else {
    console.log("user created: ", data);
  }
});
