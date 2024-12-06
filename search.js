const form = document.getElementById('volunteerForm');
const thankYouMessage = document.getElementById('thankYouMessage');

// Function to handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Simple form validation
    if (name && email && phone) {
        // Hide the form and display the thank-you message
        form.style.display = 'none';
        thankYouMessage.style.display = 'block';
    } else {
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

    for (let i = 0; i < items.length; i++) {
        const anchor = items[i].getElementsByTagName("a")[0];
        const textValue = anchor.textContent || anchor.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

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
  },
});