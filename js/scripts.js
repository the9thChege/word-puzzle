$(document).ready(function() {

  $("form#hisabati").submit(function(event) {
    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    var input = ($("#sentence").val());

    finalString = input.split('').map(function(letter) {
      vowels.forEach(function(vowel) {
        if (vowel === letter) {
          letter = "-";
        }
      });
      return letter;
    }).join("");

    $("#sentence").hide();

    $("#output").text(finalString);
    event.preventDefault();
  });
});
