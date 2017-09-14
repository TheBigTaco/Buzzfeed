$(document).ready(function(){


  $("button#button1").click(function() {
    $("form#color").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=color]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=show]:checked").val());
      var scoreThree = parseInt($("input:radio[name=swallow]:checked").val());
      var scoreFour = parseInt($("input:radio[name=yesorno]:checked").val());
      $("form#color").slideToggle();
      $("form#show").slideToggle();
      event.preventDefault();
    });
  });
  $("button#button2").click(function() {
    $("form#show").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=color]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=show]:checked").val());
      var scoreThree = parseInt($("input:radio[name=swallow]:checked").val());
      var scoreFour = parseInt($("input:radio[name=yesorno]:checked").val());
      $("form#show").slideToggle();
      $("form#swallow").slideToggle();
      event.preventDefault();
    });
  });
  $("button#button3").click(function() {
    $("form#swallow").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=color]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=show]:checked").val());
      var scoreThree = parseInt($("input:radio[name=swallow]:checked").val());
      var scoreFour = parseInt($("input:radio[name=yesorno]:checked").val());
      $("form#swallow").slideToggle();
      $("form#yesorno").slideToggle();
      event.preventDefault();
    });
  });
  $("button#button4").click(function() {
    $("form#yesorno").submit(function(event){
      var scoreOne = parseInt($("input:radio[name=color]:checked").val());
      var scoreTwo = parseInt($("input:radio[name=show]:checked").val());
      var scoreThree = parseInt($("input:radio[name=swallow]:checked").val());
      var scoreFour = parseInt($("input:radio[name=yesorno]:checked").val());
      $("form#yesorno").slideToggle();
      $("form#results").slideToggle();
      $("#quiz").slideToggle();
      $("#buzz").slideToggle();
      event.preventDefault();
      var finalScore = scoreOne + scoreTwo + scoreThree + scoreFour;
      if (finalScore === 4) {
        var output = "How Privileged Are You?"
        $("#tom").show();
        $("#output").text(output);
      } else if (finalScore >=5 && finalScore <= 8) {
        var output = "Which Disney Princess Are You?"
        $("#devil").show();
        $("#output").text(output);
      } else if (finalScore >=9 && finalScore <= 12) {
        var output = "What's Your Real Age?"
        $("#prince").show();
        $("#output").text(output);
      } else {
        var output = "Which Harry Potter Character Are You?"
        $("#bird").show();
        $("#output").text(output);
        alert(scoreOne);
      }
    });
  });



});
