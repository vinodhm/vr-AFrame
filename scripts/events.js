function registerIncreaseScore() {
    AFRAME.registerComponent('increasescore', {
        init: function () {			
          this.el.addEventListener('click', function () {
              hitCount = hitCount+1;                       
              var heightStyle="height: "+(hitCount*50)+"px;";
              window.frames["scoreframe"].document.getElementById("scorediv").style=heightStyle 
          });
        }
    });
}
