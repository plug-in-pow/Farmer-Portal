var list_state = document.getElementById("list_state");
var list_city = document.getElementById("list_city");
var list_station = document.getElementById("list_station");
var submit = document.getElementById("submit");
const url = "/air_data";
// load state list
async function stt() {
  const response = await fetch("/air_data");
  const json = await response.json();
  var st = [];
  for (var i = 0; i <= 1000; i++) {
    st[i] = json[i].state;
  }
  var state = Array.from(new Set(st));

  var select = list_state,
    state;

  for (var i = 0; i <= state.length - 1; i++) {
    var option = document.createElement("option"),
      txt = document.createTextNode(state[i]);
    option.appendChild(txt);
    select.insertBefore(option, select.lastChild);
  }

  return;
}

list_state.onchange = async function() {
  const response = await fetch("/air_data");
  const json = await response.json();
  var ct = [];
  for (var i = 0; i <= 1000; i++) {
    if ($("#list_state").val() == json[i].state) ct[i] = json[i].city;
  }
  var city = Array.from(new Set(ct));

  var select = list_city,
    city;

  $("#list_city").empty();
  for (var i = 0; i <= city.length - 1; i++) {
    if (city[i] != undefined) {
      var option = document.createElement("option"),
        txt = document.createTextNode(city[i]);
      option.appendChild(txt);
      select.insertBefore(option, select.lastChild);
    }
  }

  return;
};

list_city.onchange = async function() {
  const response = await fetch("/air_data");
  const json = await response.json();
  var stat = [];
  for (var i = 0; i <= 1000; i++) {
    if ($("#list_city").val() == json[i].city) stat[i] = json[i].station;
  }
  var station = Array.from(new Set(stat));

  var select = list_station,
    station;

  $("#list_station").empty();
  for (var i = 0; i <= station.length - 1; i++) {
    if (station[i] != undefined) {
      var option = document.createElement("option"),
        txt = document.createTextNode(station[i]);
      option.appendChild(txt);
      select.insertBefore(option, select.lastChild);
    }
  }

  return;
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  stt();
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

submit.onclick = async function plot() {

    modal.style.display = "none";
  
    data = await getdata();
    console.log(data);
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data[1],
        datasets: [
          {
            label: "level of pollutant",
            data: data[0],
            backgroundColor: [],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

async function getdata(){
  var city = $("#list_city").val();
  var state = $("#list_state").val();
  var station = $("#list_station").val();

  const response = await fetch("/air_data");
  const json = await response.json();
  var y = [];
  var x = [];
  for (var i = 0; i <= 1000; i++) {
    if ($("#list_station: selected").val() == json[i].station) {
      x = json[i].pollutant_avg;
      y = json[i].pollutant_id;
    }
    var xx = Array.from(new Set(x));
    var yy = Array.from(new Set(y));

    return [xx,yy ];
}
}
