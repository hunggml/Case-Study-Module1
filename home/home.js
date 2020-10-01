function displaymain() {
    let str =`<div class="card">
  <img width="100px"  height="auto" src="${this.image}">
           <td>${this.name}
           <td>${this.price}</td>
           <td>${this.quantity}</td>
           <td>${this.author}</td><br>
           <button>Add Book</button></p>
</div>`;
    let list = "";
    for (let i = 0; i < booklist.length; i++) {
        list+=str;
    }
    document.getElementById("main").innerHTML = list;
}
displaymain();