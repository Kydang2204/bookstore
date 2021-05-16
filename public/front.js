const deleteBook =(isbn)=>{
    document.querySelector("#sample").innerHTML="";
    const xhttp=new XMLHttpRequest();
    xhttp.open('DELETE',`http://localhost:4000/api/booklist/${isbn}`,false);
    xhttp.send();
    const temp_books=JSON.parse(xhttp.responseText);
    for( let book of temp_books)
    {
        const y=`<div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <h6 class="card-subtitile mb-2 text-muted">${book.isbn}</h6>
                            <div>Author: ${book.author}</div>
                            <div>Publisher: ${book.publisher}</div>
                            <div>Number Of Pages: ${book.numOfPages}</div>
                            <button type="button" class="btn btn-danger " onClick="deleteBook(${book.isbn})">Delete</button>
                            <button type="button" class="btn btn-primary ">Edit</button>
                            <hr>
                        </div>
                    </div>
                </div>`

        document.querySelector("#sample").innerHTML=document.querySelector("#sample").innerHTML + y;
 }
 }
const editBook=(isbn)=>
{
    document.querySelector("#sample").innerHTML="";
    const xhttp=new XMLHttpRequest();
    xhttp.open('GET','',false)
    xhttp.send();
    const editbook= JSON.parse(xhttp.responseText);
    document.querySelector("#sample").innerHTML=editbook;
}
const loadBooks =()=>{
    const xhttp=new XMLHttpRequest();
    xhttp.open('GET','http://localhost:4000/api/booklist',false);
    xhttp.send();
    const booklist=JSON.parse(xhttp.responseText);
    for( let book of booklist)
    {
        const x=`<div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <h6 class="card-subtitile mb-2 text-muted">${book.isbn}</h6>
                            <div>Author: ${book.author}</div>
                            <div>Publisher: ${book.publisher}</div>
                            <div>Number Of Pages: ${book.numOfPages}</div>
                            <button type="button" class="btn btn-danger " onClick="deleteBook(${book.isbn})">Delete</button>
                            <button type="button" class="btn btn-primary" onClick="editBook(${book.isbn})">Edit</button>
                            <hr>
                        </div>
                    </div>
                </div>`
        document.querySelector("#sample").innerHTML=document.querySelector("#sample").innerHTML + x;
    }

}
loadBooks();