function loadData(){                                                                  //first function to execute
   sessionStorage.setItem("flag", 1);                                             //storing flag variable in session
   // var nuum=Request.QueryString["quer"] ;
   var a=location.search.substring(1).split("&");                                 //first split to obtain user searched query
   var b=a[0].split("=");                                                         //further split to obtain the specific search word
   let l=unescape(b[1]);                                                          // var l contain the searched movie or key name

   fetch('http://www.omdbapi.com/?t='+l+'&apikey=f64130b1')                       //using fetch,accessing the api for data retreival
   .then((res) =>res.json())                                                      //returning the data in json format
   .then((data) =>{                                                               //capturing the data 
      var ex=`<image src="${data.Poster}" alt="Movie Poster" height="500" width="500">`;
      var movieDetails;                                                           //store required data in variables.
      movieDetails =`
         <h3><b><u>TITLE</b></u>   : ${data.Title}</h3>
         <h3><b><u>YEAR:</b></u> ${data.Year}</h3>
         <h3><b><u>RELEASED</b></u>   : ${data.Released}</h3>
         <h3><b><u>GENRE</b></u>  : ${data.Genre}</h3>
         <h3><b><u>DIRECTOR</b></u>: ${data.Director}</h3>
         <h3><b><u>WRITER</b></u>  : ${data.Writer}</h3>
         <h3><b><u>ACTOR</b></u>   : ${data.Actors}</h3>
         <h3><b><u>LANGUAGE</b></u>: ${data.Language}</h3>
         <h3><b><u>RUNTIME</b></u> : ${data.Runtime}</h3>
          `;
      var plot;
      plot=`
         <h4><b><u>PLOT</b></u>   : ${data.Plot}</b></h4>
          `;
      var rating;
      rating=`
         <p><b><u>RATED</b></u>   : ${data.Rated}</b></p>
         <h4><b><u>IMDB ID</b></u>  : ${data.Production}</b></h4>
         <h4><b><u>Rating Source</b></u>   : ${data.Ratings[0].Source}</h4>
         <h4><b><u>Rating Value</b></u>  : ${data.Ratings[0].Value}</h4>
         <h4><b><u>METASCORE</b></u> : ${data.Metascore}</h4>
         <h4><b><u>IMDB RATING</b></u>  : ${data.imdbRating}</h4>
         <h4><b><u>IMDB VOTES</b></u>   : ${data.imdbVotes}</h4>
         `;
      var booking;
      booking=`
         <p><b><u>VISIT</b></u> : <a href="https://in.bookmyshow.com">Bookmyshow</a></p>
         <p><b><u>VISIT</b></u> : <a href="https://www.ticketnew.com">TicketNew</a></p>
         <p><b><u>VISIT</b></u> : <a href="https://www.justickets.in">Justickets</a></p>
          `;                                                                      //displaying the stored variables
      document.getElementById('im').innerHTML=ex;                                              
      document.getElementById('movieDetails').innerHTML+=movieDetails;
      document.getElementById('plot').innerHTML+=plot;
      document.getElementById('rating').innerHTML+=rating;
      document.getElementById('booking').innerHTML+=booking;
      })
      .catch((error)=>console.log(error))                                         //for catching error
   }

/*for pop-up box*/

//when movieDetails button clicked
function movieDetails()                                                                   
{
   document.querySelector('#bg-modal1').style.display="flex";
   //document.querySelector('#close').style.display="flex";
}

document.querySelector('#close1').addEventListener("click", function() {
document.querySelector('#bg-modal1').style.display = "none";
});
   
//when plot button clicked
function plot()
{
    document.querySelector('#bg-modal2').style.display="flex";
    //document.querySelector('#close').style.display="flex";
    
}
    

document.querySelector('#close2').addEventListener("click", function() {
document.querySelector('#bg-modal2').style.display = "none";
});

//when rating button clicked
function review()
{
       document.querySelector('#bg-modal3').style.display="flex";
        //document.querySelector('#close').style.display="flex";
        
}
    

document.querySelector('#close3').addEventListener("click", function() {
        document.querySelector('#bg-modal3').style.display = "none";
});

//when booking button clicked
function booking()
{
document.querySelector('#bg-modal4').style.display="flex";
//document.querySelector('#close').style.display="flex";            
}
   

document.querySelector('#close4').addEventListener("click", function() {
document.querySelector('#bg-modal4').style.display = "none";
});

//to go back to page-2
function goBack() 
{
  window.history.back();
}

loadData();                                                                       //Start of the document-fuun()
     