// import { CreatePolicyCommand, IAMClient } from "@aws-sdk/client-iam";

const { CreatePolicyCommand, IAMClient } = require("@aws-sdk/client-iam");

const iamClient = new IAMClient();

// const policy_doc = {
//   Version: "2012-10-17",
//   Statement: [
//     {
//       Effect: "Allow",
//       Action: "*",
//       Resource: "*",
//     },
//   ],
// };

const policy_doc = {
  Version: "2012-10-17",
  Statement: [
    {
      Effect: "Allow",
      Action: "s3:GetObject",
      Resource: "arn:aws:s3:::bucketradix",
    },
  ],
};

const params = {
  PolicyDocument: JSON.stringify(policy_doc),
  PolicyName: "MyJavaScriptPolicy",
};

const run = async () => {
  try {
    const data = await iamClient.send(new CreatePolicyCommand(params));
    console.log("data: ", data);

    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

run();
