$(document).ready(function () {
  $("#mail").click(function () {
    window.open("mailto:lynicis@kodsuzm.com");
  });
  $("#github").click(function () {
    window.open("https://github.com/lynicis", "_blank");
  });
  $("#twitter").click(function () {
    window.open("https://twitter.com/lynicis", "_blank");
  });
  var mode="dark";
  $("#changeMode").click(function() {
      if(mode == "dark"){
          $("body").css({
            'background': 'black',
            'color': 'white'
          });
          $(".line").css({
            "background": "grey",
            "color": "grey"
          });
          return mode="white";
      } else if(mode == "white") {
        $("body").css({
          'background': 'white',
          'color': 'black'
        });
        $(".line").css({
          "background": "none",
          "color": "none"
        });
          return mode="dark";
      }
  });
});
