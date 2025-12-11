const sites = [
  {name:"Netflix Mirror", url:"https://netflixmir.vercel.app/", desc:"A mirror of Netflix style site."},
  {name:"Streaming Site", url:"https://streamingsite.vercel.app/", desc:"Streaming site demo."},
  {name:"Mirror Site", url:"https://mirrorsite.vercel.app/", desc:"Another mirror site."},
];

const cardsContainer = document.getElementById('cardsContainer');
const consoleEl = document.getElementById('console');
const totalSitesEl = document.getElementById('totalSites');
const workingSitesEl = document.getElementById('workingSites');
const failedSitesEl = document.getElementById('failedSites');

let totalSites = sites.length;
let workingSites = 0;
let failedSites = 0;

totalSitesEl.textContent = totalSites;

sites.forEach(site => {
  // create card
  const card = document.createElement('a');
  card.href = site.url;
  card.target="_blank";
  card.className = 'card';
  card.innerHTML = `<h3>${site.name}</h3><p>${site.desc}</p><span class="status">Checking...</span>`;
  cardsContainer.appendChild(card);

  // check uptime
  fetch(site.url, {mode:'no-cors'})
    .then(() => {
      card.querySelector('.status').textContent = "✅ Online";
      workingSites++;
      workingSitesEl.textContent = workingSites;
    })
    .catch(() => {
      card.querySelector('.status').textContent = "❌ Offline";
      failedSites++;
      failedSitesEl.textContent = failedSites;
    });

  consoleEl.innerHTML += `<p>Added site: ${site.name}</p>`;
});

// optional: refresh status every 30 seconds
setInterval(() => {
  workingSites = 0;
  failedSites = 0;
  sites.forEach(site => {
    fetch(site.url, {mode:'no-cors'})
      .then(() => {workingSites++; workingSitesEl.textContent = workingSites;})
      .catch(()=> {failedSites++; failedSitesEl.textContent = failedSites;});
  });
}, 30000);
