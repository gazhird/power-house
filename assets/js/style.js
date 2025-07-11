
function joined(event) {
var name = document.getElementById("first-name").value;
document.getElementById('orange-box-button').style.display = "none"
document.getElementById('join-inputs').style.display = "none"
document.getElementById('join-submit').style.display = "none"
document.getElementById('close-button').style.display = "block"
document.getElementById('thanks-for-joining').innerHTML = '<p>Welcome ' + name + '  <i class="fa-solid fa-bolt"></i></p>'; 
document.getElementById('submitted').innerHTML = '<h3>Hi, ' + name + '<br>Thanks for Joining</h3>'; 
event.preventDefault() // to stop default submit
}





// This is to display only the timetable for specified day selected for classes
// I didn't want to show the full week as takes up too much space
// Created with previous knowledge of JS but used W3 schools to help refresh and remind me of syntax

// this event listener activates when user selects 'a day' option from dropdown
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
