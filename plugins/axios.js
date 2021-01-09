export default function ({ $axios, redirect }) {
    $axios.setBaseURL("/api")
    $axios.onRequest(config => {
        console.log('Making request to '+config.url)
        // console.log(config)
      })
    $axios.onError(error => {
      if (error.response.status === 500) {
        redirect('/sorry')
      }
    })
  }