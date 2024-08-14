// Correct the event listener to match the form ID in your HTML
document.getElementById('register-form').addEventListener('input', function () {
    validateForm();
});

function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('corfirmpassword').value; // Use correct ID
    const submitBtn = document.querySelector('input[type="submit"]'); // Selecting the submit button
    const errorElement = document.getElementById('passwordError');

    let isValid = true;

    // Ensure all fields are filled
    if (!username || !email || !password || !confirmPassword) {
        isValid = false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorElement.textContent = 'Passwords do not match';
        errorElement.classList.remove('success');
        errorElement.classList.add('error');
        isValid = false;
    } else {
        errorElement.textContent = 'Passwords match';
        errorElement.classList.remove('error');
        errorElement.classList.add('success');
    }

    // Enable or disable the submit button based on form validity
    submitBtn.disabled = !isValid;
    if (isValid) {
        submitBtn.classList.add('enabled');
    } else {
        submitBtn.classList.remove('enabled');
    }
}


// login-form

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    // If validation is successful, you can submit the form
    this.submit();
});

function validateEmail(email) {
    // Simple email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}




// receipt
// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Example data
    const receiptData = {
        date: '2024-08-01',
        receiptNumber: '12345',
        customerName: 'John Doe',
        customerAddress: '123 Main St, Anytown, USA',
        items: [
            { item: 'Beans', quantity: 2, price: 1.50 },
            { item: 'Rice', quantity: 1, price: 2.00 },
            { item: 'Soybeans', quantity: 3, price: 1.25 }
        ]
    };

    // Populate receipt
    document.getElementById('date').textContent = receiptData.date;
    document.getElementById('receipt-number').textContent = receiptData.receiptNumber;
    document.getElementById('customer-name').textContent = receiptData.customerName;
    document.getElementById('customer-address').textContent = receiptData.customerAddress;

    // Calculate totals
    let subtotal = 0;
    receiptData.items.forEach(item => {
        const itemTotal = item.quantity * item.price;
        subtotal += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.item}</td>
            <td>${item.quantity}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${itemTotal.toFixed(2)}</td>
        `;
        document.getElementById('items').appendChild(row);
    });

    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
});

// sales
document.getElementById('produceForm').addEventListener('submit', function(event) {
    let formIsValid = true;

    const produceName = document.getElementById('produceName');
    const tonnage = document.getElementById('tonnage');
    const amountPaid = document.getElementById('amountPaid');
    const buyerName = document.getElementById('buyerName');
    const salesAgentName = document.getElementById('salesAgentName');
    const dateTime = document.getElementById('dateTime');

    const produceNameError = document.getElementById('produceNameError');
    const tonnageError = document.getElementById('tonnageError');
    const amountPaidError = document.getElementById('amountPaidError');
    const buyerNameError = document.getElementById('buyerNameError');
    const salesAgentNameError = document.getElementById('salesAgentNameError');
    const dateTimeError = document.getElementById('dateTimeError');

    produceNameError.textContent = '';
    tonnageError.textContent = '';
    amountPaidError.textContent = '';
    buyerNameError.textContent = '';
    salesAgentNameError.textContent = '';
    dateTimeError.textContent = '';

    if (!produceName.value) {
        produceNameError.textContent = 'Produce Name is required.';
        formIsValid = false;
    }
    if (!tonnage.value) {
        tonnageError.textContent = 'Tonnage is required.';
        formIsValid = false;
    }
    if (!amountPaid.value || amountPaid.value.length < 5) {
        amountPaidError.textContent = 'Amount Paid must be at least 5 characters long.';
        formIsValid = false;
    }
    if (!buyerName.value || !/^[A-Za-z0-9\s]{2,}$/.test(buyerName.value)) {
        buyerNameError.textContent = 'Buyer\'s Name must be at least 2 alphanumeric characters.';
        formIsValid = false;
    }
    if (!salesAgentName.value || !/^[A-Za-z0-9\s]{2,}$/.test(salesAgentName.value)) {
        salesAgentNameError.textContent = 'Sales Agent\'s Name must be at least 2 alphanumeric characters.';
        formIsValid = false;
    }
    if (!dateTime.value) {
        dateTimeError.textContent = 'Date and Time is required.';
        formIsValid = false;
    }

    if (!formIsValid) {
        event.preventDefault();
    }
});