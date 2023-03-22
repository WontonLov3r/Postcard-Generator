let states = document.getElementById('states')
states.onchange = function () {
    //Takes the number value of the states
    console.log('states index: ' + states.selectedIndex)

    //Applies the number value of the states and calls that state using the array with the value of the state
    console.log('states index: ' + states.options[states.selectedIndex].text)

    //Concatenates the string of the image producing the string : img/@2x.jpg with the actual value in the middle
    document.getElementById('postcard').style.backgroundImage = 'url(img/' + states.value + '@2x.jpg)'

    //select the innerHTML of element with hte ID "state-heading", and assign it with the value of the selected state from the drop down menu 
    document.getElementById('state-heading').innerHTML = states.options[states.selectedIndex].text


    document.getElementById('greeting').innerHTML = 'Greetings from: '


}








