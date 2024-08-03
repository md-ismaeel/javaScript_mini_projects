const rowsEl = document.querySelector("#rows");
const columnsEl = document.querySelector("#columns");
const tableBodyEl = document.querySelector(".table-body");

// Function to create a matrix with a zigzag pattern
function createMatrix(rows, columns) {
    // Initialize an empty matrix
    const matrix = Array.from({ length: rows }, () => Array(columns).fill(0));

    let count = 1;
    let direction = 1;

    // Fill the matrix column by column
    for (let col = 0; col < columns; col++) {
        if (direction === 1) {
            for (let row = 0; row < rows; row++) {
                matrix[row][col] = count++;
            }
        } else {
            for (let row = rows - 1; row >= 0; row--) {
                matrix[row][col] = count++;
            }
        }
        direction *= -1; // Reverse direction after each column
    }

    return matrix;
}

// Function to generate an HTML table from the matrix
function generateTable(matrix) {
    const fragment = document.createDocumentFragment();

    // Create table rows and cells
    matrix.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cellValue => {
            const td = document.createElement("td");
            td.textContent = cellValue;
            td.classList.add("cell");
            tr.appendChild(td);
        });
        fragment.appendChild(tr);
    });

    return fragment;
}

// Function to update the table in the DOM
function updateTable() {
    const rows = +rowsEl.value;
    const columns = +columnsEl.value;
    const matrix = createMatrix(rows, columns);
    tableBodyEl.replaceChildren(generateTable(matrix));
}

// Event listeners for changing the number of rows and columns
rowsEl.addEventListener("change", updateTable);
columnsEl.addEventListener("change", updateTable);

updateTable();
