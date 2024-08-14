document.getElementById('produceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let errors = [];
    let form = document.forms['produceForm'];

    let produceName = form['produceName'].value;
    let produceType = form['produceType'].value;
    let date = form['date'].value;
    let time = form['time'].value;
    let tonnage = form['tonnage'].value;
    let cost = form['cost'].value;
    let dealerName = form['dealerName'].value;
    let contact = form['contact'].value;
    let price = form['price'].value;

    if (!/^[a-zA-Z0-9\s]+$/.test(produceName)) {
        errors.push("Produce name must be alphanumeric.");
    }

    if (!/^[a-zA-Z\s]+$/.test(produceType) || produceType.length < 2) {
        errors.push("Produce type must contain only alphabets and be at least 2 characters long.");
    }

    if (!date) {
        errors.push("Date is required.");
    }

    if (!time) {
        errors.push("Time is required.");
    }

    if (!/^\d{1,}$/.test(tonnage) || tonnage.length < 3) {
        errors.push("Tonnage must be numeric and at least 3 characters long.");
    }

    if (!/^\d{1,}$/.test(cost) || cost.length < 5) {
        errors.push("Cost must be numeric and at least 5 characters long.");
    }

    if (!/^[a-zA-Z0-9\s]+$/.test(dealerName) || dealerName.length < 2) {
        errors.push("Dealer name must be alphanumeric and at least 2 characters long.");
    }

    if (!/^\d{10}$/.test(contact)) {
        errors.push("Contact must be a valid 10-digit phone number.");
    }

    if (errors.length > 0) {
        document.getElementById('formErrors').innerHTML = errors.join('<br>');
    } else {
        document.getElementById('formErrors').innerHTML = "";
        form.submit();
    }
}