document.addEventListener("DOMContentLoaded", function() {
    
    let rootButton = document.getElementById('request-root')
    let pingButton = document.getElementById('request-ping')
    let pongButton = document.getElementById('request-pong')
    let countButton = document.getElementById('request-count')
    let timeButton = document.getElementById('request-time')
    let acharButton = document.getElementById('request-achar')
    let section = document.querySelector('section')
    rootButton.addEventListener('click', () =>{
        let request = axios.get('http://intro-ajax-api.herokuapp.com/').then(function(response){
            //
        })
    })
    pingButton.addEventListener('click', () =>{
        let request = axios.get('http://intro-ajax-api.herokuapp.com/ping').then(function(response){
            console.log(response.data)
            const dataElem = document.createElement('p')
            dataElem.innerHTML = response.data
            section.appendChild(dataElem)
        }).catch(function(response){
            const dataElem = document.createElement('p')
            dataElem.innerHTML = "500 Error: we'll try harder next time (PING)"
            section.appendChild(dataElem)
        }).then(function(response){
            const dataElem = document.createElement('p')
            dataElem.innerHTML = "Hey the Ping request Finished!"
            section.appendChild(dataElem)
        })
    })
    pongButton.addEventListener('click', () =>{
        let request = axios.get('http://intro-ajax-api.herokuapp.com/pong').then(function(response){
            //
        }).catch(function(response){
            const dataElem = document.createElement('p')
            dataElem.innerHTML = "500 Error: we'll try harder next time (PONG)"
            section.appendChild(dataElem)
        }).then(function(response){
            const dataElem = document.createElement('p')
            dataElem.innerHTML = "Hey the Pong request Finished!"
            section.appendChild(dataElem)
        })
    })
    countButton.addEventListener('click', () =>{
        let request = axios.get('http://intro-ajax-api.herokuapp.com/count').then(function(response){
            console.log(response.data)
            const dataElem = document.createElement('p')
            dataElem.innerHTML = `count = ${response.data}`
            section.appendChild(dataElem)
        }).catch(function(response){
            const dataElem = document.createElement('p')
            dataElem.innerHTML = "500 Error: we'll try harder next time (Count)"
            section.appendChild(dataElem)
        }).then(function(response){
            const dataElem = document.createElement('p')
            dataElem.innerHTML = "Hey the Count request Finished!"
            section.appendChild(dataElem)
        })
    })
    timeButton.addEventListener('click', () =>{
        let request = axios.get('http://intro-ajax-api.herokuapp.com/time', {params:{timezone:'America/Mexico_City'}}).then(function(response){
            console.log(response.data)
            const dataElem = document.createElement('p')
            dataElem.innerHTML = `Time = ${response.data}`
            section.appendChild(dataElem)
        }).catch(function(response){
            const dataElem = document.createElement('p')
            dataElem.innerHTML = "500 Error: we'll try harder next time (Time)"
            section.appendChild(dataElem)
        }).then(function(response){
            const dataElem = document.createElement('p')
            dataElem.innerHTML = "Hey the Time request Finished!"
            section.appendChild(dataElem)
        })
    })
    acarButton.addEventListener('click', () =>{
        let request = axios.get('http://intro-ajax-api.herokuapp.com/a_car').then(function(response){
            const dataElem = document.createElement('span')
            dataElem.innerHTML = response.data
            section.appendChild(dataElem)
        })
    })



});

