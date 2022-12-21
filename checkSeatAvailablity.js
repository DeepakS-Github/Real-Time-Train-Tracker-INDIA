let classType2 = document.querySelector('#classType2');
let fromCode2 = document.querySelector('#fromCode2');
let quota2 = document.querySelector('#quota2');
let toCode2 = document.querySelector('#toCode2');
let trainNumber2 = document.querySelector('#trainNumber2');
let date2 = document.querySelector('#date2');


let tableAppend2= document.querySelector('#tableAppend2');

let submitbtn2 = document.querySelector('.submit-btn2');

let flag2 = true;
let resultBox2 = document.querySelector('.resultBox2');

submitbtn2.addEventListener('click',()=>{
    event.preventDefault(); // Stops webpage from reloading automatically after form submission

        if(classType2.value=="class" || fromCode2=="code" || quota2=="quota" || toCode2=="code" || trainNumber2=="number" || date2=="date"){
            alert("Please fill all the details");
            return;
        }

        
        // API Call

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a1e0032c9amsh0c59e81fe5967c8p1e443bjsn602da0c29fd4', // Change rapidapi key here
                'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
            }
        };


        fetch(`https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability?classType=${classType2.value}&fromStationCode=${fromCode2.value}&quota=${quota2.value}&toStationCode=${toCode2.value}&trainNo=${trainNumber2.value}&date=${date2.value}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                for(let i=0; i<response.data.length-1; i++){
                    let tr = document.createElement('tr');
                    tr.innerHTML = `<td><a href="#">${response.data[i].date}</a></td><td class="amount">${response.data[i].confirm_probability_percent}%</td><td class="amount">${response.data[i].current_status}</td>`;
                    
                    if(response.data[i].confirm_probability_percent==undefined){
                        tr.innerHTML = `<td><a href="#">${response.data[i].date}</a></td><td class="amount high">100%</td><td class="amount">${response.data[i].current_status}</td>`;
                    }

                    if(response.data[i].confirm_probability_percent>="85"){
                        tr.innerHTML = `<td><a href="#">${response.data[i].date}</a></td><td class="amount high">${response.data[i].confirm_probability_percent}%</td><td class="amount">${response.data[i].current_status}</td>`;
                    }
                    else if(response.data[i].confirm_probability_percent>="75" || response.data[i].confirm_probability_percent<"85"){
                        tr.innerHTML = `<td><a href="#">${response.data[i].date}</a></td><td class="amount mid">${response.data[i].confirm_probability_percent}%</td><td class="amount">${response.data[i].current_status}</td>`;
                    }
                    else if(response.data[i].confirm_probability_percent<"75"){
                        tr.innerHTML = `<td><a href="#">${response.data[i].date}</a></td><td class="amount low">${response.data[i].confirm_probability_percent}%</td><td class="amount">${response.data[i].current_status}</td>`;
                    }

                    console.log(tr);

                    tableAppend2.appendChild(tr);
                }
            })
            .catch(err => console.error(err));



            // Show resultBox
            if(flag2){
                resultBox2.style.display = 'grid';
                flag2 = false;
            }


});

