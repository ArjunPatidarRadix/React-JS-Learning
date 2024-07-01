// import { IAMClient, CreatePolicyCommand } from "@aws-sdk/client-iam";

const { IAMClient, CreatePolicyCommand } = require("@aws-sdk/client-iam");

const currentDate = new Date();
const currentDateString = currentDate.toISOString().split("T")[0];

const startTime = `${currentDateString}T01:00:00Z`;
const endTime = `${currentDateString}T03:00:00Z`;

const policyDoc = {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::bucketradix",
      "Condition": {
        "DateGreaterThan": { "aws:CurrentTime": startTime },
        "DateLessThan": { "aws:CurrentTime": endTime },
      },
    },
  ],
};

const iamClient = new IAMClient();

const run = async () => {
  try {
    const data = await iamClient.send(
      new CreatePolicyCommand({
        PolicyName: "JavaScriptAccessWindowPolicy",
        PolicyDocument: JSON.stringify(policyDoc),
      })
    );
    console.log("data: ", data);

    return data;
  } catch (error) {
    console.log("error in getting user: ", error);
  }
};

run();
