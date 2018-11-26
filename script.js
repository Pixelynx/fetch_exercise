document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelector('#button');
    let body = document.querySelector('body');

     const ranImg = (response) => {
       let randomImg = response.message;
       let img = document.createElement('img');
       img.src = randomImg;
       body.appendChild(img);
    }

     button.addEventListener('click', () => {
        fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => {
            return response.json();
          }).then(res => {
            return removeAndGet(res);
          })
      });

    const removeImg = () => {
      let img = document.querySelector('img');
      if(img) {
        img.remove();
      }
    }

    const removeAndGet = (img) => {
      removeImg();
      ranImg(img);
    }

});

// https://api.thecatapi.com/v1/images/:image_id
