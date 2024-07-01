// import {
//   AddUserToGroupCommand,
//   AddUserToGroupCommandInput,
//   IAMClient,
// } from "@aws-sdk/client-iam";

const { IAMClient, AddUserToGroupCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const params = {
  GroupName: "RDSAdmins",
  UserName: "test2",
};

const run = async () => {
  try {
    const data = await iamClient.send(new AddUserToGroupCommand(params));
    console.log("data: ", data);

    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

run();
