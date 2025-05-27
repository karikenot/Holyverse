const cCardTemplate = document.querySelector("[data-c-temp]")
const cCardContainer = document.querySelector("[data-c-card-cont]")

fetch('/assets/json/list.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(country => {
            const card = cCardTemplate.content.cloneNode(true).children[0]
            const link = card.querySelector("[data-link]")
            const flag = card.querySelector("[data-flag]")
            const name = card.querySelector("[data-name]")
            const owner = card.querySelector("[data-owner]")
            const desc = card.querySelector("[data-desc]")
            link.href=country.link
            flag.src=country.flag
            name.textContent=country.name
            owner.textContent=country.owner
            desc.textContent=country.desc
            cCardContainer.append(card)
        })
      })