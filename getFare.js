const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a1e0032c9amsh0c59e81fe5967c8p1e443bjsn602da0c29fd4', // Change rapidapi key here
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }
};


let trainNumber0 = document.getElementById("trainNumber0");
let fromCode0 = document.getElementById("fromCode");
let toCode0 = document.getElementById("toCode");

let btn0 = document.querySelector('.submit-btn0');

let flag0 = true;
let resultBox0 = document.querySelector('.resultBox0');

let tableAppend0 = document.getElementById('tableAppend0');
btn0.addEventListener('click',()=>{
    

    event.preventDefault(); // Stops webpage from reloading automatically after form submission

    console.log(trainNumber0.value);
    console.log(fromCode0.value);
    console.log(toCode0.value);

    let classType1 = document.getElementById('classType1');
    let classType1general = document.getElementById('classType1general');
    let classType1tatkal = document.getElementById('classType1tatkal');

    let classType2 = document.getElementById('classType2');
    let classType2general = document.getElementById('classType2general');
    let classType2tatkal = document.getElementById('classType2tatkal');

    let classType3 = document.getElementById('classType3');
    let classType3general = document.getElementById('classType3general');
    let classType3tatkal = document.getElementById('classType3tatkal');

    let classType4 = document.getElementById('classType4');
    let classType4general = document.getElementById('classType4general');
    let classType4tatkal = document.getElementById('classType4tatkal');

    if(trainNumber0.value=="number" || fromCode.value=="code" || toCode.value=="code"){
        alert("Please fill all the details");
    }

    else{
        // API Call



        fetch(`https://irctc1.p.rapidapi.com/api/v2/getFare?trainNo=${trainNumber0.value}&fromStationCode=${fromCode.value}&&toStationCode=${toCode.value}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if(response.data.general.length == 0 && response.data.tatkal.length == 0){
                    alert('No such train route exists');
                    return;
                }
                
                // Show resultBox
                if(flag0){
                    resultBox0.style.display = 'grid';
                    flag0 = false;
                }


                for(let i=0; i<response.data.general.length; i++){
                    let tr = document.createElement('tr');
                    tr.innerHTML = `<td><a href="#">${response.data.general[i].classType}</a></td><td class="amount">${response.data.general[i].fare}</td><td class="amount">${response.data.tatkal[i].fare}</td>`;
                    tableAppend0.appendChild(tr);
                }
            })
            .catch(err => console.error(err));
        }
    });

