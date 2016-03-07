function countLetters(){
  var textIn = location.search.match(/data=(.*)/)[1];
  textIn = textIn.replace(/\+/g, '');
  if(window.location.href.indexOf("caps=1") == -1){
    textIn = textIn.toLowerCase();
  }
  textIn = decodeURIComponent(textIn)
  var char_count = new Object();
  var textIn_length = textIn.length;
  for(var i = 0; i < textIn_length; i++){
    char_count[textIn.charAt(i)] = 0;
  }
  for(var i = 0; i < textIn_length; i++){
    char_count[textIn.charAt(i)] += 1;
  }
  textIn = "";
  for(var eachProperty in char_count){
    textIn += eachProperty + " " + char_count[eachProperty] + "<br>";
  }
  document.getElementById("results").innerHTML += textIn;
}

