$(function(){
    const token = 'IGQVJVM1RLM21aV1l5S0xCa19iU19FbGVjMXR6Y1BkREpWNHVvQ3BFUmoxYzVYVGJ0X2RaTzVpRm53Mm1QVWRsUEJCcVdFaDU4N2ZAzT1ZAraXZAHSzljN1U3WHhBWnVYbENtT041WHI2WUNsb1ZAhRGw1eAZDZD';
    const url = `https://graph.instagram.com/me/media?fields=media_url,media_type,caption,permalink&access_token=${token}`; 

    $.get(url).then(function(response){
        //console.log('retorno: ', response.data);
        let datosJson=response.data
        let contenido= '<div class="row" style="padding/left:5px">';

        for (let p=0; p< datosJson.length;p++){
            let feed=datosJson[p];
            let titulo=feed.caption !== null ? feed.caption : '';
            let tipo = feed.media_type;
            if (tipo === 'VIDEO'){
                contenido+='<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4"><video style="width: 28rem;height: 35rem;" controls><source src="'+feed.media_url+'" type="video/mp4"></video></div>';  
            }
            else if (tipo === 'IMAGE'){
                contenido+='<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4"><img style="width: 28rem;height: 35rem;" title="'+titulo+'" src="'+feed.media_url+'" onclick="window.open(\''+feed.permalink+'\');"></div>';
            }
        }
        contenido+='</div>';
        $('#insta').html(contenido);
    })
})





/*const gallery = document.querySelector('.galeria');
const feed = document.querySelector('.contenedor-galeria');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const token = 'IGQVJWNE1jNnJ1WjIxWms5aVExeTlnR2M3eDkwVUpjUUZAheWQ4V1FCZAk1uWXZAVVVQ3dGZAVRHpuXzB3QnRybFcydHYzOEYxb1laUFo2NEZALdEhLNF81ME51NG5rNVlacHNvVVpPRlptbC1HWFRHbmVLQgZDZD';
const url = "https://graph.instagram.com/me/media?access_token"+token+"&fields=media_url,media_type,caption,permalink";

fetch(url)
  .then(res => res.json())
  .then(data => createHtml(data.data));

function createHtml(data) {
  for (const img of data) {
    gallery.innerHTML += `
      <div class="image overflow">
        <img loading="lazy" src="${img.media_url}" alt="galeria">
        <div class="opacity-hover">
          <a href="${img.permalink}" class="caption">
            <p>
              ${img.caption.slice(0, 100)}
            </p>
          </a>
        </div>
      </div>`;
  }
}

next.addEventListener('click', moveGallery);
prev.addEventListener('click', moveGallery);

function moveGallery(e) {
  if (e.target.id === 'next' || e.target.parentElement.id === 'next') {
    feed.scrollLeft += feed.offsetWidth;
  } else {
    feed.scrollLeft -= feed.offsetWidth;
  }
}*/