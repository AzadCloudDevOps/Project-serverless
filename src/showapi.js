"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const showapi = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  let work;

  try{
  const result = await dynamoDb.scan({
    TableName: "todowork"
  }).promise();
  work = result.Items;
  }catch(err){
    console.log(err);
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(work),
    };
};

module.exports = {
    handler: showapi,
};
