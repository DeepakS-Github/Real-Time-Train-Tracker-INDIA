const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a1e0032c9amsh0c59e81fe5967c8p1e443bjsn602da0c29fd4', // Change rapidapi key here
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }
};


let trainNo = document.querySelector("#trainNumber1");
let tbody = document.querySelector('#tableAppend');

const trainClass = new Map([
    ["1A", "First AC"],
    ["EA", "Executive Anubhati"],
    ["EC", "AC Executive Class"],
    ["2A", "Second AC"],
    ["FC", "First Class"],
    ["3A", "Third AC"],
    ["3E", "Third AC Economy"],
    ["CC", "AC Chair Car"],
    ["SL", "Sleeper"],
]);

let button = document.querySelector('.submit-btn1');

let flag1 = true;

let resultBox1 = document.querySelector('.resultBox1');

button.addEventListener('click',()=>{
    event.preventDefault(); // Stops webpage from reloading automatically after form submission
    console.log(trainNo.value);

        if(trainNo.value=="number"){
            alert("Please select train number");
            return;
        }

        
        // API Call

        fetch(`https://irctc1.p.rapidapi.com/api/v1/getTrainClasses?trainNo=${trainNo.value}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                for(let i=0; i<response.data.length; i++){
                    let tr = document.createElement('tr');
                    tr.innerHTML = `<td><a href="#">${response.data[i]}</a></td><td class="amount">${trainClass.get(response.data[i])}</td>`;
                    tbody.appendChild(tr);
                }
            })
            .catch(err => console.error(err));



            // Show resultBox
            if(flag1){
                resultBox1.style.display = 'grid';
                flag1 = false;
            }


});

