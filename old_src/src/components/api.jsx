import axios from 'axios';

const APIURL = 'https://pixabay.com/api';
const KEY = '39262191-95c38e0c922a6e4de67d8ef27';

export const getImages = (imageName, page, perPage) => {
  return axios.get(
    `${APIURL}/?key=${KEY}&q=${imageName}&page=${page}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
};

export { APIURL, KEY };
