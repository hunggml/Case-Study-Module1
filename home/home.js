function displaymain() {

    let list = "";
    for (let i = 0; i < booklist.length; i++) {
        list +=`<img height="200px" width="200px" src="${booklist[i]['image']}" alt="Book">`  + '<br>';
        list += 'Name: ' + booklist[i]['name'] + '<br>';
        list += 'Price: ' + booklist[i]['price'] + '<br>';
        list += 'Quantity:' + booklist[i]['quantity'] + '<br>';
        list += 'Author: ' + booklist[i]['author'] + '<br>';
        list += '<button>Add Book</button>' + '<br>' + '<br>'

    }
    document.getElementById("main").innerHTML = list;
}

displaymain();