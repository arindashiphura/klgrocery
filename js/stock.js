
// stock
document.addEventListener('DOMContentLoaded', function() {
    let stockData = [
        { name: 'Beans', quantity: 50, status: 'In Stock' },
        { name: 'Rice', quantity: 0, status: 'Out of Stock' },
        { name: 'Maize', quantity: 30, status: 'In Stock' },
    ];

    function updateStatus(item) {
        return item.quantity > 0 ? 'In Stock' : 'Out of Stock';
    }

    function renderStockList(data) {
        const stockList = document.getElementById('stock-list');
        stockList.innerHTML = '';

        data.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.status}</td>
                <td>
                    <button onclick="editItem(${index})">Edit</button>
                    <button onclick="deleteItem(${index})">Delete</button>
                </td>
            `;
            stockList.appendChild(row);
        });
    }

    function searchItems() {
        const searchInput = document.getElementById('search').value.toLowerCase();
        const filteredData = stockData.filter(item => item.name.toLowerCase().includes(searchInput));
        renderStockList(filteredData);
    }

    window.searchItems = searchItems;

    window.addItem = function() {
        const newName = document.getElementById('new-item-name').value;
        const newQuantity = parseInt(document.getElementById('new-item-quantity').value);

        if (newName && !isNaN(newQuantity)) {
            const newItem = {
                name: newName,
                quantity: newQuantity,
                status: updateStatus({ quantity: newQuantity })
            };
            stockData.push(newItem);
            renderStockList(stockData);
        }
    };

    window.editItem = function(index) {
        const newName = prompt('Enter new name:', stockData[index].name);
        const newQuantity = prompt('Enter new quantity:', stockData[index].quantity);

        if (newName !== null && newQuantity !== null) {
            stockData[index].name = newName;
            stockData[index].quantity = parseInt(newQuantity);
            stockData[index].status = updateStatus(stockData[index]);
            renderStockList(stockData);
        }
    };

    window.deleteItem = function(index) {
        stockData.splice(index, 1);
        renderStockList(stockData);
    };

    renderStockList(stockData);
    document.getElementById('search').addEventListener('input', searchItems);
});

