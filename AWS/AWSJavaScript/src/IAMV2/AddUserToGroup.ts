var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iam = new AWS.IAM();

const params = {
  UserName: "bob",
  GroupName: "S3Admins",
};

iam.removeUserFromGroup(params, (err, data) => {
  if (err) {
    console.log("error creating user: ", err);
  } else {
    console.log("user created: ", data);
  }
});
