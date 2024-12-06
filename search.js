// Get the form and thank you message elements
const form = document.getElementById('volunteerForm');
const thankYouMessage = document.getElementById('thankYouMessage');

// Function to handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Basic validation (can be extended)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const interest = document.getElementById('interest').value;

    // Simple form validation check
    if (name && email && phone && interest) {
        // Hide the form and display the thank you message
        form.style.display = 'none';
        thankYouMessage.style.display = 'block';
    } else {
        // If any required field is empty, alert the user
        alert('Please fill in all required fields.');
    }
});

// Function for filtering list
function filterList(inputId, listId) {
    // Declare variables
    const input = document.getElementById(inputId);
    const filter = input.value.toUpperCase();
    const list = document.getElementById(listId);
    const items = list.getElementsByTagName('li');

    // Loop through all list items and hide those that don't match the search query
    for (let i = 0; i < items.length; i++) {
        const anchor = items[i].getElementsByTagName("a")[0];
        const textValue = anchor.textContent || anchor.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }

        // Your API key
const apiKey = "pk_live_29c397fcc6ba323936d9814dc2d0e954";

// Example: Fetching data from an API
const apiUrl = `https://api.example.com/data?apiKey=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    }
}

// Example usage of filterList
document.getElementById('myInput').addEventListener('input', () => {
    filterList('myInput', 'myUL');

    // Example usage of filterList
document.getElementById('myInput').addEventListener('input', () => {
    filterList('myInput', 'myUL');
});

 //couldn't get too work

fetch(`https://partners.every.org/v0.2/fundraiser`)
    .then(res => {
        return res.json();
        });
.then (data => {
    data.forEach(user => {
        const markup = '<div>${}</div>;

        document.querySelector('ul').insertindexfhHTML('beforeend', markup');
    })
.catch (error => console.log(error));
});
