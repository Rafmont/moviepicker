var MainApi = function() {
    const movies = [
            
        {
            id: 1,
            name: "Velozes e Furiosos X",
            streaming: "YouTube",
            year: "2023"
        },
        {
            id: 2,
            name: "Healer",
            streaming: "Netflix",
            year: "2014"
        },
        {
            id: 3,
            name: "One Piece - East Blue Saga",
            streaming: "Netflix",
            year: "1993"
        },
        {
            id: 4,
            name: "Meu Amigo Totoro",
            streaming: "Netflix",
            year: "1988"
        },
    
    ]

    var onClickSelectFilme = function() {
        $("#btn_filme").on("click", () => {
            let movieTitle = document.getElementById('movieTitle')
            let movieYear = document.getElementById('movieYear')
            let movieStreaming = document.getElementById('movieStreaming')

            let maxLenght = movies.length + 1;
            let randomId = Math.floor(Math.random() * (maxLenght - 1) + 1)
            let movie = movies[randomId - 1];

            movieTitle.innerHTML = movie.name;
            movieYear.innerHTML = movie.year;
            movieStreaming.innerHTML = movie.streaming;
        });
    }

    return {
        init: function() {
            onClickSelectFilme();
        }
    }
}();