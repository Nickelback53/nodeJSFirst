module.exports = {
    HTML : function (title, list, body, control){
        return `
        <!doctype html>
        <html>
        <head>
            <title>자유게시판 - ${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">자유게시판</a></h1>
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
    }

}

