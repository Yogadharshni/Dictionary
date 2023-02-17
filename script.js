var inputbox=document.querySelector('.inp');
var searchButton=document.querySelector('.btn');
var outputbox=document.querySelector('.display');

searchButton.addEventListener('click',()=>{
  var input=inputbox.value.toLowerCase();
    if(input != ""){
       fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
       .then(resp=>resp.json())
       .then((data)=>{
        outputbox.innerText =`${data[0].meanings[0].definitions[0].definition}`
       })
       .catch((err)=>{
        alert('Please Enter a Valid Word');
        outputbox.innerText ='Please Enter a Valid Word';
       });
    }
    else{
        outputbox.innerText = "Please Enter a word";
    }
})

//code for enter key
inputbox.addEventListener("keypress",(event)=>{
     if(event.key == 'Enter'){
        var input=inputbox.value.toLowerCase();
     if(input != ""){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
        .then(resp=>resp.json())
        .then((data)=>{
         outputbox.innerText =`${data[0].meanings[0].definitions[0].definition}`
        })
        .catch((err)=>{
         alert('Please Enter a Valid Word');
         outputbox.innerText ='Please Enter a Valid Word';
        });
     }
     else{
         outputbox.innerText = "Please Enter a word";
     }
     }
});





