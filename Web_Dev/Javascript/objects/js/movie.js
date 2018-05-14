var movies = [ 
    { 
        title: "A Bugs Life", 
        rating: 4, 
        hasWatched: true
    },
    { 
        title: "A Little mermaid", 
        rating: 4, 
        hasWatched: false
    },
    {
        title: "Frozen", 
        rating: 3, 
        hasWatched: true
    } 
]

function printMovieDB(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr.hasWatched){
            console.log("You have watched " + arr[i].title + " - " + arr[i].rating);
        }
        else{
           console.log("You have not watched " + arr[i].title + " - " + arr[i].rating); 
        }
}

}

printMovieDB(movies);