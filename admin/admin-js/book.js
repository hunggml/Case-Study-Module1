function Book(name, price, image, author, quantity) {
    this.id = 0;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.image = image;
    this.author = author;


    this.getHtml = function () {
        return `
<tr>
           <td>${this.id + 1}</td>
           <td><img width="100px" alt="book" height="auto" src="${this.image}"> </td>
           <td>${this.name}</td>
           <td>${this.price}</td>
           <td>${this.quantity}</td>
           <td>${this.author}</td>
           <td><button onclick="editBook(${this.id})">EDIT</button> </td>
           <td><button onclick="deleteBook(${this.id})">Delete</button></td>      
</tr>`;
    }

}
