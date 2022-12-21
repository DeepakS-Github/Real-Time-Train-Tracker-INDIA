let trainNo7 = document.querySelector("#trainNumber7");
let tbody7 = document.querySelector('#tableAppend7');


let button7 = document.querySelector('.submit-btn7');

let flag7 = true;

let resultBox7 = document.querySelector('.resultBox7');

button7.addEventListener('click',()=>{
    event.preventDefault(); // Stops webpage from reloading automatically after form submission
    
    console.log(trainNo7.value);

        if(trainNo7.value=="number"){
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
        
        

        
        fetch(`https://irctc1.p.rapidapi.com/api/v1/searchTrain?query=${trainNo7.value}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);

                let SDT = `${response.data[0].train_name}`;

                // Find the index of the first lowercase letter
                let index = SDT.search(/[a-z]/);

                // Use slice to extract the part of the string before the index
                let route = SDT.slice(0, index-2);
                let SD = SDT.slice(index-1, SDT.length-1);

                tbody7.getElementsByTagName('tr')[0].getElementsByTagName('td')[1].innerText = `${response.data[0].train_number}`;
                tbody7.getElementsByTagName('tr')[1].getElementsByTagName('td')[1].innerText = `${SD}`;
                tbody7.getElementsByTagName('tr')[2].getElementsByTagName('td')[1].innerText = `${route}`;
                tbody7.getElementsByTagName('tr')[3].getElementsByTagName('td')[1].innerText = `${response.data[0].new_train_number}`;
                
            })
            .catch(err => console.error(err));



            // Show resultBox
            if(flag7){
                resultBox7.style.display = 'grid';
                flag7 = false;
            }


});

