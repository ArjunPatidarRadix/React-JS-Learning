var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iam = new AWS.IAM();

const param = {
  PolicyArn: "arn:aws:iam::aws:policy/AmazonS3FullAccess",
  GroupName: "RDSAdmins",
};

iam.detachGroupPolicy(param, (err, data) => {
  if (err) {
    console.log("error in detaching the policy from user: ", err);
  } else {
    console.log("Detached policy from user: ", data);
  }
});
