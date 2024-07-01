// import { IAMClient, UntagUserCommand } from "@aws-sdk/client-iam";

const { IAMClient, UntagUserCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const params = {
  TagKeys: ["Department", "Project"],
  UserName: "user1",
};

const run = async () => {
  try {
    const data = await iamClient.send(new UntagUserCommand(params));
    console.log("data: ", data);

    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

run();
