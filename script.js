var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function() {
    var countryData = JSON.parse(request.response);
    console.log(countryData);
    var sumOfPopulation = 0;
    for(i in countryData) {
        sumOfPopulation = sumOfPopulation + countryData[i].population;
    }
    console.log("Total population countries " + sumOfPopulation);
}