// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const branchInput = document.getElementById('branch');
    const dealerInput = document.getElementById('dealer');

    // Example data for auto-complete (this could be fetched from a server)
    const branches = ['Branch A', 'Branch B', 'Branch C'];
    const dealers = ['Dealer 1', 'Dealer 2', 'Dealer 3'];

    // Populate branch datalist
    const branchList = document.getElementById('branch-list');
    branches.forEach(branch => {
        const option = document.createElement('option');
        option.value = branch;
        branchList.appendChild(option);
    });

    // Populate dealer datalist
    dealerInput.setAttribute('list', 'dealer-list');
    const dealerList = document.createElement('datalist');
    dealerList.id = 'dealer-list';
    dealers.forEach(dealer => {
        const option = document.createElement('option');
        option.value = dealer;
        dealerList.appendChild(option);
    });
    document.body.appendChild(dealerList);
});


//table


document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#produce-table tbody');
    const searchInput = document.getElementById('search');

    // Example data (should be fetched from a server)
    const produceData = [
        { name: 'Beans', type: 'Legume', date: '2024-08-10', time: '10:00', tonnage: 1200, cost: 500000, dealer: 'Dealer 1', branch: 'Branch A', contact: '0123456789', price: 600 },
        // Add more data here
    ];

    // Populate table
    const populateTable = (data) => {
        tableBody.innerHTML = '';
        data.forEach(produce => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${produce.name}</td>
                <td>${produce.type}</td>
                <td>${produce.date}</td>
                <td>${produce.time}</td>
                <td>${produce.tonnage}</td>
                <td>${produce.cost}</td>
                <td>${produce.dealer}</td>
                <td>${produce.branch}</td>
                <td>${produce.contact}</td>
                <td>${produce.price}</td>
                <td><button class="edit-btn">Edit</button></td>
            `;
            tableBody.appendChild(row);
        });
    };

    // Handle search functionality
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredData = produceData.filter(produce => 
            Object.values(produce).some(value => value.toString().toLowerCase().includes(searchTerm))
        );
        populateTable(filteredData);
    });

    // Initial table population
    populateTable(produceData);

    // Handle edit button clicks (you would need to implement the actual edit functionality)
    tableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-btn')) {
            const row = event.target.closest('tr');
            const cells = row.getElementsByTagName('td');
            const produce = {
                name: cells[0].innerText,
                type: cells[1].innerText,
                date: cells[2].innerText,
                time: cells[3].innerText,
                tonnage: cells[4].innerText,
                cost: cells[5].innerText,
                dealer: cells[6].innerText,
                branch: cells[7].innerText,
                contact: cells[8].innerText,
                price: cells[9].innerText
            };
            // You can open an edit form with pre-filled data here
            console.log('Edit:', produce);
        }
    });
});
