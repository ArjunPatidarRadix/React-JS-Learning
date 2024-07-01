// import {
//   IAMClient,
//   TagUserCommand,
//   TagUserCommandInput,
// } from "@aws-sdk/client-iam";

const { IAMClient, TagUserCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const params = {
  Tags: [
    {
      Key: "Department",
      Value: "HR",
    },
    {
      Key: "Project",
      Value: "Onborading",
    },
  ],
  UserName: "user1",
};

const run = async () => {
  try {
    const data = await iamClient.send(new TagUserCommand(params));
    console.log("data: ", data);

    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

run();
