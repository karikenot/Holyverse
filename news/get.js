const cCardTemplate = document.querySelector("[data-c-temp]")
const cCardContainer = document.querySelector("[data-c-card-cont]")

fetch('/assets/json/news.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(article => {
            const card = cCardTemplate.content.cloneNode(true).children[0]
            const link = card.querySelector("[data-link]")
            const pic = card.querySelector("[data-pic]")
            const title = card.querySelector("[data-title]")
            const source = card.querySelector("[data-source]")
            link.href=article.link
            pic.src=article.pic
            title.textContent=article.title
            source.textContent=article.source
            cCardContainer.append(card)
        })
      })