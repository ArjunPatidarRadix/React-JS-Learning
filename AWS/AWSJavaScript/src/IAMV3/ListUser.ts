// import { IAMClient, ListUsersCommand } from "@aws-sdk/client-iam";

const { IAMClient, ListUsersCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const params = {
  // MaxItems: 10,
};

const run = async () => {
  try {
    const data = await iamClient.send(new ListUsersCommand(params));
    console.log("data: ", data.Users);

    return data;
  } catch (error) {
    console.log("error in getting user: ", error);
  }
};

run();
