var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iamC = new AWS.IAM();

const params = {
  GroupName: "S3Admins",
};

iamC.createGroup(params, (err, data) => {
  if (err) {
    console.log("error creating group: ", err);
  } else {
    console.log("group created: ", data);
  }
});
