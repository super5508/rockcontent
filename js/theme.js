$(document).ready(function(){
  var open = false;
  var toggle = $('.logo1')[0];
  // console.log(toggle);
  // toggle.addEventListener("click", function() {
  //   console.log('click');
  // });
  toggle.addEventListener("click", function() {
    console.log('click');
    var sidebar = $('.sidebar')[0];
    var content = $('.page-content')[0];
    if ( open === true ) {
      sidebar.classList.remove("expanded");
      content.classList.remove("expanded");
    } else {
      sidebar.classList.add("expanded");
      content.classList.add("expanded");
    }
    open = !open;
  });
});