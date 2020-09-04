const makeUrl = (url, page) => {
  if (page > 0) {
    return `${url}/page_${page}.json`;
  }
  return `${url}/page_1.json`;
};

const PLACE =
  "https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/cards";

const URL = {
  GET_PHOTO_LIST: (page) => {
    return makeUrl(PLACE, page);
  }
};

export default URL;
