import axios from 'axios'

const host = 'http://localhost:3001';

const getAllCategories = () => {
  const url = `${host}/api/categories`
  return axios.get(url)
  .then(response => {
    return response.data
  })
  .catch(e => {
    console.log(e);
    return e
  });
};

const getCategory = id => {
  const url = `${host}/api/categories/${id}`
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

const createCategory = data => {
  const url = `${host}/api/categories`
  return axios.post(url, data).create(data)
  .then(response => {
    return response.data
  })
  .catch(e => {
    console.log(e);
    return e
  });
};

const CategoryService = {
  getAllCategories,
  getCategory,
  createCategory,
};

export default CategoryService