// script.js | Eric Hepperle

loadXMLFeed = () => {
  const url = "docs/rss-va-traffic-all.xml"
  fetch(url)
    .then(response => response.text())
    .then(data => {
      let parser = new DOMParser()
      let xml = parser.parseFromString(data, "application/xml")
      console.log(xml)
    })
}

document.addEventListener("DOMContentLoaded", loadXMLFeed)