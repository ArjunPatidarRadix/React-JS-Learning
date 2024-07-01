var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iam = new AWS.IAM();

const params = {
  UserName: "newUser",
};

iam.createAccessKey(params, (err, data) => {
  if (err) {
    console.log("error creating access: ", err);
  } else {
    console.log("access created: ", data);
  }
});
