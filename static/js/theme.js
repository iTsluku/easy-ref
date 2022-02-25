myStorage = window.localStorage;

const DARK = "dark";
const LIGHT = "light";

loadLocalStorage();

document.querySelector('.theme-toggle-button').addEventListener('click',()=>{
    toggleTheme(true);
});

function loadLocalStorage(){
    theme = myStorage.getItem('theme');
    if (!theme){
        myStorage.setItem('theme',DARK);
    }else{
        if (theme===DARK && (!isDark())){
            toggleTheme(false);
        }
        if (theme===LIGHT && isDark()){
            toggleTheme(false);
        }
    }
}

function setThemeLocalStorage(newTheme){
    myStorage.setItem('theme',newTheme);
}

function isDark(){
    return document.body.classList.contains(DARK);
}

function toggleTheme(updateLocalStorage){
    if (isDark()){
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