//Array to store essages
var messages = []

//Message type lookup object. Similar tp enum.
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

//Send data (optional)
var data = [
    {
        type: messageType.out,
        user: 'Bob',
        message: 'Hey, you have lunch plans?'
    },
    {
        type: messageType.in,
        user: 'Jim',
        message: 'Hi Bob! No, how about QDoba?'
    },
    {
        type: messageType.out,
        user: 'Bob',
        message: "Ok, let's go!"
    }
];

//Message constructor function.
function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

//Function to creat and return an element doe he supplied message.
function createMessageElement(message) {
    //Create text elemtn or the message
    var messagetext = document.createTextNode(
        message.user + ': ' + message.message
    );

    //Create the element and add the message text.
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //Add a class using the message.type;
    messageEl.className = message.type;

    return messageEl;
}

//Button click event handler to add a new message.
function addMessageHandler(event) {
    var user, type;
    var messageInpt = documment.getElementById('message-input');
    var messagesContainerEl = documetn.getElementById('message-container');

    //Determine message type and set message variables accordingly.
    switch (event.target.id) {
        case 'send-button':
            user = 'Bob';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Jim'
            type = messageType.unknown;
    }

    //Create new mwssage.
    if (messageInput.value != '') {
        //Contruct a message and it add to the array.
        var message = new Message(type, messageInput.value);
        messages.push(message);

        //crear a message element.
        var el = createMessageElement(message);

        //Add the message element to the DOM.
        messagesContainerEl.appendChild(el);

        //Reset inpt.
        messageInput.value = '';
    }
}