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
        sortedData = sortedData.sort();
        console.log("Sorted data: ", sortedData);
        // For-loop Attempt #1
        for (let i = 0; i < data.length; i++){
            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${data[i].firstName} ${data[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${data[i].hoursInSpace}</li>
                        <li>Active: ${data[i].active}</li>
                        <li>Skills: ${data[i].skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src= "${data[i].picture}"> 
            </div>
        `;
        };

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