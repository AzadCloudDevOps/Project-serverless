"use strict";
const AWS = require("aws-sdk");

const completeapi = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { completed } = JSON.parse(event.body);
  const { id } = event.pathParameters;

  await dynamoDb.update({
    TableName: "Worktodo",
    Key: { id },
    UpdateExpression: "set completed = :completed",
    ExpressionAttributeValues: {":completed": completed},
    ReturnValues: "ALL_NEW"
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({msg:"Work is completed now"}),
    };
};

module.exports = {
    handler: completeapi,
};
