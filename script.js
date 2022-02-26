function dataView(pm, index) {
    return `
        <div data-index="${index+1}" class="data-card">
            <h2>${pm.title}</h2>
            <hr></hr>
            <h4>${pm.sub}</h4>
            <h5>${pm.text}</h5>
            <button><span class="details">details</span><span class="material-icons md-36">arrow_forward</span></button>
        </div>`
}


function loadEvent() {
    const rootElement = document.getElementById("root");

    for (let i = 0; i < datas.length; i++) {
        const data = datas[i];
        rootElement.insertAdjacentHTML("beforeend", dataView(data, i))
    }
}




window.addEventListener("load", loadEvent);

// function init() {

//     for (let i = 0; i < data.length; i++) {

    
//     let card;
//     let title;
//     let sub;
//     let text;

//     card = document.createElement("div")
//     title = document.createElement("h2")
//     sub = document.createElement("h3")
//     text = document.createElement("h4")
//     root = document.getElementById("root")

//     card.setAttribute("id", "card" + i);
//     card.setAttribute("data-index" + i);
//     card.setAttribute("class", "data-card");
//     root.appendChild(card);

//     title.setAttribute("value", data[i].title);
//     title.textContent = data[i].title;
//     card.appendChild(title);
// }
// }