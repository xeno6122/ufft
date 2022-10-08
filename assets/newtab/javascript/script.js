function date(){
    document.write(new Date().toDateString()); 
}

function search() {
    console.log("lol");
    var query = document.getElementById("search").value;
    if (!query) return window.alert("Search box is empty.")
    window.open(`https://www.google.com/search?q=${query}`, "_self");

  }

function addSearchListener()
{
    var input = document.getElementById("search");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("searchbtn").click();
      }
    });
}
