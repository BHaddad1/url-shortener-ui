export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong fetching the data. Please try again later.")
        }
      })
}
export const postUrls = (data) => {
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }
  return fetch('http://localhost:3001/api/v1/urls', options)
        .then(res => {
          if (res.ok) {
            return res.json()
          } else {
            throw new Error("Could not post to server.")
          }
        })
}
