myStorage = window.localStorage;

const DARK = "dark";
const LIGHT = "light";
const SIDEBAR_CLOSED = "sidebar";
const SIDEBAR_OPEN = "sidebar open";

loadLocalStorage();

document.querySelector('.theme-toggle-button').addEventListener('click',()=>{
    toggleTheme(true);
});

const menuIconButton = document.querySelector('[data-menu-icon-btn]').addEventListener('click',()=>{
    toggleSidebar(true);
});

function loadLocalStorage(){
    theme = myStorage.getItem('theme');
    if (!theme){
        myStorage.setItem('theme',DARK);
    }else{
        if (theme===DARK && (!isThemeDark())){
            toggleTheme(false);
        }
        if (theme===LIGHT && isThemeDark()){
            toggleTheme(false);
        }
    }
    sidebar = myStorage.getItem('sidebar');
    if (!sidebar){
        myStorage.setItem('sidebar',SIDEBAR_CLOSED);
    }else{
        if (sidebar===SIDEBAR_CLOSED && (!isSidebarClosed())){
            toggleSidebar(false);
        }
        if (sidebar===SIDEBAR_OPEN && isSidebarClosed()){
            toggleSidebar(false);
        }
    }
}

function setThemeLocalStorage(newTheme){
    myStorage.setItem('theme',newTheme);
}

function setSidebarStatusLocalStorage(classStatus){
    myStorage.setItem('sidebar',classStatus);
}

function isThemeDark(){
    return document.body.classList.contains(DARK);
}

function isSidebarClosed(){
    const sidebar = document.querySelector("[data-sidebar]");
    return !sidebar.classList.contains("open");
}

function toggleTheme(updateLocalStorage){
    if (isThemeDark()){
        document.body.classList.remove(DARK);
        document.body.classList.add(LIGHT);
        if (updateLocalStorage){
            setThemeLocalStorage(LIGHT);
        }
    }else{
        document.body.classList.remove(LIGHT);
        document.body.classList.add(DARK);
        if (updateLocalStorage){
            setThemeLocalStorage(DARK);
        }
    }
}

function toggleSidebar(updateLocalStorage){
    const sidebar = document.querySelector("[data-sidebar]");
    sidebar.classList.toggle("open");
    if (updateLocalStorage){
        if (isSidebarClosed()){
            setSidebarStatusLocalStorage(SIDEBAR_CLOSED);
        }else{
            setSidebarStatusLocalStorage(SIDEBAR_OPEN);
        }
    }
}