const request = require('request')



const forecast = (latitude,longitude,callback) => {
    const url = "https://api.darksky.net/forecast/9c9a531510912ab83035dfb5adb666da/"+encodeURIComponent(latitude)+","+encodeURIComponent(longitude)+"?units=si"

request({ url,json:true},(error,{body} = {}) => {
    if(error){
        callback("Unable to connect to weather service!",undefined)
    }else if(body.error){
        callback("Unable to find the location!",undefined)
    }else{
        callback(undefined, body.daily.data[0].summary + "It is currently " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + "% chanse of rain")
    }
})
}

module.exports = forecast