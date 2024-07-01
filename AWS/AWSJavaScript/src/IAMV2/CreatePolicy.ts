var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iam = new AWS.IAM();

const policyDocument = {
  Version: "2012-10-17",
  Statement: [
    {
      Effect: "Allow",
      Action: "*",
      Resource: "*",
    },
  ],
};

const params = {
  PolicyDocument: JSON.stringify(policyDocument),
  PolicyName: "newUserFullPolicy",
  Description: "Create a new full access policy",
};

iam.createPolicy(params, (err, data) => {
  if (err) {
    console.log("error creating user: ", err);
  } else {
    console.log("user created: ", data);
  }
});
