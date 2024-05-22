const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;

const data = JSON.parse(jsonString);
const listNode = data.list;
const resultList = { list: [] };

listNode.forEach((item) => {
  const result = {
    name: item.name,
    age: Number(item.age),
    prof: item.prof,
  };

  resultList.list.push(result);
});

console.log(resultList);
