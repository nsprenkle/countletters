function countLetters(){
  var text = location.search.match(/\?data=(.*)/)[1];
  text = text.replace(/\+/g, '');
  text = text.toLowerCase();
  var char_count = new Object();
  var text_length = text.length;
  for(var i = 0; i < text_length; i++){
    char_count[text.charAt(i)] = 0;
  }
  for(var i = 0; i < text_length; i++){
    char_count[text.charAt(i)] += 1;
  }
  text = "";
  for(var eachProperty in char_count){
    text += eachProperty + " " + char_count[eachProperty] + "<br>";
  }
  document.getElementById("results").innerHTML += text;
}

