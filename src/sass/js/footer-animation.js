document.addEventListener('DOMContentLoaded', (event) => {
    myMove();
});


function myMove() {
    let elem = document.getElementById("myAnimation");
    let pos = 0;
    let image = document.getElementById("footerIce");
    let clientWidth = document.getElementById('container_fc').clientWidth;
    let imageSize = Math.round(clientWidth * 3 / 100);
    let id = null;
    image.style.width = imageSize + 'px';
    // console.log("i" + imageSize)
    // console.log("c"+ clientWidth)
    clientWidth = clientWidth - imageSize;
    
    if (clientWidth > 1240) {
        clientWidth = clientWidth - 12;
    }
    // console.log('sum ' + clientWidth)
        let toogleStick = 1;
        id = setInterval(frame, 10);
        function frame() {
          
          if (pos % clientWidth == 0) {
            toogleStick++;
          }
          if (toogleStick % 2 == 0) {
            pos++;
            elem.style.left = pos + 'px'
          }
          else {
            pos--;
            elem.style.left = pos + 'px';
          }

        };
};
  
