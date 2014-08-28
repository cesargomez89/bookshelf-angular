module.exports =  function(app) {
  console.log('asd' ,app);

  if(app){

    var bookshelf = app.get('bookshelf');
    console.log(bookshelf);

    var User = bookshelf.Model.extend({
      tableName: 'users'
    });
    console.log(User);

    return User
  }
};
