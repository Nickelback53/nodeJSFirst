var db =  require('./db');
var template = require('./template.js');

exports.home = function(request, response){
    db.query(`select * from author`, function(error, authors){
        db.query(`select * from topic`, function(error,topics){
            var title = 'Welcome';
            var description = 'Hello, Node.js';


            var list = template.list(topics);
            var authorList = template.authorList(authors);
            var html = template.HTMLAuthor(title, list, authorList);
        
            response.writeHead(200);
            response.end(html);
        });
        
    });
}