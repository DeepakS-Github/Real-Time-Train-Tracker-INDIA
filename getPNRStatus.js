const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a1e0032c9amsh0c59e81fe5967c8p1e443bjsn602da0c29fd4', // Change rapidapi key here
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }
};


let PNRNo3 = document.querySelector("#PNRNo3");
let tbody3 = document.querySelector('#tableAppend3');


let button3 = document.querySelector('.submit-btn3');

let flag3 = true;

let resultBox3 = document.querySelector('.resultBox3');

button3.addEventListener('click',()=>{
    event.preventDefault(); // Stops webpage from reloading automatically after form submission
    
    console.log(PNRNo3.value);

        if(PNRNo3.value.length!=10){
            alert("Please enter PNR number");
            return;
        }
       
        
        // API Call
        
        fetch(`https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${PNRNo3.value}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);

                tbody3.getElementsByTagName('tr')[0].getElementsByTagName('td')[1].innerText = `${response.data.TrainNo}`;
                tbody3.getElementsByTagName('tr')[1].getElementsByTagName('td')[1].innerText = `${response.data.TrainName}`;
                tbody3.getElementsByTagName('tr')[2].getElementsByTagName('td')[1].innerText = `${response.data.PassengerStatus[0].CurrentStatusNew}`;
                tbody3.getElementsByTagName('tr')[3].getElementsByTagName('td')[1].innerText = `${response.data.PassengerStatus[0].CurrentBerthNo}`;
                tbody3.getElementsByTagName('tr')[4].getElementsByTagName('td')[1].innerText = `${response.data.PassengerStatus[0].CurrentCoachId}`;
                tbody3.getElementsByTagName('tr')[5].getElementsByTagName('td')[1].innerText = `${response.data.BookingDate}`;
                tbody3.getElementsByTagName('tr')[6].getElementsByTagName('td')[1].innerText = `${response.data.SourceDoj}`;
                tbody3.getElementsByTagName('tr')[7].getElementsByTagName('td')[1].innerText = `${response.data.DepartureTime}`;
                tbody3.getElementsByTagName('tr')[8].getElementsByTagName('td')[1].innerText = `${response.data.DestinationDoj}`;
                tbody3.getElementsByTagName('tr')[9].getElementsByTagName('td')[1].innerText = `${response.data.ArrivalTime}`;
                tbody3.getElementsByTagName('tr')[10].getElementsByTagName('td')[1].innerText = `${response.data.Duration}`;
                tbody3.getElementsByTagName('tr')[11].getElementsByTagName('td')[1].innerText = `${response.data.ExpectedPlatformNo}`;
                tbody3.getElementsByTagName('tr')[12].getElementsByTagName('td')[1].innerText = `${response.data.BookingFare}`;
                tbody3.getElementsByTagName('tr')[13].getElementsByTagName('td')[1].innerText = `${response.data.TicketFare}`;
                
            })
            .catch(err => console.error(err));



            // Show resultBox
            if(flag3){
                resultBox3.style.display = 'grid';
                flag3 = false;
            }


});

