document.querySelector('button').addEventListener('click', go)

function go(){
fetch('https://data.nasa.gov/resource/gvk9-iz74.json')
.then(res => res.json())      // converts response into JSON
.then(data => {
    
    console.log(data.length, data)
    for(i=0; i<data.length; i++){
        let facilityLatitude = data[i].location.latitude
        let facilityLongitude = data[i].location.longitude
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${facilityLatitude},${facilityLongitude}?unitGroup=us&key=J5J7Y2VB6P2BFXH5PN6QFYLN2&contentType=json`)
        .then(res => res.json())      // converts response into JSON
        .then(dataTemp => {
            let temp = dataTemp.currentConditions.temp

            console.log(dataTemp, temp)
            list.innerText = facilityName + ': Current Temp: ' + temp + 'F'
            
        })


        let list = document.createElement('li')
        
        document.querySelector('ul').appendChild(list)
        let facilityName = data[i].center + ', City: ' + data[i].city 
    }
})
}


// fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/28.538331,-81.378879?unitGroup=us&key=GHM9B5TF7ZGENHB8AQJBV63TW&contentType=json`)
// .then(res => res.json())      // converts response into JSON
// .then(dataTemp => {
//     console.log(dataTemp, dataTemp.currentConditions.temp)
//     list.innerText = data[i].center + ', City: ' + data[i].city + ', Current Temp: ' + dataTemp.currentConditions.temp
// })
