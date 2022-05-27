const discografiaObj = [
  {
    id: 1,
    title: "Aromas del Lugar",
    year: 2001,
    place: "Córdoba y La Rioja",
    songs:[
      "Tu Recuerdo",
      "Un Canto Mejor",
      "En El Recuerdo",
      "Chacarera del Expediente",
      "Selección de Chayas",
      "Mi Árbol Niño",
      "Aire de Nostalgias",
      "La Pedro Cáceres",
      "La Escondida",
      "La Tristecita",
      "Plegaria",
      "Por la Huella"
    ],
    links: [
      {
      name:"Jamendo Music",
      path:"https://www.jamendo.com/album/108255/aromas-del-lugar?language=es"
      }
    ],
    img:"../fotos/aromas_del_lugar.jpg"
  },
  {
    id: 2,
    title: "Peregrinos",
    year: 2013,
    place: "Córdoba y La Rioja",
    songs:[
      "Peregrinos",
      "Sembrando Nostalgias",
      "Mi Infancia",
      "Te Propongo",
      "Zamba Para Bailar",
      "La Vidala Chayera",
      "Lo Que No Habia Previsto",
      "Abuelita Lorenza",
      "Zamba Del Cercador"
    ],
    links: [
      {
        name:"YouTube Music",
        path:"https://music.youtube.com/playlist?list=OLAK5uy_l5xlmGKa8ZhghPDxt7rDVF9y47E1u5DME&feature=share"
      },
      {
        name:"Spotify",
        path:"https://open.spotify.com/album/3EuXLUGFlW921DIvm8Rr2t?si=Nf7jkX9JR6afVB7ux2uCkA&dl_branch=1"
      }
    ],
    img:"../fotos/peregrinos.jpg"
  },
  {
    id: 3,
    title: "Cosecha",
    year: 2016,
    place: "Córdoba",
    songs:[
      "Fusil De Coplas",
      "De Sangre Cosecha Y Rebelion",
      "Victoria Enigma Y Razon",
      "Tu Recuerdo",
      "De Asequia en Luz",
      "Lunita Pirquinera",
      "Chacarera De Los Cumpas",
      "Montonereando",
      "Copla Chancada"
    ],
    links: [
      {
        name:"YouTube Music",
        path:"https://music.youtube.com/playlist?list=OLAK5uy_nL-Xp8QXTzylcP_PLOqC_2Zi6A0t0e9y4&feature=share"
      },
      {
        name:"Spotify",
        path:"https://open.spotify.com/album/6FGzQFrfTHMqSb1T1iIMqk?si=hbxC6b8gSYWqqrArK_6nyA&dl_branch=1"
      }
    ],
    img:"../fotos/cosecha.jpg"
  }
]


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
      <li>${songs[0] ? "1. "+songs[0] : ""}</li>
      <li>${songs[1] ? "2. "+songs[1] : ""}</li>
      <li>${songs[2] ? "3. "+songs[2] : ""}</li>
      <li>${songs[3] ? "4. "+songs[3] : ""}</li>
      <li>${songs[4] ? "5. "+songs[4] : ""}</li>
      <li>${songs[5] ? "6. "+songs[5] : ""}</li>
      <li>${songs[6] ? "7. "+songs[6] : ""}</li>
      <li>${songs[7] ? "8. "+songs[7] : ""}</li>
      <li>${songs[8] ? "9. "+songs[8] : ""}</li>
      <li>${songs[9] ? "10. "+songs[9] : ""}</li>
      <li>${songs[10] ? "11. "+songs[10] : ""}</li>
      <li>${songs[11] ? "12. "+songs[011] : ""}</li>
    </ul>
    <p><a href="${links[0].path}">${links[0].name}</a></p>
    <p><a href="${links[1] ? links[1].path : ""}">${links[1] ? links[1].name : ""}</a></p>
  `
  discografiaSection.appendChild(divDisco)
})
