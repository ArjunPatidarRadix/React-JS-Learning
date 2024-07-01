// import {
//   AttachRolePolicyCommand,
//   AttachRolePolicyCommandInput,
//   IAMClient,
// } from "@aws-sdk/client-iam";

const { IAMClient, AttachRolePolicyCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const params = {
  PolicyArn: "arn:aws:iam::533267017541:policy/MyJavaScriptPolicy",
  RoleName: "MyJavaScriptRole",
};

const run = async () => {
  try {
    const data = await iamClient.send(new AttachRolePolicyCommand(params));
    console.log("data: ", data);

    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

run();
