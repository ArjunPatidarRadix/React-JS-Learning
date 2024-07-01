// import {
//   CreateGroupCommand,
//   CreateGroupCommandInput,
//   IAMClient,
// } from "@aws-sdk/client-iam";

const { IAMClient, CreateGroupCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const params = {
  GroupName: "S3Admins",
};

const run = async () => {
  try {
    const data = await iamClient.send(new CreateGroupCommand(params));
    console.log("data: ", data);

    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

run();
