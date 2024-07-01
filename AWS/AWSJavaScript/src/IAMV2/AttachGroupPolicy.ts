var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iam = new AWS.IAM();

const param = {
  PolicyArn: "arn:aws:iam::aws:policy/AmazonS3FullAccess",
  GroupName: "S3Admins",
};

iam.attachGroupPolicy(param, (err, data) => {
  if (err) {
    console.log("error in attaching the policy to group: ", err);
  } else {
    console.log("Attached policy to group: ", data);
  }
});
