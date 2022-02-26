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
