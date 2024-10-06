const ShowContact = document.getElementById("js-show-all");
const searchInput = document.getElementById("js-search");
const addContact = document.getElementById("js-add-contacts");
const homeButton = document.getElementById("Home");
const showPanel = document.getElementById("show-panel");
const searchDisplay = document.getElementById("search-display");
const myArrow = document.getElementById("my-arrow");



homeButton.addEventListener("click", function () {
  document.getElementById("search-area").style.display = "block";
  document.getElementById("contact-panel").style.display = "block";
  document.getElementById("show-panel").style.display = "block";
  // Clear search results
  searchDisplay.style.display = "none";
  showPanel.style.display = "none";
});





document.getElementById("search-area").style.display = "none";
document.getElementById("contact-panel").style.display = "none";
document.getElementById("show-panel").style.display = "none";

let contacts = [];

function showAllPanels() {
  document.getElementById("search-area").style.display = "block";
  document.getElementById("contact-panel").style.display = "block";
  document.getElementById("show-panel").style.display = "block";

  if (contacts.length === 0) {
    showPanel.textContent =
      "No contacts to show... You can add some contacts 🥲";
  } else {
    displayContacts();
  }
}

addContact.addEventListener("click", function () {
  document.getElementById("contact-panel").style.display = "block";
  document.getElementById("search-area").style.display = "none";
  document.getElementById("show-panel").style.display = "none";
  searchDisplay.innerHTML = "";
});

searchInput.addEventListener("click", function () {
  document.getElementById("contact-panel").style.display = "none";
  document.getElementById("search-area").style.display = "block";
  document.getElementById("show-panel").style.display = "none";
  searchDisplay.style.display = "block";
});


document.getElementById("submit-search").addEventListener("click", function (e) {
  e.preventDefault();

  const searchInputValue = document.getElementById("search-input").value;
  searchDisplay.innerHTML = "";
  if (searchInputValue.trim() === "") {
    searchDisplay.textContent = "Please enter a name to search.";
    searchDisplay.style.textAlign = "center";
    return;
  }

  const searchResults = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchInputValue.toLowerCase())
  );

  if (searchResults.length === 0) {
    searchDisplay.textContent = "No contacts found.";
    searchDisplay.style.textAlign = "center";
  } else {
    searchResults.forEach((contact) => {
      const searchedElement = document.createElement("div");
      searchedElement.style.textAlign = "center";
      searchedElement.style.marginTop = "20px";
      searchedElement.innerHTML = `
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Phone:</strong> ${contact.number}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <hr>`;
      searchDisplay.appendChild(searchedElement);
    });
  }
});



ShowContact.addEventListener("click", function () {
  document.getElementById("contact-panel").style.display = "none";
  document.getElementById("search-area").style.display = "none";
  document.getElementById("show-panel").style.display = "block";

  if (contacts.length === 0) {
    showPanel.textContent =
      "No contacts to show... You can add some contacts 🥲";
  } else {
    showPanel.innerHTML = ""; // Clear previous content
    contacts.forEach((contact) => {
      let contactElement = document.createElement("div");
      contactElement.style.marginTop = "20px";
      contactElement.innerHTML = `
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Phone:</strong> ${contact.number}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <hr>`;
      showPanel.appendChild(contactElement);
    });
  }
});

document.getElementById("submit-new-contact").addEventListener("click", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;

    if (name === "" || number === "" || email === "") {
      alert("Please fill in all fields.");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address.");
    } else if (number.length !== 10) {
      alert("Please enter a valid phone number.");
    } else {
      contacts.push({ name, number, email });
      document.getElementById("contact").reset();
      alert("Contact added successfully!");
    }
  });




const sidebar = document.getElementById("sidebar");

// Add event listener for collapsing/expanding the sidebar
myArrow.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

