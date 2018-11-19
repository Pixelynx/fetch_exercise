document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelector('#button');
    let body = document.querySelector('body');

     const ranImg = () => {
        xml.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
        xml.send();
    }

     button.addEventListener('click', () => {
            ranImg();
      });

    let xml = new XMLHttpRequest();

    //
    const getImg = (img) => {
      let imgNode = document.createElement('img');
      imgNode.src = img;
      body.appendChild(imgNode);

    }

    const removeImg = () => {
      let img = document.querySelector('img');
      if(img) {
        img.remove();
      }
    }

    const removeAndGet = (img) => {
      removeImg();
      getImg(img);
    }

     xml.onreadystatechange = function() {
        if(xml.readyState ===  4) {
            if(xml.status === 200) {
                let ran_Img = JSON.parse(xml.response)['message'];
                removeAndGet(ran_Img);
            } else {
              console.log('Whoops!');
            }
        }
    };
});

// https://api.thecatapi.com/v1/images/:image_id
