console.log("We are in JS Library Project");


//Construtor

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}

//Add methods to display prototype

Display.prototype.add = function (book) {
    console.log("Adding to UI");
    let tableBody = document.getElementById('tableBody');
    // let index = 1;
    //  index = index + 1;
    let uiString = `
                     <tr>
                     <td>${book.name}</td>
                     <td>${book.author}</td>
                     <td>${book.type}</td>
                     </tr>`;

    tableBody.innerHTML += uiString;
};

//Implementing the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
    console.log('Form gets Reset');
};

//Implementing the Validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
};
//Implementing the Show function
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `
                            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message!</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;

    // Arrow Function
            // setTimeout(() => {
            //     message.innerHTML = '';
            // }, 2000);            
    // Normal Function
            setTimeout(function() {
                message.innerHTML = '';
            }, 5000);            

};



//Add Submit Event Listener to Library Form

let librayForm = document.getElementById('libraryForm');
librayForm.addEventListener('submit', librayFormSubmit);


//Library Form Submit Function

function librayFormSubmit(e) {
    console.log('You have submitted Library Form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    // fiction, programming, cooking


    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value.toUpperCase();
    }
    else if (programming.checked) {
        type = programming.value.toUpperCase();
    }
    else if (cooking.checked) {
        type = cooking.value.toUpperCase();
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        //Show an Success Message
        display.show('success', "Your Book has being Successfully Added :)");

    }
    else {
        //Show an Error Message
        display.show('danger', "Sorry! You cannot add this Book :(");


    }



    e.preventDefault();
}
