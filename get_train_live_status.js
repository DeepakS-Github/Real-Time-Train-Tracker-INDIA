const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a1e0032c9amsh0c59e81fe5967c8p1e443bjsn602da0c29fd4', // Change rapidapi key here
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }
};
  

let trainNo5 = document.querySelector("#trainNumber5");
let tbody5 = document.querySelector('#tableAppend5');


let button5 = document.querySelector('.submit-btn5');

let flag5 = true;

let stMap = new Map([
    ["BJU", "Barauni Junction"],
    ["BDTS", "Bandra Terminus"]
]);

let resultBox5 = document.querySelector('.resultBox5');

button5.addEventListener('click',()=>{
    event.preventDefault(); // Stops webpage from reloading automatically after form submission
    
    console.log(trainNo5.value);

        if(trainNo5.value=="number"){
            alert("Please select train number");
            return;
        }

        
        // API Call

        fetch(`https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus?trainNo=${trainNo5.value}&startDay=1`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);

                let CurrStName = response.data.current_station_name;
                let CName = CurrStName.slice(0,CurrStName.length-1);
                
                tbody5.getElementsByTagName('tr')[0].getElementsByTagName('td')[1].innerText = `${response.data.update_time}`;
                tbody5.getElementsByTagName('tr')[1].getElementsByTagName('td')[1].innerText = `${stMap.get(response.data.source)}`;
                tbody5.getElementsByTagName('tr')[2].getElementsByTagName('td')[1].innerText = `${stMap.get(response.data.destination)}`;
                tbody5.getElementsByTagName('tr')[3].getElementsByTagName('td')[1].innerText = `${response.data.total_distance}km`;
                tbody5.getElementsByTagName('tr')[4].getElementsByTagName('td')[1].innerText = `${response.data.distance_from_source}km`;
                tbody5.getElementsByTagName('tr')[5].getElementsByTagName('td')[1].innerText = `${CName}`;
                tbody5.getElementsByTagName('tr')[6].getElementsByTagName('td')[1].innerText = `${response.data.current_state_code}`;

                for(let i=0; i<response.data.current_location_info.length; i++){
                    let tr5 = document.createElement('tr');
                    tr5.innerHTML = `<td><a href="#">Message${i+1}</a></td><td class="amount">${response.data.current_location_info[i].readable_message}</td>`;
                    tbody5.appendChild(tr5);
                }
                
            })
            .catch(err => console.error(err));



            // Show resultBox
            if(flag5){
                resultBox5.style.display = 'grid';
                flag5 = false;
            }


});

