import axios from 'axios'

const host = 'http://localhost:3001';

const getAllGames = () => {
  const url = `${host}/api/games`
  return axios.get(url)
  .then(response => {
    console.log(response.data);
    return response.data
  })
  .catch(e => {
    console.log(e);
    return e
  });
};

const getGame = id => {
  const url = `${host}/api/games/${id}`
  return axios.get(url)
  .then(response => {
    console.log(response.data);
    return response.data
  })
  .catch(e => {
    console.log(e);
    return e
  });
};

const createGame = data => {
  const url = `${host}/api/games`
  return axios.post(url, data).create(data)
  .then(response => {
    return response.data
  })
  .catch(e => {
    console.log(e);
    return e
  });
};

const GameService = {
  getAllGames,
  getGame,
  createGame,
};

export default GameService