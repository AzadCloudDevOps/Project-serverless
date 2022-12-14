"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const showapi = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  let Work;

  try{
  const result = await dynamoDb.scan({
    TableName: "Worktodo"
  }).promise();
  Work = result.Items;
  }catch(err){
    console.log(err);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(Work),
    };
};

module.exports = {
    handler: showapi,
};

