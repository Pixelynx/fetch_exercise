document.addEventListener('DOMContentLoaded', () => {

    fetch(`https://ghibliapi.herokuapp.com/films`)
    .then(res => {
      // debugger
      return res.json();
    }).then(films => {
      // debugger
      movieOptions(films);
    }).catch(err => console.log(err))


  const movieOptions = (films) => {
    let menu = document.querySelector('.menu');
    films.forEach((film) => {
      let option = document.createElement('option');
      option.innerHTML = film.title;
      menu.appendChild(option);
      })
      info(films);
      // debugger
    }

  const info = (films) => {
    let menu = document.querySelector('.menu');
    let body = document.querySelector('body');
    menu.addEventListener('change', (event) => {
      clear();

      let filmInfo = document.createElement('ul');
      let filmKeys = ['title', 'director', 'description', 'release_date', 'rt_score'];
      films.forEach(film => {
        filmKeys.forEach(key => {

        // debugger
          if (menu.value === film.title) {
          let li = document.createElement('li');
          li.innerText = `${key}: ${film[key] === undefined ? 'No Info' : film[key]}`;
          body.appendChild(filmInfo);
          filmInfo.appendChild(li);
          }
        })
      })
    })
  }

  const clear = () => {
    let ul = document.querySelector('ul');
    if(ul) {
      ul.remove();
    }
  }











})
