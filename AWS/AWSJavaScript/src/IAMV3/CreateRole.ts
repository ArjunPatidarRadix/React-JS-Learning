// import {
//   IAMClient,
//   CreateRoleCommand,
//   CreateRoleCommandInput,
// } from "@aws-sdk/client-iam";

const { IAMClient, CreateRoleCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const trustPolicy = {
  Version: "2012-10-17",
  Statement: [
    {
      Effect: "Allow",
      Principal: {
        Service: "ec2.amazonaws.com",
      },
      Action: "sts:AssumeRole",
    },
  ],
};

const params = {
  RoleName: "MyJavaScriptRole",
  AssumeRolePolicyDocument: JSON.stringify(trustPolicy),
};

const run = async () => {
  try {
    const result = await iamClient.send(new CreateRoleCommand(params));
    console.log("created: ", result);
    return result;
  } catch (error) {
    console.log("error : ", error);
  }
};

run();
