document.querySelector('button').addEventListener('click', getFetch)
let source = 'Source'

function getFetch(){
//  const choice = document.querySelector('input').value
  const url = 'https://uselessfacts.jsph.pl/random.json'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.language === "en") {
            let sourceUrl = data.source_url
            document.querySelector('h2').innerText = data.text
            document.querySelector('h3').innerHTML = source.link(sourceUrl)
        } else {
            getFetch()
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}