
// Created with previous knowledge of JS but used W3 schools to help refresh and remind me of syntax



// This is to display only the timetable for specified day selected for classes
// I didn't want to show the full week as takes up too much space

// this event listener activates when user selects 'a day' select option from dropdown
var select = document.getElementById('select-day');
select.addEventListener('change', function() {                         
var day = this.value;
hide(day);
show(day);
});

// //Hides previous selection as they remained 
function hide(day){
        
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

var length = days.length;
var i = 0;


while (i < 7) {
document.getElementById(days[i]).className = 'hide';
i++;
};}


// Shows the day selected on drop down
function show(day) {
document.getElementById(day).className = "show";
};





// Facilities page photo library 

function nextImg(x) {

    document.getElementById('image-1').style.display = "none";
    document.getElementById('image-2').style.display = "none";
    document.getElementById('image-3').style.display = "none";
    document.getElementById('image-4').style.display = "none";
    document.getElementById('image-5').style.display = "none";
    document.getElementById('image-6').style.display = "none";
    document.getElementById('image-7').style.display = "none";
    document.getElementById('image-8').style.display = "none";
    document.getElementById('image-9').style.display = "none";
    document.getElementById('image-10').style.display = "none";


    document.getElementById('image-' + x ).style.display = "block";
    document.getElementById('imgNum').innerHTML = "<p>" + x + "/10</p>";
                
}


