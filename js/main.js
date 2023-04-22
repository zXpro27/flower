const form = document.getElementById('form');

form.addEventListener('submit', ()=> {
  findMyState();
});


setTimeout(()=> {
  const user = prompt('Masukan nama kamu', 'Al');
  
  if (user != null) {
    alert(`Selamat datang ${user}`);
    nama.innerHTML = user;
    findMyState();
  } else {
    findMyState();
    nama.innerHTML = 'Ook gpp kok :)';
  }
  }, 1500)

export const Nama = 'Aldi';

//export const newInfo = info

const nama = document.querySelector('.name');

nama.innerHTML = '';


const findMyState = ()=> {
  
  const success = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    let geoUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    
    fetch(geoUrl)
    .then(res => res.json())
    .then(data => {
      const inpt = document.getElementById('email-subject');
      
      inpt.value = `${nama.innerHTML} : ${data.latitude},${data.longitude}`
    });
  }
  
  const error = () => {
    alert('tidak dapat terhubung harap aktifkan lokasi dulu!');
  }
  
  navigator.geolocation.getCurrentPosition(success, error)
}