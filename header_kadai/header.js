const Open = document.querySelector('.menu-open');
const Menu = document.querySelector('.rightlink');
const Close = document.querySelector('.close');
const Back = document.querySelector('.background');

Open.addEventListener('click', () => {
    Menu.classList.add('active');
    Back.classList.add('active');
});

Close.addEventListener('click', () => {
    Menu.classList.remove('active');
    Back.classList.remove('active');
});

const mediaQueryList = matchMedia('(max-width:991px)');

mediaQueryList.addEventListener('change', (e) => {
    if (e.matches) {
      //pare3
      document.querySelector('.rightlink').style.display = 'none';
      setTimeout(() => {
        document.querySelector('.rightlink').style.display = 'block';
      }, 100);
      //pare2
        // Menu.classList.add('size');
        // setTimeout(() => {
        //   Menu.classList.remove('size');
        // }, 200);
    } 
    //part3
    else {
      document.querySelector('.rightlink').style.display = 'flex';
      setTimeout(() => {
        document.querySelector('.rightlink').style.display = 'flex';
      }, 200);
    }
});

//part1
// class Resize {

//     constructor(target) {
//       this.timeoutId;
//       this.target = document.querySelector(target);
   
//        window.addEventListener("resize", this._resize.bind(this))
//      }
   
//      _resize() {
//        this.target.classList.add("is-resize");
//        clearTimeout(this.timeoutId);
       
//        this.timeoutId = setTimeout(() => {
//          this.target.classList.remove("is-resize");
//        }, 500);
//      }
   
//    }
 
//    new Resize("html");