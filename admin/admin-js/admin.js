let booklist = loadData();
let current = 1;

function display() {
    let elm = document.getElementById('table-render');
    let html = '';
    for (let i = 0; i < booklist.length; i++) {
        booklist[i].id = i;
        html += booklist[i].getHtml();
    }
    elm.innerHTML = html;
}

function addBook() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;
    let image = document.getElementById('image').value;
    let author = document.getElementById('author').value;
    if (name === "" || price === "" || image === "") {
        alert('Name or Price or Quantity cannot be left blank')
        return;
    }
    let book = new Book(name, price, image, author, quantity);
    booklist.push(book);
    console.log(booklist);
    display();
    revert();
    saveData();
}

function deleteBook(index) {
    booklist.splice(index, 1);
    display();
    saveData();
}

function editBook(index) {
    document.getElementById("edit-name").value = booklist[index].name;
    document.getElementById("edit-price").value = booklist[index].price;
    document.getElementById("edit-quantity").value = booklist[index].quantity;
    document.getElementById("edit-image").value = booklist[index].image;
    document.getElementById("edit-author").value = booklist[index].author;
    current = index;
}

function updateBook() {
    let index = current;
    booklist[index].name = document.getElementById("edit-name").value;
    booklist[index].price = document.getElementById("edit-price").value;
    booklist[index].quantity = document.getElementById("edit-quantity").value;
    booklist[index].image = document.getElementById("edit-image").value;
    booklist[index].author = document.getElementById("edit-author").value;
    display();
    revert2();
    saveData();
}

function revert2() {
    document.getElementById('edit-name').value = ''
    document.getElementById('edit-price').value = ''
    document.getElementById('edit-quantity').value = ''
    document.getElementById('edit-image').value = ''
    document.getElementById('edit-author').value = ''
}


function revert() {
    document.getElementById('name').value = ''
    document.getElementById('price').value = ''
    document.getElementById('quantity').value = ''
    document.getElementById('image').value = ''
    document.getElementById('author').value = ''
}

function saveData() {
    window.localStorage.setItem('books', JSON.stringify(booklist));
}

function loadData() {
    let arr = localStorage.hasOwnProperty('books') ? JSON.parse(localStorage.getItem('books')) : [];
    let objs = [];
    for (let i = 0; i < arr.length; i++) {
        let book = new Book(arr[i]["name"], arr[i]["price"], arr[i]["image"], arr[i]["author"], arr[i]["quantity"]);
        objs.push(book);
    }
    return objs;
}

display();