// import {
//   CreateInstanceProfileCommand,
//   IAMClient,
// } from "@aws-sdk/client-iam";

const {
  IAMClient,
  CreateInstanceProfileCommand,
} = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const instanceProfileName = "MyJavaScriptProfile";

const run = async () => {
  try {
    const command = new CreateInstanceProfileCommand({
      InstanceProfileName: instanceProfileName,
    });
    const data = await iamClient.send(command);
    console.log("data: ", data);

    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

run();
