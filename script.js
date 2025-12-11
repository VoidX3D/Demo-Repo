const sites = [
  {name:"Netflix Mirror", url:"https://netflixmir.vercel.app/", desc:"A mirror of Netflix style site.", preview:"https://i.imgur.com/9Q4N5pS.png"},
  {name:"Streaming Site", url:"https://streamingsite.vercel.app/", desc:"Streaming site demo.", preview:"https://i.imgur.com/9Q4N5pS.png"},
  {name:"Mirror Site", url:"https://mirrorsite.vercel.app/", desc:"Another mirror site.", preview:"https://i.imgur.com/9Q4N5pS.png"},
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

const onlineSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="green"><path d="M20 6L9 17l-5-5"/></svg>`;
const offlineSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="red"><path d="M6 6l12 12M6 18L18 6"/></svg>`;

// function to add card
sites.forEach(site => {
  const card = document.createElement('a');
  card.href = site.url;
  card.target="_blank";
  card.className='card';
  card.innerHTML = `
    <h3>${site.name}</h3>
    <p>${site.desc}</p>
    <span class="status">Checking...</span>
  `;
  card.style.backgroundImage = `url(${site.preview})`;
  cardsContainer.appendChild(card);

  // fetch the endpoint
  fetch(`https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec?url=${encodeURIComponent(site.url)}`)
    .then(r=>r.json())
    .then(data=>{
      card.querySelector('.status').innerHTML = data.status === 'success' ? `${onlineSVG} Online` : `${offlineSVG} Offline`;
      consoleEl.innerHTML += `<p>${site.name} JSON response: ${JSON.stringify(data)}</p>`;
      if(data.status==='success') workingSites++;
      else failedSites++;
      workingSitesEl.textContent=workingSites;
      failedSitesEl.textContent=failedSites;
    })
    .catch(err=>{
      card.querySelector('.status').innerHTML = `${offlineSVG} Offline`;
      failedSites++;
      failedSitesEl.textContent=failedSites;
      consoleEl.innerHTML += `<p>${site.name} fetch error: ${err}</p>`;
    });
});
