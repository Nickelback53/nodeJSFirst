module.exports = {
    HTML : function (title, list, body, control){
        return `
        <!doctype html>
        <html>
        <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
            <a href="/author">author</a>
            ${list}
            ${control}
            ${body}
        </body>
        </html>   
        `;
    }, list : function (topics){
        var list = '<ul>';
        var i = 0;
        while(i < topics.length){ 
            list = list +  `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
            i= i+1;
        }               
        list = list + '</ul>';
        return list;
    }, authorSelect : function (authors, author_id ){
        var tag = '';
        var i = 0;
        while(i<authors.length){
            var selected = '';
            if(authors[i].id === author_id){
                selected = ' selected'
            }
            tag = tag + `<option value="${authors[i].id}"${selected}>${authors[i].name}<option>`;
            i++;
        }
        return `<select name="author">
            ${tag}
            </select>`
    }, authorList : function (authors){
        var authorList = `<table border="1"  width ="300" height="100" >
                            <tr>
                                <td>title</td>
                                <td>profile</td>
                                <td>update</td>
                                <td>delete</td>
                            </tr>`;
        var i = 0;
        while(i< authors.length){
            authorList = authorList + `<tr>
                                            <td>${authors[i].name}</td>
                                            <td>${authors[i].profile}</td>
                                            <td><a href="/author/update">update</a></td>
                                            <td><a href="/author/delete">delete</a></td>
                                       </tr>`
            i++;
        }
        authorList = authorList + '</table>'
        return authorList;
    },HTMLAuthor : function (title, list, authorList){
        return `
        <!doctype html>
        <html>
        <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
            <a href="/author">author</a>
            ${list}
            <h2>Author List</h2>
            ${authorList}
        </body>
        </html>   
        `;
    }

}

