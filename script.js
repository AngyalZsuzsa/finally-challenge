function dataView(data, index) {
    return `
        <div data-index="${index+1}" class="data-card">
            <h2>${data.title}</h2>
            
            <h4>${data.sub}</h4>
            <h5>${data.text}</h5>
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
