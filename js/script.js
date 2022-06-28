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

    let thisItem = item[i].getElementsByTagName('title')[0]

    // using `wholeText` will allow us to read CDATA when it's located in
    //  a new line, as per:
    // https://stackoverflow.com/questions/1736122/read-cdata-in-xml-from-javascript
    const cdataValue = thisItem?.firstChild?.wholeText?.trim();
    console.log(item[i].getElementsByTagName('title')[0])
    console.log(cdataValue)

    li.innerHTML =
      `
    <h3>${cdataValue}</h3>
        `

    list.appendChild(li)

  }

}