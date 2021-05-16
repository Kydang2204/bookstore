const express=require('express');
const router = express.Router();
const uuid=require('uuid');
const booklist=require('../../Booklist');

//get all Books
router.get('/',(req,res)=>{
    res.json(booklist)
});

//get sigle book
router.get('/:isbn',(req,res)=>
{
    const found=booklist.some(book=>book.isbn===req.params.isbn);
    if(found)
    {
        res.json(booklist.filter(book=>book.isbn===req.params.isbn));
    }
    else
    res.status(400).json({msg:`No found  with isbn ${req.params.isbn}`});

})

//creat new book
router.post('/',(req,res)=>{
    const newbook ={
        isbn: uuid.v4(),
        title:req.body.title,
        author:req.body.author,
        published_date:req.body.published_date,
        publisher: req.body.publisher,
        number_of_pages: parseInt(req.body.number_of_pages)
    }
    if(!newbook.title||!newbook.author||!newbook.published_date||!newbook.publisher
        ||!newbook.number_of_pages)
    {
        res.status(400).json({msg:"Error. Fill all rows please"});
    }
    else
    {
    booklist.push(newbook);
    res.json(booklist);
    }
})

//update book
router.put('/:isbn',(req,res)=>
{
    const found=booklist.some(book=>book.isbn===req.params.isbn);
    if(found)
    {
        const updbook=req.body;
        booklist.forEach(book=>
        {if(book.isbn===req.params.isbn)
            {
                book.title=updbook.title ? updbook.title:book.title,
                book.author=updbook.author ? updbook.author:book.author,
                book.publish_date=updbook.publish_date ? updbook.publish_date:book.publish_date,
                book.publisher=updbook.publisher ? updbook.publisher:book.publisher,
                book.numOfPages=updbook.numOfPages ? updbook.numOfPages:book.numOfPages
                res.json({msg:"Book has updated",book});
            }
        }
        )}
    else
    {res.status(400).json({msg:`No found  with isbn ${req.params.isbn}`})}
})

router.delete('/:isbn',(req,res)=>
{
    const found=booklist.some(book=>book.isbn===req.params.isbn);
    if(found)
    {
        res.json(booklist.filter(book=>book.isbn!==req.params.isbn));
    }
    else{
        res.status(400).json({msg:`No found  with isbn ${req.params.isbn}`});
    }
});

module.exports=router;
