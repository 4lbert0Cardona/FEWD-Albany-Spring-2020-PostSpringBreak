const books = [
    {
        title: 'the cat in the hat',
        published: 1960,
        author: 'DrSuess',
        co-author: {
            name: 'Dr. Oz',
        }
        pages: 79,
    },

    {
        title: 'the cat in the paper hat',
        published: 1960,
        author: 'DrSuess',
        co-author: {
            name: 'Dr. Oz',
        }
        pages: 79,
    },

    {
        title: 'the cat in the cotton hat',
        published: 1960,
        author: 'DrSuess',
        co-author: {
            name: 'Dr. Oz',
        }
        pages: 79,
    },
];

console.log(books)
for(var i = 0; i <books.length; i ++) {
    console.log(books[i].title)
}