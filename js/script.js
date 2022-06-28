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
  console.log(x)
  let list = document.getElementById('item')
  let item = x.getElementsByTagName('item')
  let itemNum = x.getElementsByTagName('item').length
  console.log(itemNum)

  for (let i = 0; i < itemNum; i++) {
    let li = document.createElement('li')
    li.className = "listItem"

    // using `wholeText` with optional chaining operator (? after variable) will
    // allow us to read CDATA when it's located in a new line, as per:
    // https://stackoverflow.com/questions/1736122/read-cdata-in-xml-from-javascript
    let title = item[i].getElementsByTagName('title')[0]
    title = title?.firstChild?.wholeText?.trim()

    let description = item[i].getElementsByTagName('description')[0]
    description = description?.firstChild?.wholeText?.trim()

    li.innerHTML =
      `
    <h3>${title}</h3>
    <p>${description}</p>
        `

    list.appendChild(li)

  }

}