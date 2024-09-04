// Get the popup
var popup = document.getElementById("aiPopup");

// Get the button that opens the popup
var btn = document.getElementById("aiAssistantBtn");

// Get the <span> element that closes the popup
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the popup
btn.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

// Add functionality to submit button
document.getElementById("submitQuery").onclick = function() {
    var query = document.getElementById("aiQuery").value;
    var aiResponse = document.getElementById("aiResponse");

    // Simulate AI response (you'll replace this with actual AI model interaction)
    aiResponse.innerText = "Processing your query: " + query;

    // Here you can call your ML model and update the aiResponse with the result
    // Example:
    // let response = yourMLModelFunction(query);
    // aiResponse.innerText = response;
}

