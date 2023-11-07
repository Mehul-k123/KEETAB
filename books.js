
async function addBook() {
    const bookName = document.getElementById("bookName").value;
    const category = document.getElementById("category").value;
    const author = document.getElementById("author").value;
    const bookFile = document.getElementById("bookFile").value;
    const bookImage = document.getElementById("bookImage").value;
    try {
       const response = await fetch("http://localhost:5000/api/auth/addBook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ bookName, category, author, bookFile, bookImage  }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            if (data.success) {
                alert("Book Added Successfully");
                location.reload();
            } else {
                alert("Wrong Email or Password");
            }
        } else {
            alert("Server error: " + response.status);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}


async function fetchAllBooks() {
    const tableBody = document.querySelector("#book-list tbody");
    tableBody.innerHTML = '';

   const res = await fetch("http://localhost:5000/api/auth/fetchallBooks", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (!res.ok) {
        console.log("failed");
    }
            const books = await res.json();
            books.forEach(book => {
                const row = tableBody.insertRow();
                const bookNameCell = row.insertCell(0);
                const categoryCell = row.insertCell(1);
                const authorCell = row.insertCell(2);
                const fileCell = row.insertCell(3);
                const imageCell = row.insertCell(4);
                // const actionCell = row.insertCell(5);

                bookNameCell.textContent = book.bookName || "N/A";
                categoryCell.textContent = book.category || "N/A";
                authorCell.textContent = book.author || "N/A";
                fileCell.textContent = book.bookFile || "N/A"; 
                imageCell.textContent = book.bookImage || "N/A"; 
            
                // actionCell.innerHTML = '<button>Delete</button>';
            });
            
            
}

// Call fetchAllBooks function to load books when the page loads
window.addEventListener('load', fetchAllBooks);


// Function to delete a book
// function deleteBook(button) {
//     const row = button.parentNode.parentNode;
//     const index = row.rowIndex - 1; // -1 because of the table header
//     books.splice(index, 1);
//     displayBooks();
// }

// Function to clear the form fields
function clearForm() {
    document.getElementById("bookName").value = '';
    document.getElementById("category").value = '';
    document.getElementById("author").value = '';
    document.getElementById("bookFile").value = '';
    document.getElementById("bookImage").value = '';
}

// Initial display of books
displayBooks();
