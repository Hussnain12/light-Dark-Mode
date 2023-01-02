const toggleSwitch = $(":checkbox");
const nav = $("#nav");
const toggleIcon = $("#toggle-icon");
const image1 = $("#image1");
const image2 = $("#image2");
const image3 = $("#image3");
const textBox = $("#text-box");

//image color mode func 
function imageMode(color) {
    image1.attr('src', `img/undraw_proud_coder_${color}.svg`);
    image2.attr('src', `img/undraw_feeling_proud_${color}.svg`);
    image3.attr('src', `img/undraw_conceptual_idea_${color}.svg`);
}
//light mode
function lightMode() {
    nav.css('background-color', 'rgb(255 255 255 / 50%)');
    textBox.css('background-color', 'rgb(0 0 0 / 50%)');
    toggleIcon.children('span').html('Light Mode');
    toggleIcon.children('i').removeClass('fa-moon');
    toggleIcon.children('i').addClass('fa-sun');
    imageMode("light");


}
function darkMode() {
    nav.css('background-color', 'rgb(0 0 0 / 50%)');
    textBox.css('background-color', 'rgb(255 255 255 / 50%)');
    toggleIcon.children('span').html('Dark Theme');
    toggleIcon.children('i').removeClass('fa-sun');
    toggleIcon.children('i').addClass('fa-moon');
    imageMode("dark");

}


//switch theme function
function switchTheme(event) {
    if (event.target.checked) {
        $(':root').attr('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }
    else {
        $(':root').attr('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }

}

// event listener
toggleSwitch.change(switchTheme);
//check local storage for theme
const currentTheme=localStorage.getItem('theme');

if (currentTheme){
    $(':root').attr('data-theme', currentTheme);
    
    if(currentTheme==='dark'){
        toggleSwitch.prop('checked',true);
        darkMode();
    }
    
}