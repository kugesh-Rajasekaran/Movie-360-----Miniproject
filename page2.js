var scrpos;
var count;
var i;
var op;
var arrct=0;
            
//saving the scroll bar position in variable scrpos using EventListener
window.addEventListener('scroll',function(e){
   scrpos=window.scrollY;
});
      
//exec-order=4   Executes when show button is clicked-retreive,increment and store the count variable.
function showMore()
{    
count=sessionStorage.getItem("count");
count++;
sessionStorage.setItem("count", count);
loadData();
}

//exec-order=3  Purpose of this function-Loads the content and displays it.
function loadData()
{
 //fix scroll bar to previous state   
 window.scrollTo(0,scrpos);
 count=sessionStorage.getItem("count");
 sessionStorage.setItem("flag", 1);
 var a=location.search.substring(1).split("&");
 var b=a[0].split("=");
 let l=unescape(b[1]).toLowerCase();

 //start fetching from API
 
 fetch('http://www.omdbapi.com/?s='+l+'&page='+count+'&apikey=f64130b1')
 .then((res) =>res.json())
 .then((data) =>{
     var len=data.Search.length;
     //if there is no movie available on given query
     if(len==0)
     {
        op=`<h3>Movie not found</h3>`;
        document.getElementById('par').innerHTML=op;
     }
     else
     {
     console.log(len)
     var quer;
     op=sessionStorage.getItem("op");
       // op+='<div class="row">';
     op+=`<table width="100%">`;
     op+=`<tr>`;
         for( i=0;i<len;i++)
         {
            if(i!=8 && i!=9)
            {
           op +=`
              <td>
                <a href="page3.html?quer=${data.Search[i].Title}">
                  <img src="${data.Search[i].Poster}" alt="NO IMAGE" style="height:250px;width:330px;" >
                  <h3 style="color:rgb(37, 119, 187);">${data.Search[i].Title}</h3>
                </a>
              </td>
            `;
            if((i+1)%4==0)
             {
               op+=`</tr>`;
               op+=`<tr>`;
             }
            }
            else
             {
               if(i==8){
                  op+=`</tr>;
                       </table>;
                       <table>
                       <tr>`;
               }
               op +=`
                  <td>
                  <a href="page3.html?quer=${data.Search[i].Title}">
                  <img src="${data.Search[i].Poster}" alt="NO IMAGE" style="height:250px;width:660px;color:red;" >
                  <h3 style="color:rgb(37, 119, 187);">${data.Search[i].Title}</h3>
                  </a>
                  </td>
            `;
            }
         }

        op+=`</tr></table>`;
  
     var but=`<button onclick="showMore()" class="button">Show More</button>`;
     //storing in session
     sessionStorage.setItem("op", op);
     //displaying data
     document.getElementById('par').innerHTML=op;
     document.getElementById('par').innerHTML+=but;
      }
   })
   .catch((error)=>console.log(error))

}

//exec-order=2  start of execution
function start()
{
  //getting flag from session storage
  flag=sessionStorage.getItem("flag");
  if(flag==1)
  {  

      //retreiving the stored variable op from session storage and displaying-when navigation from page 3 to page 1
      document.getElementById('par').innerHTML=sessionStorage.getItem("op");
      var but=`<button onclick="showMore()" class="button">Show More</button>`;
      document.getElementById('par').innerHTML+=but;

   }
   //when navigation from page 1 to page 2 or reloading page 2 else will execute
   else
   {
      loadData();
   }
}

       start();     // exec-order=1
