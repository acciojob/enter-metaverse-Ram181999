//your JS code here. If required.

function changestring() {
  var element = document.getElementById("status");

  // Create a new element with the desired tag name
  var newElement = document.createElement("h1");

  // Copy the content from the old element to the new one
  newElement.innerHTML = element.innerHTML;
  // Set the new inner text for the element
  newElement.innerText = "Entered the Metaverse";
  // Replace the old element with the new one
  element.parentNode.replaceChild(newElement, element);
}
