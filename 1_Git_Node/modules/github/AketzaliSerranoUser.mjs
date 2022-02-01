import fetch from 'node-fetch';
import fs from "fs"

const getUser = async () => {
  const response = await fetch('https://api.github.com/users/AketzaliSerrano');
  const data = await response.json();

  fs.writeFile(`./github/AketzaliSerrano.json`, JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Archivo creado");
    }
  });
};

getUser();
