import "./index.css";

let data = JSON.parse(localStorage.getItem("notes")) || [];
appendData(data)
console.log(data);
let addData = () => {
    
    let date = document.querySelector("#date").value;
    let notes = document.querySelector("#note").value;
    let time = document.querySelector("#time").value;
    let dataObj = {
        date: date,
        notes: notes,
        time: time
    }
    data.push(dataObj);
    localStorage.setItem("notes", JSON.stringify(data));
    appendData(data);
}
    document.querySelector("#submit").addEventListener("click", addData);


function appendData (data) {
    document.querySelector("tbody").innerHTML = null;
    data.map((elems) => {
        let rows = document.createElement("tr");

        let data1 = document.createElement("td");
        data1.innerText = elems.date;

        let data2 = document.createElement("td");
        data2.innerText = elems.notes;

        let data3 = document.createElement("td");
        data3.innerText = elems.time;

        rows.append(data1, data2, data3);
        document.querySelector("tbody").append(rows);
    })
}

