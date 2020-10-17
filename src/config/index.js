let API_URL;
if(process.env.NODE_ENV !== "production"){
  API_URL = process.env.REACT_APP_LOCAL_API_URL
}else{
  API_URL = process.env.REACT_APP_PRODUCTION_API_URL
}

export {API_URL}