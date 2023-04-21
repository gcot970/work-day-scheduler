// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// global var to clean up dayjs
var now = dayjs();


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // Listener for .saveBtn, logs if pressed
  $('.saveBtn').click(function() {
    console.log("Save button pressed!");
    });
  
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Goes through hours 0-24 (for sake of
  // expandibility). Increments each loop.
  for (i = 0; i < 25; i++){
    // Combines hour and increment to reflect
    // new hour. Logs increment.
    var hourEl = $(`#hour-${i}`);
    console.log("hourEl set as: " + i);
  
    // Adds classes to each timeframe to reflect
    // past, present, and future.
    if (now.hour() > i){
      hourEl.addClass('past');
      console.log("hourEl class is: past");
    } else if (now.hour() === i) {
      hourEl.addClass('present')
      console.log("hourEl class is: present");
    } else if (now.hour() < i) {
      hourEl.addClass('future')
      console.log("hourEl class is: future");
    }
  }
  
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // Activates fuction when clicked on .saveBtn
  // Gets ID from current timeframe, gets text from
  // textarea, and saves into local storage.
  $('.saveBtn').on('click', function() {
    var hour = $(this).parent().attr('id');
    var text = $(this).siblings('textarea').val();
    localStorage.setItem(hour, text);
    console.log("Saved to local storage.")
  }
  )

  // For loop runs when page is loaded. Increments
  // up to 24 hours, (hourEl == hour on table,
  // hourArea == saved textarea from hourEl).
  // hourArea text changed from item that has key
  // of hourEl's id.
  for (i = 0; i < 25; i++){
    var hourEl = $(`#hour-${i}`);
    var hourArea = hourEl.find('textarea');
    hourArea.text(localStorage.getItem(hourEl.attr('id')));
  }  

  // TODO: Add code to display the current date in the header of the page.
  
  // Gets currentDay element, and writes formatted text
  // for current day.
  var $currDay = $('#currentDay');
  $currDay.text(now.format('dddd, MMMM D'));


});