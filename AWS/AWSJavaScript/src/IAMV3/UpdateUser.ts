// import {
//   IAMClient,
//   UpdateUserCommand,
//   UpdateUserCommandInput,
// } from "@aws-sdk/client-iam";

const {
  IAMClient,
  UpdateUserCommand,
  UpdateUserCommandInput,
} = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const params = {
  UserName: "test",
  NewUserName: "test2",
};

const run = async () => {
  try {
    const data = await iamClient.send(new UpdateUserCommand(params));
    console.log("data: ", data);

    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

run();
