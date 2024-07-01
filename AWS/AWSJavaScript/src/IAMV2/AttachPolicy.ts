var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iam = new AWS.IAM();

const param = {
  PolicyArn: "arn:aws:iam::533267017541:policy/newUserFullPolicy",
  UserName: "bob",
};

iam.attachUserPolicy(param, (err, data) => {
  if (err) {
    console.log("error in attaching the policy to user: ", err);
  } else {
    console.log("Attached policy to user: ", data);
  }
});
