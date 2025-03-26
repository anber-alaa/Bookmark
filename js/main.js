var siteName = document.getElementById('siteName')
var siteUrl = document.getElementById('siteUrl')
var submitBtn = document.getElementById('submitBtn')

var list = []
// Read or Retrive
list = JSON.parse(localStorage.getItem('list')) || [] // ---> || [] to ensure that not return null when the local storage is empty
displayData()

// Create
function addSite(){
    
    if(validationInputs(siteName ,'msgName')&& validationInputs(siteUrl , 'msgUrl')){
        var newSite = {
            name: siteName.value ,
            website: siteUrl.value
        }
        
        list.push(newSite);
        localStorage.setItem('list',JSON.stringify(list))
        clearInputs();
        displayData();
        console.log(list)
        document.getElementById('alertMsg').classList.add('d-none')

    }else{
        document.getElementById('alertMsg').classList.remove('d-none')
    }
}

//! display data
function displayData(){
    var cartona =''
    for(var i =0 ; i < list.length ; i++){
        cartona += `
            <tr>
                <td>${i+1}</td>
                <td>${list[i].name}</td>
                <td><a href="${list[i].website}" target="_blank" onclick="viewSite(${i})" class="btn" id="viewBtn"><i class="fa-solid fa-eye"></i>  View</a></td>
                <td><button onclick ="deleteSite(${i})" class="btn" id="deleteBtn"><i class="fa-solid fa-trash"></i> delete</button></td>
            </tr>
        `
    }
    document.getElementById('tableBody').innerHTML = cartona;
}

//!clear
function clearInputs(){
    siteName.value ='';
    siteUrl.value ='';
    siteName.classList.remove('is-valid');
    siteUrl.classList.remove('is-valid')
}

// Update

// Delete
function deleteSite(index){
    list.splice(index , 1)
    localStorage.setItem('list',JSON.stringify(list))
    displayData()
}




//!validation


function validationInputs(element , msgID){
    var text = element.value
    var message =document.getElementById(msgID)
    var regex ={
        siteName: /^[A-Z][a-zA-Z0-9_ -]{3,80}$/ ,
        siteUrl: /^(https|http)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)$/ ,
    }
    
    if(regex[element.id].test(text)){
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        message.classList.remove('d-none')
        message.classList.add('d-none')
        return true

    }else{
        element.classList.add('is-invalid')
        element.classList.remove('is-valid')
        message.classList.remove('d-none')
        return false
    }
}


