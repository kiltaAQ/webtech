const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}
cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('nav').classList.add('new-navbar-scroll');
  } else {
    document.querySelector('nav').classList.remove('new-navbar-scroll');
  }
}

function video1(){
  document.getElementsByTagName('body')[0].innerHTML='<video autoplay loop id="myVideo" ><source src="video/bogor.mp4" type="video/mp4"></video><nav><button class="myBtn myBtn-right" "><img src="images/arrow.png" alt=""></button></nav><style>#myVideo{position: fixed;right: 0;bottom: 0;min-width: 100%; min-height: 100%;} button{background-color: rgba(255, 254, 254, 0.5);color: white;position:fixed;width: 50px;height: 30px;border-radius: 5px;border: none;cursor: pointer;}button:hover{background: rgba(16, 172, 55, 0.959);}.myBtn-right{top: 8px;left: 18px;}img{width: 20px;color: #ddd;margin-top:5px;}</style>'
  const keluar = document.getElementsByTagName('button')[0];
  keluar.onclick=()=>{
    window.location.reload();
    console.log('berhasil keluar');
  }
}
function video2(){
  document.getElementsByTagName('body')[0].innerHTML='<video autoplay loop id="myVideo" ><source src="video/tangerang.mp4" type="video/mp4"></video><nav><button class="myBtn myBtn-right" "><img src="images/arrow.png" alt=""></button></nav><style>#myVideo{position: fixed;right: 0;bottom: 0;min-width: 100%; min-height: 100%;} button{background-color: rgba(255, 254, 254, 0.5);color: white;position:fixed;width: 50px;height: 30px;border-radius: 5px;border: none;cursor: pointer;}button:hover{background: rgba(16, 172, 55, 0.959);}.myBtn-right{top: 8px;left: 18px;}img{width: 20px;color: #ddd;margin-top:5px;}</style>'
  const keluar = document.getElementsByTagName('button')[0];
  keluar.onclick=()=>{
    window.location.reload();
    console.log('berhasil keluar');
  }
}
function video3(){
  document.getElementsByTagName('body')[0].innerHTML='<video autoplay loop id="myVideo" ><source src="video/bali.mp4" type="video/mp4"></video><nav><button class="myBtn myBtn-right" "><img src="images/arrow.png" alt=""></button></nav><style>#myVideo{position: fixed;right: 0;bottom: 0;min-width: 100%; min-height: 100%;} button{background-color: rgba(255, 254, 254, 0.5);color: white;position:fixed;width: 50px;height: 30px;border-radius: 5px;border: none;cursor: pointer;}button:hover{background: rgba(16, 172, 55, 0.959);}.myBtn-right{top: 8px;left: 18px;}img{width: 20px;color: #ddd;margin-top:5px;}</style>'
  const keluar = document.getElementsByTagName('button')[0];
  keluar.onclick=()=>{
    window.location.reload();
    console.log('berhasil keluar');
  }
}
function video4(){
  document.getElementsByTagName('body')[0].innerHTML='<video autoplay loop id="myVideo" ><source src="video/depok.mp4" type="video/mp4"></video><nav><button class="myBtn myBtn-right" "><img src="images/arrow.png" alt=""></button></nav><style>#myVideo{position: fixed;right: 0;bottom: 0;min-width: 100%; min-height: 100%;} button{background-color: rgba(255, 254, 254, 0.5);color: white;position:fixed;width: 50px;height: 30px;border-radius: 5px;border: none;cursor: pointer;}button:hover{background: rgba(16, 172, 55, 0.959);}.myBtn-right{top: 8px;left: 18px;}img{width: 20px;color: #ddd;margin-top:5px;}</style>'
  const keluar = document.getElementsByTagName('button')[0];
  keluar.onclick=()=>{
    window.location.reload();
    console.log('berhasil keluar');
  }
}
function video5(){
  document.getElementsByTagName('body')[0].innerHTML='<video autoplay loop id="myVideo" ><source src="video/aceh.mp4" type="video/mp4"></video><nav><button class="myBtn myBtn-right" "><img src="images/arrow.png" alt=""></button></nav><style>#myVideo{position: fixed;right: 0;bottom: 0;min-width: 100%; min-height: 100%;} button{background-color: rgba(255, 254, 254, 0.5);color: white;position:fixed;width: 50px;height: 30px;border-radius: 5px;border: none;cursor: pointer;}button:hover{background: rgba(16, 172, 55, 0.959);}.myBtn-right{top: 8px;left: 18px;}img{width: 20px;color: #ddd;margin-top:5px;}</style>'
  const keluar = document.getElementsByTagName('button')[0];
  keluar.onclick=()=>{
    window.location.reload();
    console.log('berhasil keluar');
  }
}
function video6(){
  document.getElementsByTagName('body')[0].innerHTML='<video autoplay loop id="myVideo" ><source src="video/jakarta.mp4" type="video/mp4"></video><nav><button class="myBtn myBtn-right" "><img src="images/arrow.png" alt=""></button></nav><style>#myVideo{position: fixed;right: 0;bottom: 0;min-width: 100%; min-height: 100%;} button{background-color: rgba(255, 254, 254, 0.5);color: white;position:fixed;width: 50px;height: 30px;border-radius: 5px;border: none;cursor: pointer;}button:hover{background: rgba(16, 172, 55, 0.959);}.myBtn-right{top: 8px;left: 18px;}img{width: 20px;color: #ddd;margin-top:5px;}</style>'
  const keluar = document.getElementsByTagName('button')[0];
  keluar.onclick=()=>{
    window.location.reload();
    console.log('berhasil keluar');
  }
}

// // const htmlBaru = document.querySelector('body').innerHTML='<video autoplay loop id="myVideo"><source src="video/aceh.mp4" type="video/mp4"></video><nav><button id="myBtn" onclick="myFunction()">Pause</button><button class="myBtn myBtn-right" onclick="goBack()"><img src="icon/arrow.png" alt=""></button><button class="myBtn myBtn-right"><img src="icon/volume.png" alt=""></button><button class="myBtn myBtn-left"><img src="icon/time.png" alt=""></button><button class="myBtn myBtn-left"><img src="icon/reload.png" alt=""></button><button class="myBtn myBtn-left"><img src="icon/rewind-button.png" alt=""></button></nav>';


