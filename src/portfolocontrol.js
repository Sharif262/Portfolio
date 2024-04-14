<div class="down-symbol">
  <a id="down-arrow" href="#about">
    <i class="fa-solid fa-chevron-down"></i>
  </a>
</div>

window.addEventListener('scroll', function() {
    var downArrow = document.getElementById('down-arrow');
    var aboutSection = document.getElementById('about').offsetTop;
    var currentScrollPosition = window.pageYOffset;
  
    if (currentScrollPosition >= aboutSection) {
      downArrow.href = "#home"; // change this to the id of the next section
    } else {
      downArrow.href = "#about";
    }
  });