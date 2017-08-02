


function myButton1() {
  window.open("https://en.wikipedia.org/wiki/Special:Random");
  console.log("button1 works");
}

function myButton2() {
  var xyz = document.getElementById('searchWiki').value;
  console.log("button2 works");
  console.log(xyz);
  var wikiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + xyz + '&format=json&origin=*';
  console.log(wikiURL);
  var html = "";
  var itemArr = [];
  $.getJSON(
			{
				type: "GET",
				url: wikiURL,
				async: false,
				dataType: "json",
				success: function(data){
          console.log("button2 works inside getJSON");
            for(var j = 1; j <= data[1].length ; j++) {
              itemArr.push(new Array());
              for(var k = 1; k < data.length; k++) {
                console.log(data[k][j]);
                console.log("k" + k + "  " + "j" + j);
                var item = data[k][j];
                itemArr[j - 1].push(item);
              }
            }
            console.log(itemArr);


          //document.getElementById("message").innerHTML = html;
				}

			}


  );}
