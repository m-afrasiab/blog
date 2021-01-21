

 $.getJSON('https://www.googleapis.com/blogger/v3/blogs/5668590207052029482/posts/search?q=label:need&key=AIzaSyDpmJuqtMiXEnDUGyUrEzPlbAHuRQcQQB0', function (data) {
    var myarray = [];
    var parray = [];
    
for (i = 0; i < data.items.length; i++)
     myarray.push(data.items[i].title);
      for (i = 0; i < data.items.length; i++)
     parray.push(data.items[i].content);
 
    

var listv = [];
for (i = 0; i < data.items.length; i++)
listv.push('<ons-list-item class="post'+i+'">'+myarray[i]+'</ons-list-item>')
     
         for (i = 0; i < data.items.length; i++)
        document.querySelector('.listv').innerHTML += listv[i];
       
         
    document.addEventListener('show', function (event) {
  var page = event.target;   
if (page.id === 'need') {
  
 
};



 });

      
    })

 