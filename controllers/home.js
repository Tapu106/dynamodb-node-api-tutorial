const { getCharacters, getCharacterById } = require("../dynamo");
exports.getAllCharactersInfo = async (req, res, next) => {
  const allCharactersInfo = await getCharacters();
  // console.log(allCharactersInfo);
  return res.json({
    allCharactersInfo,
  });
};

exports.getCharacterByID = async (req, res, next) => {
  const { id } = req.params;
  const characterInfo = await getCharacterById(id);
  // console.log(characterInfo);
  return res.json({
    characterInfo,
  });
};
