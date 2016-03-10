function findParameters(parameter){
  //cut out the question mark at the beginning of the query string
  var queryString = window.location.search.substring(1);
  var variables = queryString.split("&");
  for(var i = 0; i < variables.length; i++){
    var pair = variables[i].split("=");
    if(pair[0] == parameter){
      return pair[1];
    }
  }
  return (false);
}

function countLetters(){
  var textIn = findParameters("data");
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
