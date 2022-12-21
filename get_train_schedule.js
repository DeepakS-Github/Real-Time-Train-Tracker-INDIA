let trainNo4 = document.querySelector("#trainNumber4");
let tbody4 = document.querySelector('#tableAppend4');


let button4 = document.querySelector('.submit-btn4');

let flag4 = true;

let resultBox4 = document.querySelector('.resultBox4');

button4.addEventListener('click',()=>{
    event.preventDefault(); // Stops webpage from reloading automatically after form submission
    
    console.log(trainNo4.value);

        if(trainNo4.value=="number"){
            alert("Please select train number");
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
                

        fetch(`https://irctc1.p.rapidapi.com/api/v1/getTrainSchedule?trainNo=${trainNo4.value}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);

                for(let i=0; i<response.data.route.length; i++){
                    if(response.data.route[i].stop==true){
                        let tr4 = document.createElement('tr');
                        tr4.innerHTML = `<td><a href="#">${response.data.route[i].day}</a></td><td class="amount">${response.data.route[i].station_name}</td><td class="amount">${response.data.route[i].state_name}</td>`;
                        tbody4.appendChild(tr4);
                    }
                }
                
            })
            .catch(err => console.error(err));



            // Show resultBox
            if(flag4){
                resultBox4.style.display = 'grid';
                flag4 = false;
            }


});

