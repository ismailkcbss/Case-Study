export const setKeyWithValue = (key, value) => {
    localStorage.removeItem(key);
    localStorage.setItem(key, value);
  };
  
  export const getValueByKey = (key) => {
    return localStorage.getItem(key);
  };