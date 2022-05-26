import discografiaObj from './data-disco';
console.log(discografiaObj)
discografiaObj.forEach( disco => {
  const { id, title, year, place, songs, links, img } = disco;
  
  const discografiaSection = document.querySelector(".discografia");
  const divDisco = document.createElement("div");
  divDisco.dataset.id = id
  divDisco.classList.add('disco')
  divDisco.innerHTML = `
    <h3 class="nombreDisco">${title}</h3>
    <h4 class="year">${year}</h4>
    <img src="${img}" alt="${title}">
    <p>Se grabó en ${place}</p>
    <ul class="songs">
      ${songs[0]}
    </ul>
    <p><a href="${links[0].path}"></a></p>
    <p><a href=""></a></p>
  `
  discografiaSection.appendChild(divDisco)
})
