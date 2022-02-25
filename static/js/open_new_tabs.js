var linkContainer = document.querySelectorAll('.open-new-tabs');

for (var i=0, c; c = linkContainer[i]; i++) {
    var collection = c.getElementsByClassName('link-container-item-link');
    links = [];
    for (let c of collection) {
        links.push(c.innerText);
    }
    c.addEventListener('click',openNewTabs,false);
    c.links=links;
}

function openNewTabs(event){
    var links = event.currentTarget.links;
    for (let i = 0; i < links.length; i++) {
        window.open(links[i]);
    }
};