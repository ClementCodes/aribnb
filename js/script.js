fetch('activities.json')
    .then(response => response.json())
    .then(data => {
        data.map(element => {
           let left = document.getElementById('left')
let  integration =left.insertAdjacentHTML('afterbegin',`<div class="monument"><img src="${element.imageSrc}" alt="memorial Bordeaux" /> </div><div class="description"><h1>${element.title}</h1><h3>${element.address}, ${element.postalCode}</h3><p>${element.description}</p><div></div><span><button>${element.votes} Voter  <span>  &hearts;</span>   </button></span></div>`)
 
        });
    })
    .catch(error => console.log(error))
    fetch('activities.json')
    .then(response => response.json())
    .then(data => {
   

    })
    
    
    

  

