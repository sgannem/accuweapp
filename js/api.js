function start() {
	alert("Hai");
	xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip=560078,IN&appid=db7a4d218f629612d92a9f4702c63ee4", true);
	xhttp.send();
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  var city = document.getElementById("name").value;
  var apiKey = "db7a4d218f629612d92a9f4702c63ee4";
  var owmUrl="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=metric";
  xhttp.onreadystatechange = function() {
	  console.log('test-onstatechange');
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML = this.responseText;
	  var res = JSON.parse(this.responseText);
	  // document.getElementById("data1").innerHTML = res.name+" -- "+res.main.temp+"&deg;C";
	  // document.getElementById("city1").innerHTML = res.name+" -- "+res.main.temp+"&deg;C";
	  // lD("city2", "Hyderabad");
	  // lD("city3", "Bengaluru");
	  // lD("city4", "Chennai");
	  // lD("city5", "Mumbai");
    document.getElementById("dataCity").innerHTML = res.name;
    document.getElementById("dataTemperature").innerHTML = res.main.temp;
    // var d = new Date(res.dt*1000);
    var d = moment(res.dt*1000).format("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(d.toString());
    document.getElementById("dataDate").innerHTML=d;
    }
  };
   console.log('test-before-open');
  xhttp.open("GET", owmUrl , true);
   console.log('test-after-open and calling send');
  xhttp.send();
  console.log('test-after send');
}

function lD(id, city) {
  var xhttp = new XMLHttpRequest();
  var apiKey = "db7a4d218f629612d92a9f4702c63ee4";
  var owmUrl="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=metric";
  console.log(id + " " + city);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML = this.responseText;
	  var res = JSON.parse(this.responseText);
	  document.getElementById(id).innerHTML = res.name+" -- "+res.main.temp+"&deg;C";
	  
    }
  };
  xhttp.open("GET", owmUrl , true);
  xhttp.send();
}