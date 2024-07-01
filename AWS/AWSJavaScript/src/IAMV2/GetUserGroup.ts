var AWS = require("aws-sdk");
// import AWS from "aws-sdk";

const iamC = new AWS.IAM();

const createUserParams = {
  GroupName: "RDSAdmins",
};

iamC.getGroup(createUserParams, (err, data) => {
  if (err) {
    console.log("error creating user: ", err);
  } else {
    console.log("user created: ", data);
  }
});
