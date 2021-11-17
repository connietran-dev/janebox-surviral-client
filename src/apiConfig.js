const apiUrls = {
  production: 'https://surviral-server.herokuapp.com/',
  development: 'localhost:5000'
}

export default window.location.hostname === 'localhost' 
  ? apiUrls.development
  : apiUrls.production
