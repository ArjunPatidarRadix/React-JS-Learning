// import {
//   EC2Client,
//   RunInstancesCommand,
//   RunInstancesCommandInput,
// } from "@aws-sdk/client-ec2";

const { EC2Client, RunInstancesCommand } = require("@aws-sdk/client-ec2");

const eC2Client = new EC2Client();

const instanceProfileName = "MyJavaScriptProfile";
const params = {
  ImageId: "ami-0d7a109bf30624c99",
  InstanceType: "t2.micro",
  MinCount: 1,
  MaxCount: 1,
  IamInstanceProfile: {
    Name: instanceProfileName,
  },
};

const run = async () => {
  try {
    const data = await eC2Client.send(new RunInstancesCommand(params));
    console.log("Instance is launched: ", data);

    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

run();
