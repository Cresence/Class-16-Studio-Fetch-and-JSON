// TODO: add code here
window.addEventListener("load", function() {
    // Stuff happens
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(response => response.json().then(data => {
        // console.log(data);

        const container = document.querySelector("#container");

        // Sorted from most to least time in space
        let sortedData = [];
        for (let i = 0; i < data.length; i++) {
            sortedData.push(data[i]);
        }
        sortedData = data.sort(function(a, b){return a.hoursInSpace-b.hoursInSpace});
        console.log("Sorted data: ", sortedData);

        let activeColor;
        // For-loop Attempt #1
        for (let i = 0; i < data.length; i++){
            if (sortedData[i].active) {
                activeColor = "green";
            } else {
                activeColor = "black";
            };
            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${sortedData[i].firstName} ${sortedData[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${sortedData[i].hoursInSpace}</li>
                        <li style="color: ${activeColor}">Active: ${sortedData[i].active}</li>
                        <li>Skills: ${sortedData[i].skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src= "${sortedData[i].picture}"> 
            </div>
            `;
        };

        const header = document.querySelector("h1");
        header.innerHTML = `Number of Astronauts: ${sortedData.length}`; 

        // Single array element
        // container.innerHTML = `
        //     <div class="astronaut">
        //         <div class="bio">
        //             <h3>${data[0].firstName} ${data[0].lastName}</h3>
        //             <ul>
        //                 <li>Hours in space: ${data[0].hoursInSpace}</li>
        //                 <li>Active: ${data[0].active}</li>
        //                 <li>Skills: ${data[0].skills.join(', ')}</li>
        //             </ul>
        //         </div>
        //         <img class="avatar" src= "${data[0].picture}"> 
        //     </div>
        // `;
    }));
});