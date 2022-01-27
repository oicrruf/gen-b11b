import fetch from 'node-fetch';

const getUser = async () => {
  const response = await fetch('https://api.github.com/users/Isai01228');
  const data = await response.json();
  console.log(data);
};

getUser();
