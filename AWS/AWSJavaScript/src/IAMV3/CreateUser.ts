// import {
//   IAMClient,
//   CreateUserCommand,
//   GetUserCommand,
// } from "@aws-sdk/client-iam";

const {
  IAMClient,
  CreateUserCommand,
  GetUserCommand,
} = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const params = {
  UserName: "user1",
};

const run = async () => {
  try {
    const data = await iamClient.send(new GetUserCommand(params));
    console.log("User already exists: ", data);
    return data;
  } catch (error) {
    try {
      const result = await iamClient.send(new CreateUserCommand(params));
      console.log("User created: ", result);
      return result;
    } catch (error) {
      console.log("error in creating user: ", error);
    }
  }
};

run();
