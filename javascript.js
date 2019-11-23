$(".btn").on("click", function(event) {
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

}


});