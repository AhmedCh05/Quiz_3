function ParseJson(link) {
  fetch(link, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((todo) => StringToJson(todo))
    .then((json) => console.log(json))
    .catch((err) => console.log(err))
    .catch((err) => console.log(err));
}

async function StringToJson(Arr) {
  return await Arr.json()
    .then((json) => json)
    .catch((err) => err);
}

function JsonToString(json) {
  return JSON.stringify(json);
}

function main() {
  let link =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

  ParseJson(link);
  let JsonObject = {
    hello: "123",
    World: "345",
  };

  console.log(
    "\n***************************************\n",
    JsonToString(JsonObject)
  );
}

main();
