function main() {
  const iframe = document.querySelector('iframe')
  const resource = document.getElementById('resource')
  const search = window.location.search
  
  if (!search) {
    iframe.setAttribute('src', 'https://datasketch.shinyapps.io/pdaeviz/?data=')
    return
  }
  
  const dataURL = search.match(/data=(.*)&/)
  const resourceURL = search.match(/resource=(.*)&/)
  const originURL = search.match(/origin=(.*)&?/)

  iframe.setAttribute('src', `https://datasketch.shinyapps.io/pdaeviz/?data=${dataURL[1]}`)
  resource.href = `${originURL[1]}${resourceURL[1]}`
}

window.addEventListener('DOMContentLoaded', main)