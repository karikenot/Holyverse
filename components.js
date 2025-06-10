// header
class THeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="headcontain sticky">
        <header class="nosel ">
        <a href="/index.html"><img src="/assets/img/logo.webp" alt="Logo Holyverse" class="logo"></a>
        <a href="/index.html"><img src="/favicon.ico" alt="Logo Holyverse" class="logosm"></a>
        <nav>
            <a href="/list.html" class="navlink">List Negara</a>
            <a href="/news.html" class="navlink">Berita</a>
            <a href="https://hvtime.krizknt.icu/" class="navlink">Waktu</a>
            <a href="https://discord.gg/tdCVJf9G" class="navbtn navlink">Join</a>
        </nav>
    </header>
    </div>
    `;
  }
}
customElements.define("t-header", THeader);

// footer
class TFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
        <img src="/assets/hv.ico" alt="" class="imgfoot">
        <p>Copyright &copy; 2025 Holyverse. All rights reserved.</p>
    </footer>
    `;
  }
}
customElements.define("t-footer", TFooter);

// card
class TCard extends HTMLElement {
  connectedCallback() {
    const link =this.getAttribute("link");
    const flag =this.getAttribute("flag");
    const name =this.getAttribute("name");
    const owner =this.getAttribute("owner");
    const desc =this.getAttribute("desc");

    this.innerHTML = `
    <div class="c-card">
        <a class="t-card" href="${link}">
            <img src="${flag}">
            <h3 class="t-card">${name}</h3>
            <p class="owner t-card">${owner}</p>
            <p class="t-card">${desc}</p>
        </a>
      </div>
    `;
  }
}
customElements.define("t-card", TCard);