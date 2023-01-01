window.addEventListener('DOMContentLoaded',(event)=>{
    getVisitCount();
})
const functionAPI = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionAPI).then(response =>{
        return response.json;
    }).then(response => {
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerHTML = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}