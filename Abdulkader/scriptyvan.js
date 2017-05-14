$(document).ready(function() {
    /* ***** BACKEND ***** */

    // Create a connection to your Firebase database
    var myFirebaseRef = new Firebase("https://project-chat-example.firebaseio.com/");

    // Listen for realtime changes
    myFirebaseRef.on('child_added', function(childSnapshot, prevChildKey) {
        var data = childSnapshot.val(); // code to handle new child.
        updateConversation(data.pseudo, data.message);
    });

    var sendMessage = function(pseudo, message) {
        myFirebaseRef.push({
            pseudo: pseudo,
            message: message
        }); // Save data
    };

    /* ***** FRONTEND ***** */

    var updateConversation = function(pseudo, message) {
        $("#conversation").append(
            '<li class="mdl-list__item">' +
            '    <span class="mdl-list__item-primary-content">' +
            '        <strong>' + pseudo + '</strong>: ' + message +
            '    </span>' +
            '</li>'
        );
    };

    // Handle the click on send button
    $("#send").on("click", function() {
        sendMessage($("#pseudo").val(), $("#message").val());
        $("#message").val(""); // clear the message form input
    });
});
