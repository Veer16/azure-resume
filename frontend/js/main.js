window.addEventListener('DOMContentLoaded',(event)=>{
    getVisitCount();
});
const functionApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApiUrlProd = "https://azureresumeapp.azurewebsites.net/api/GetResumeCounter?code=kAYlrounCA5uGIRpGPKeKwzrdCy8QTTkxFRku9sZ_SOMAzFujqRusQ==";

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrlProd)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
        console.log("this is the error section")
      });
    return count;
}

/*
Deploy the Azure funstion and get the function URL 
Update the JS Code with the new Azure Function URL 
Deploy the website to the Blob storage 
Setup Azure CDN for HTTPs support
Setip custom domain 

*/