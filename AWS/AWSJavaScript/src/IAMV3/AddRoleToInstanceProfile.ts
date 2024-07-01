// import {
//   AddRoleToInstanceProfileCommand,
//   IAMClient,
// } from "@aws-sdk/client-iam";

const {
  IAMClient,
  AddRoleToInstanceProfileCommand,
} = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const instanceProfileName = "MyJavaScriptProfile";
const roleName = "MyJavaScriptRole";

const run = async () => {
  try {
    const command = new AddRoleToInstanceProfileCommand({
      InstanceProfileName: instanceProfileName,
      RoleName: roleName,
    });
    const data = await iamClient.send(command);
    console.log("data: ", data);

    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

run();
