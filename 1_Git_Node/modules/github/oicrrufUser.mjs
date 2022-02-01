import fetch from 'node-fetch';

const getUser = async () => {
  const response = await fetch('https://api.github.com/users/oicrruf');
  const data = await response.json();
  console.log(data);
};

getUser();
