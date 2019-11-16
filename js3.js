function fuun(){
    // var nuum=Request.QueryString["quer"] ;
    var a=location.search.substring(1).split("&");
var b=a[0].split("=");
let l=unescape(b[1]);

fetch('http://www.omdbapi.com/?t='+l+'&apikey=f64130b1')
.then((res) =>res.json())
.then((data) =>{


 var ex=`<image src="${data.Poster}" alt="Movie Poster" height="500" width="500">`;
var movieDetails;
movieDetails =`
     <h3> TITLE   : ${data.Title}</h3>
     <h3>YEAR: ${data.Year}</h3>
     <h3>RELEASED   : ${data.Released}</h3>
     <h3>GENRE   : ${data.Genre}</h3>
    <h3>DIRECTOR: ${data.Director}</h3>
    <h3>WRITER  : ${data.Writer}</h3>
    <h3>ACTOR   : ${data.Actors}</h3>
    <h3>LANGUAGE: ${data.Language}</h3>
    <h3>RUNTIME : ${data.Runtime}</h3>
     `;
  var plot;
  plot=`
       <h4>PLOT   : ${data.Plot}</h4>
  `;
var rating;
  rating=`
  <p>RATED   : ${data.Rated}</p>
  <h4>IMDB ID   : ${data.Production}</h4>
  <h4>Rating Source   : ${data.Ratings[0].Source}</h4>
  <h4>Rating Value  : ${data.Ratings[0].Value}</h4>
  <h4>METASCORE : ${data.Metascore}</h4>
  <h4>IMDB RATING   : ${data.imdbRating}</h4>
  <h4>IMDB VOTES   : ${data.imdbVotes}</h4>
  `;
  var booking;
  booking=`<p>VISIT : <a href="https://in.bookmyshow.com">Bookmyshow</a></p>
  
  <p>VISIT : <a href="https://www.ticketnew.com">TicketNew</a></p>
  
  <p>VISIT : <a href="https://www.justickets.in">Visit our HTML tutorial</a></p>
  
  `;
     document.getElementById('im').innerHTML=ex;
document.getElementById('movieDetails').innerHTML+=movieDetails;
document.getElementById('plot').innerHTML+=plot;
document.getElementById('rating').innerHTML+=rating;
document.getElementById('booking').innerHTML+=booking;
})
.catch((error)=>console.log(error))
}
function fun1(){
document.querySelector('#bg-modal1').style.display="flex";
//document.querySelector('#close').style.display="flex";

}

   document.querySelector('#close1').addEventListener("click", function() {
document.querySelector('#bg-modal1').style.display = "none";
});
   

function fun2(){
    document.querySelector('#bg-modal2').style.display="flex";
    //document.querySelector('#close').style.display="flex";
    
    }
    
       document.querySelector('#close2').addEventListener("click", function() {
    document.querySelector('#bg-modal2').style.display = "none";
    });

    function fun3(){
        document.querySelector('#bg-modal3').style.display="flex";
        //document.querySelector('#close').style.display="flex";
        
        }
        
           document.querySelector('#close3').addEventListener("click", function() {
        document.querySelector('#bg-modal3').style.display = "none";
        });

        function fun4(){
            document.querySelector('#bg-modal4').style.display="flex";
            //document.querySelector('#close').style.display="flex";
            
            }
            
               document.querySelector('#close4').addEventListener("click", function() {
            document.querySelector('#bg-modal4').style.display = "none";
            });

fuun();
     