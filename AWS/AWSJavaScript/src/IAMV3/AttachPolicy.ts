// import { AttachUserPolicyCommand, IAMClient } from "@aws-sdk/client-iam";

const { IAMClient, AttachUserPolicyCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const params = {
  PolicyArn: "arn:aws:iam::533267017541:policy/V3FullAccessPolicy",
  UserName: "test2",
};

const run = async () => {
  try {
    const data = await iamClient.send(new AttachUserPolicyCommand(params));
    console.log("data: ", data);

    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

run();
