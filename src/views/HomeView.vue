<template>
  <div class="container">
    <div class="row mt-5">
      <form action="">
        <h4>How is the weather?</h4>
        <div id="search-box" class="input-group">
            <input type="text" id="searchInput" class="form-control" area-label="Recipient's username" area-describedby="button-addon2" placeholder="City...">
            <button type="submit" class="btn btn-secondary" id="button-addon2">Search</button>
        </div>
      </form>
      <div class="box-content mt-5">
        <div id="city" class="result"></div>
        <div id="temp" class="result"></div>
        <div id="humidity" class="result"></div>
        <div id="wind" class="result"></div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    
      mounted() {
      const apikey='44c9a2bc2e37a86f7c2b1a6e75305f11'
      let weatherFunction = function(city) {
          let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
          fetch(url).then((reponse)=>reponse.json())
          .then((data) => {
              console.log(data);
              document.querySelector("#city").innerHTML =data.name
              document.querySelector("#temp").innerHTML ="<i class='fas fa-thermometer-half'></i> "+data.main.temp+'°'
              document.querySelector("#humidity").innerHTML ="<i class='fas fa-tint'></i> "+data.main.humidity+'%'
              document.querySelector("#wind").innerHTML ="<i class='fas fa-wind'></i> "+data.wind.speed+' km/h'
          })
          .catch((err)=>console.log("Error: ",+err))
      }
      document.querySelector('form').addEventListener('submit',function(element){
          element.preventDefault();
          let ville=document.querySelector('#searchInput').value;
          weatherFunction(ville);
      })
      weatherFunction('Rabat');
    }
  }
</script>

<style scoped>
  #search-box {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  #searchInput {
    background-color: rgba(154, 158, 172, 0.75);
  }
  .result {
    width: 300px;
    height: 55px;
    margin: 5px 10px;
    padding: 15px;
    border-radius: 5px;
    font-size: 1.3rem;
    color: white;
  }
  #city {
      background-color:rgba(52, 141, 201, 0.75);
  }
  #temp {
      margin-left: 20px;
      background-color: rgba(51, 83, 177, 0.75);
  }
  #humidity {
      margin-left: 30px;
      background-color: rgba(38, 135, 199, 0.75);
  }
  #wind {
      margin-left: 40px;
      background-color: rgba(154, 158, 172, 0.75);
  }

  @media(max-width: 780px) {
    .result {
      margin-top: 20px;
    }
  }


</style>
