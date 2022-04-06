function emailValidate(ev){
    if(ev.value.length < 3){
        document.getElementById('errMSG').innerHTML = 'Enter a valid Email'
        ev.focus();
        ev.select()
    }else{
        document.getElementById('errMSG').innerHTML = ''
    }
}

function changeColor(){
    let theInput = window.document.getElementById('emailInput')
    theInput.style.backgroundColor = 'rgb(163, 243, 243)';


    let thePasswordInput = document.getElementById('passwordInput')
    thePasswordInput.style.backgroundColor = 'rgb(163, 243, 243)'
}

function formValidate(ev){
    let theInput = document.getElementById('emailInput').value
    let chk = document.getElementById('chkBox').checked

    if(theInput === '' || chk == false){
        ev.preventDefault();
        document.getElementById('errMSG').innerHTML = 'Please Completed Information'
    }else{
        ev.target.submit()
    }

}

function load(){
    let queryString = location.search
    let queString = queryString.split('&')
    let writDiv = document.getElementById('content')
    if(queString != ''){
        //writDiv.innerHTML='<h3>Welcome ' + queString.slice(6) + ' <h3>'
        writDiv.innerHTML='<h3>Welcome ' + queString[0].split('=')[1] + ' <h3>'
        console.log(queString)
    }


}
