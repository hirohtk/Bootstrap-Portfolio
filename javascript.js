$(".btn").on("click", function (event) {
    event.preventDefault();

    let specificAssignment = $(this).parent().attr("name");

    switch (specificAssignment) {

        case "friendFinder":

            console.log("FriendFinder Assignment Selected");
            $("#guide-modal").modal();
            $("#projectTitle").text(specificAssignment);
            $("#repo").html("<a href='https://github.com/hirohtk/friend-finder'> GitHub Repository </a>")
            $("#deployed").html("<a href='https://stormy-ocean-54298.herokuapp.com/'> Deployed Application </a>")

            break;

        case "eatDaBurger":

            $("#guide-modal").modal();
            $("#projectTitle").text(specificAssignment);
            $("#repo").html("<a href='https://github.com/hirohtk/burger'> GitHub Repository </a>")
            $("#deployed").html("<a href='https://peaceful-badlands-20443.herokuapp.com/'> Deployed Application </a>")

            break;

        case "bamazon":
            $("#guide-modal").modal();
            $("#projectTitle").text(specificAssignment);
            $("#repo").html("<a href='https://github.com/hirohtk/bamazon_assignment'> GitHub Repository </a>")
            $("#deployed").html("CLI App - Undeployable")

            break;

        case "wordGuess-adv":

            $("#guide-modal").modal();
            $("#projectTitle").text(specificAssignment);
            $("#repo").html("<a href='https://github.com/hirohtk/word_guess_node'> GitHub Repository </a>")
            $("#deployed").html("CLI App - Undeployable")

            break;

        case "liri":

            $("#guide-modal").modal();
            $("#projectTitle").text(specificAssignment);
            $("#repo").html("<a href='https://github.com/hirohtk/liri-node-app'> GitHub Repository </a>")
            $("#deployed").html("CLI App - Undeployable")

            break;

        case "trivia":

            $("#guide-modal").modal();
            $("#projectTitle").text(specificAssignment);
            $("#repo").html("<a href='https://github.com/hirohtk/TriviaGame'> GitHub Repository </a>")
            $("#deployed").html("<a href='https://hirohtk.github.io/TriviaGame/'> Deployed Application </a>")

            break;

        case "starWars":

            $("#guide-modal").modal();
            $("#projectTitle").text(specificAssignment);
            $("#repo").html("<a href='https://github.com/hirohtk/Star-wars-game'> GitHub Repository </a>")
            $("#deployed").html("<a href='https://hirohtk.github.io/Star-wars-game/'> Deployed Application </a>")

            break;

        case "wordGuess-easy":

        $("#guide-modal").modal();
        $("#projectTitle").text(specificAssignment);
        $("#repo").html("<a href='https://github.com/hirohtk/Word-guess-game'> GitHub Repository </a>")
        $("#deployed").html("<a href='https://hirohtk.github.io/Word-guess-game/'> Deployed Application </a>")

        break;
        
    }


});