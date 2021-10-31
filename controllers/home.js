const { getCharacters } = require("../dynamo");
exports.getAllCharactersInfo = async (req, res, next) => {
  const allCharactersInfo = await getCharacters();
  console.log(allCharactersInfo);
  return res.json({ allCharactersInfo });
};
