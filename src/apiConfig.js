let apiUrl

const apiUrls = {
  production: 'https://surviral-server.herokuapp.com/',
  development: 'localhost:5000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
