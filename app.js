


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
            for(var j = 0; j < data[1].length ; j++) {
              itemArr.push(new Array());
              for(var k = 0; k < data.length; k++) {
                //console.log(data[k][j]);
                //console.log("k" + k + "  " + "j" + j);
                var item = data[k][j];
                itemArr[j].push(item);
              }
            }

          for (var m = 0; m < itemArr.length; m++) {
            html += '<div class="item">';
            console.log("inside first for loop to generate html");
            for (var n = 1; n < itemArr[m].length; n++) {
              //console.log(itemArr[m][n]);
               if ( n == 3 ) {
                 html += '<a href="';
                 html += itemArr[m][n];
                 html += '" target="_blank">Wikipedia Article</a>';

               } else {

                 html += '<p>';
                 html += itemArr[m][n];
                 html += '</p>';
               }

            }
              html += '</div>';
              html += '<br>';
          }
          console.log(itemArr);
          document.getElementById("postHTML").innerHTML = html;
				}

			}


  );}
