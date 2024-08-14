
document.getElementById('salesReportForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Agent Name Validation
    const agentName = document.getElementById('agentName');
    const agentNameError = document.getElementById('agentNameError');
    if (agentName.value.trim() === '') {
        agentNameError.style.display = 'block';
        isValid = false;
    } else {
        agentNameError.style.display = 'none';
    }

    // Total Sales Validation
    const totalSales = document.getElementById('totalSales');
    const totalSalesError = document.getElementById('totalSalesError');
    if (totalSales.value.trim() === '' || totalSales.value < 1) {
        totalSalesError.style.display = 'block';
        isValid = false;
    } else {
        totalSalesError.style.display = 'none';
    }

    // Transactions Validation
    const transactions = document.getElementById('transactions');
    const transactionsError = document.getElementById('transactionsError');
    if (transactions.value.trim() === '' || transactions.value < 1) {
        transactionsError.style.display = 'block';
        isValid = false;
    } else {
        transactionsError.style.display = 'none';
    }

    // Commission Validation
    const commission = document.getElementById('commission');
    const commissionError = document.getElementById('commissionError');
    if (commission.value.trim() === '' || commission.value < 1) {
        commissionError.style.display = 'block';
        isValid = false;
    } else {
        commissionError.style.display = 'none';
    }

    // Produce Name Validation
    const produceName = document.getElementById('produceName');
    const produceNameError = document.getElementById('produceNameError');
    if (!produceName.value.match(/^[a-zA-Z\s]+$/)) {
        produceNameError.style.display = 'block';
        isValid = false;
    } else {
        produceNameError.style.display = 'none';
    }

    // Quantity Sold Validation
    const quantitySold = document.getElementById('quantitySold');
    const quantitySoldError = document.getElementById('quantitySoldError');
    if (quantitySold.value.trim() === '' || quantitySold.value < 1) {
        quantitySoldError.style.display = 'block';
        isValid = false;
    } else {
        quantitySoldError.style.display = 'none';
    }

    // Sale Date Validation
    const saleDate = document.getElementById('saleDate');
    const saleDateError = document.getElementById('saleDateError');
    if (saleDate.value.trim() === '') {
        saleDateError.style.display = 'block';
        isValid = false;
    } else {
        saleDateError.style.display = 'none';
    }

    // Sale Time Validation
    const saleTime = document.getElementById('saleTime');
    const saleTimeError = document.getElementById('saleTimeError');
    if (saleTime.value.trim() === '') {
        saleTimeError.style.display = 'block';
        isValid = false;
    } else {
        saleTimeError.style.display = 'none';
    }

    // Sale Price Validation
    const salePrice = document.getElementById('salePrice');
    const salePriceError = document.getElementById('salePriceError');
    if (salePrice.value.trim() === '' || salePrice.value < 1) {
        salePriceError.style.display = 'block';
        isValid = false;
    } else {
        salePriceError.style.display = 'none';
    }

    // Buyer's Name Validation
    const buyerName = document.getElementById('buyerName');
    const buyerNameError = document.getElementById('buyerNameError');
    if (!buyerName.value.match(/^[a-zA-Z\s]+$/)) {
        buyerNameError.style.display = 'block';
        isValid = false;
    } else {
        buyerNameError.style.display = 'none';
    }

    // Contact Validation
    const contact = document.getElementById('contact');
    const contactError = document.getElementById('contactError');
    if (!contact.value.match(/^\+256\d{9}$/)) {
        contactError.style.display = 'block';
        isValid = false;
    } else {
        contactError.style.display = 'none';
    }

    // Branch Name Validation
    const branchName = document.getElementById('branchName');
    const branchNameError = document.getElementById('branchNameError');
    if (branchName.value.trim() === '') {
        branchNameError.style.display = 'block';
        isValid = false;
    } else {
        branchNameError.style.display = 'none';
    }

    // If any validation fails, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
});

