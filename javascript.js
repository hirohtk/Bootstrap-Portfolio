const linksList = {
    eatDaBurger: {
        repo: "https://github.com/hirohtk/burger",
        deployed: "https://peaceful-badlands-20443.herokuapp.com/",
    },
    friendFinder: {
        repo: "https://github.com/hirohtk/friend-finder",
        deployed: "https://stormy-ocean-54298.herokuapp.com/",
    },
    bamazon: {
        repo: "https://github.com/hirohtk/bamazon_assignment",
        deployed: "CLI App - Undeployable",
    },
    wordguessAdv: {
        repo: "https://github.com/hirohtk/word_guess_node",
        deployed: "CLI App - Undeployable",
    },
    liri: {
        repo: "https://github.com/hirohtk/liri-node-app",
        deployed: "CLI App - Undeployable",
    },
    trivia: {
        repo: "https://github.com/hirohtk/TriviaGame",
        deployed: "https://hirohtk.github.io/TriviaGame/",
    },
    starWars: {
        repo: "https://github.com/hirohtk/Star-wars-game",
        deployed: "https://hirohtk.github.io/Star-wars-game/",
    },
    wordGuessEasy: {
        repo: "https://github.com/hirohtk/Word-guess-game",
        deployed: "https://hirohtk.github.io/Word-guess-game/",
    },

}

$(".btn").on("click", function (event) {
    event.preventDefault();

    let specificAssignment = $(this).parent().attr("name");
    console.log(specificAssignment);

    function dry1(specificAssignment) {
        let repo;
        let deployed;
        // Was trying the few lines of code (commented out below), but...
        // DOES NOT WORK: specificAssignment, although containing the string I need, the object above reads it as specificAssignment
        // So I still need a switch statement.  Prevented DRY for the DOM JS but not the switch
        // repo = linksList.specificAssignment.repo;
        // deployed = linksList.specificAssignment.deployed;

        switch (specificAssignment) {
            case "eatDaBurger":
                repo = linksList.eatDaBurger.repo
                deployed = linksList.eatDaBurger.deployed
            break;
            case "friendFinder":
                repo = linksList.friendFinder.repo
                deployed = linksList.friendFinder.deployed
            break;
            case "bamazon":
                repo = linksList.bamazon.repo
                deployed = linksList.bamazon.deployed
            break;
            case "wordguessAdv":
                repo = linksList.wordguessAdv.repo
                deployed = linksList.wordguessAdv.deployed
            break;
            case "liri":
                repo = linksList.liri.repo
                deployed = linksList.liri.deployed
            break;
            case "trivia":
                repo = linksList.trivia.repo
                deployed = linksList.trivia.deployed
            break;
            case "starWars":
                repo = linksList.starWars.repo
                deployed = linksList.starWars.deployed
            break;
            case "wordGuessEasy":
                repo = linksList.wordGuessEasy.repo
                deployed = linksList.wordGuessEasy.deployed
            break;

        }

        $("#guide-modal").modal();
        $("#projectTitle").text(specificAssignment);
        $("#projectTitle").attr("style", "font-weight: bold; display:inline;");
        $("#repo").html("<a href='" + repo + "'> GitHub Repository </a>");
        if (deployed.search("CLI") === -1) {
            $("#deployed").html("<a href='" + deployed + "'> Deployed Application </a>");
        }
        else {
            $("#deployed").html(deployed);
        }
    }

    dry1(specificAssignment);

});