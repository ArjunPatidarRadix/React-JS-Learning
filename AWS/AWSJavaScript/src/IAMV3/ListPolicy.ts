// import {
//   IAMClient,
//   ListPoliciesCommand,
//   ListPoliciesCommandInput,
// } from "@aws-sdk/client-iam";

const { IAMClient, ListPoliciesCommand } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

const params = {
  MaxItems: 10,
  Scope: "Local",
};

const run = async () => {
  try {
    const data = await iamClient.send(new ListPoliciesCommand(params));
    console.log("data: ", data);

    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

run();
