var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iam = new AWS.IAM();

const param = {
  PolicyArn: "arn:aws:iam::533267017541:policy/newUserFullPolicy",
  UserName: "bob",
};

iam.detachUserPolicy(param, (err, data) => {
  if (err) {
    console.log("error in detaching the policy from user: ", err);
  } else {
    console.log("Detached policy from user: ", data);
  }
});
