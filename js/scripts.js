$(document).ready(function() {
  $("button#woof").click(function() {
    $("ul#user").prepend('<li><img src="img/dog.jpg" alt="" width="100px"></li>');
    $("ul#webpage").prepend('<li><img src="img/cat.jpg" alt="" width="100px"></li>');

    $("ul#user").children("li").first().click(function()  {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function()  {
      $(this).remove();
    });
  });

  $("button#meow").click(function() {
    $("ul#user").prepend('<li><img src="img/cat.jpg" alt="" width="100px"></li>');
    $("ul#webpage").prepend('<li><img src="img/dog.jpg" alt="" width="100px"></li>');
    $("ul#user").children("li").first().click(function()  {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function()  {
      $(this).remove();
    });

});
});
