var giphyApiKey= "key here"

function sendApiRequest(){
  var input = document.getElementById('input').value;
  // var newNode = document.createElement("div");
  // newNode.innerText = input;
  // document.body.appendChild(newNode);
  // console.log(newNode);

var giphyApiURL = `https://api.giphy.com/v1/gifs/search? q=${input}&api_key=${giphyApiKey}`;
console.log(giphyApiURL);

  fetch(giphyApiURL)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      var img = document.createElement("img");
      img.src = json["data"][0]["images"]["fixed_height"]["url"];
      document.body.appendChild(img);
    })
  }
