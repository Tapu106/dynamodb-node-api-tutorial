require("dotenv").config();
const AWS = require("aws-sdk");
const TABLE_NAME = "harrypotter-api";

// aws configuration
AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
/* CRUD operation using Dynamodb */

// CREATE - an item in Dynamodb
const createCharacters = async (characters) => {
  const params = {
    TableName: TABLE_NAME,
    Item: characters,
  };
  try {
    const response = await dynamoClient.put(params).promise();
    console.log("Sucessfully created!!");
  } catch (err) {
    console.log(err);
  }
};

// READ - from Dynamodb
const getCharacters = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  try {
    const characters = await dynamoClient.scan(params).promise();
    return characters;
  } catch (error) {
    console.log(error);
  }
};

//  RETRIEVE by an ID - from Dynamodb
const getCharacterById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  try {
    const character = await dynamoClient.get(params).promise();
    return character;
  } catch (error) {
    console.log(error);
  }
};

// UPDATE - an item property (actor) in Dynamodb
const UpdateCharacterNameById = async (id, name) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
    UpdateExpression: "set actor = :a",
    ExpressionAttributeValues: {
      ":a": name,
    },
    ReturnValues: "UPDATED_NEW",
  };
  try {
    const response = await dynamoClient.update(params).promise();
    console.log("successfully updated!");
    return response;
  } catch (error) {
    console.log(error);
  }
};

// DELETE - an Item from DynamoDB
const deleteItemfromDB = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };

  try {
    const response = await dynamoClient.delete(params).promise();
    console.log("successfully deleted!");
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dynamoClient,
  createCharacters,
  getCharacters,
  getCharacterById,
  UpdateCharacterNameById,
  deleteItemfromDB,
};
