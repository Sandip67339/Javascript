let book = 
{
    name: 'ph',
    author: 'readmore',
    publication: 're',
    description: function() {
        return "garoxa";
        return this.author
    },
};
//Dot operator
console.log(book.name)
console.log(book.description())

//alternate access
console.log(book["name"])
console.log(book["description"]())

//Modify
book.name='MATH'
book.author='sim'

//add age of author
book.authorage=30
console.log(book)

//delete object
delete book.publication
delete book['author']

