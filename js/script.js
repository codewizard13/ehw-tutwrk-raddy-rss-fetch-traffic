// script.js | Eric Hepperle

loadXMLFeed = () => {
  const url = "docs/rss-va-traffic-all.xml"
  fetch(url)
    .then(response => response.text())
    .then(data => {
      let parser = new DOMParser()
      let xml = parser.parseFromString(data, "application/xml")
      displayTrafficList(xml)
    })
}

document.addEventListener("DOMContentLoaded", loadXMLFeed)

function displayTrafficList(x) {

  let list = document.getElementById('item')
  let item = x.getElementsByTagName('item')
  let itemNum = x.getElementsByTagName('item').length
  console.log(itemNum)

  for (let i = 0; i < itemNum; i++) {
    let li = document.createElement('li')
    li.className = "listItem"

    li.innerHTML = `${i + 1} RSS Feed`

    list.appendChild(li)
  }

}