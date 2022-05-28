let API_KEY = "254eef71";
    let container = document.getElementById("container");
    

async function getData() {
    
        let movie = document.getElementById("movieName").value;  
  let res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`);
  let data = await res.json();
  if(data.Response === "False"){
      container.append(" Error: MOVIE NOT FOUND!")
  }else{
      console.log(data);
  displayData(data);
}
}

function displayData(movie) {

    let img = document.createElement("img");
    img.src = movie.Poster;
    let title = document.createElement("p");
    title.textContent = movie.Title;
    let year = document.createElement("p");
    year.textContent = "Release Year" + movie.Year;
    let rating = document.createElement("p");
    if(movie.Ratings[0].Value > 8.5){
    rating.textContent = "IMDb Ratings: " + movie.Ratings[0].Value + "(RECOMMENDED!)";
    }
    else{
    rating.textContent = "IMDb Ratings: " + movie.Ratings[0].Value;
    }
    let runtime = document.createElement("p");
    year.textContent = "Runtime:" + movie.Runtime;

    
    container.append(img, title, year, rating, runtime);
  
}