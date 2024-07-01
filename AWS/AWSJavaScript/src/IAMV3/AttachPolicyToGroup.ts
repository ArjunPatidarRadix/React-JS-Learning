// import {
//   AttachGroupPolicyCommand,
//   AttachGroupPolicyCommandInput,
//   IAMClient,
// } from "@aws-sdk/client-iam";

const { IAMClient, AttachGroupPolicyCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const params = {
  PolicyArn: "arn:aws:iam::aws:policy/AmazonS3FullAccess",
  GroupName: "S3Admins",
};

const run = async () => {
  try {
    const data = await iamClient.send(new AttachGroupPolicyCommand(params));
    console.log("data: ", data);

    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

run();
