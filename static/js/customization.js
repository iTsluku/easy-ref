document.querySelector('button.save-customization-button').addEventListener('click', () => {
    var r = new XMLHttpRequest();
    var url = "http://127.0.0.1:5000/customization";
    r.open("POST", url);
    r.setRequestHeader("Content-Type", "application/json");
    r.send(JSON.stringify(getContent()));
});

function getContent(){
    //TODO check for alternative approach - because of "Cross Site Scripting" (XSS)
    containers = []
    const draggableContainers = document.querySelectorAll('div.draggable-container')
    for (let i = 0; i < draggableContainers.length; i++) {
        containerObj = {}
        const containerTitle = draggableContainers[i].querySelector('div.link-container-title')
        containerObj["title"]=containerTitle.innerHTML
        const itemObjs = []
        const items = draggableContainers[i].querySelectorAll('div.flexbox-item')
        for (let j = 0; j < items.length; j++) {
            itemObj = {}
            const itemTitle = items[j].querySelector('div.link-container-item-title')
            const itemLink = items[j].querySelector('div.link-container-item-link')
            itemObj["title"]=itemTitle.innerHTML
            itemObj["link"]=itemLink.innerHTML
            itemObjs.push(itemObj)
        }
        containerObj["links"]=itemObjs
        containers.push(containerObj)
    }
    return containers
}