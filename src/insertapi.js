"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const insertapi = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { Work } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();
  const newWork = {
    id,
    Work,
    createdAt,
    completed: false
  }
  await dynamoDb.put({
    TableName: "Worktodo",
    Item: newWork
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newWork),
    };
};

module.exports = {
    handler: insertapi,
};
