
function signUserUp() {
    var full_name = $('#js-full-name').val();
    var email = $('#js-email').val();

    var contact = { 'full_name': full_name, 'email': email }

    // Check to see if there is a contacts stringified object already 
    // in localstorage
    if (localStorage.contacts) {
      var contacts_object = JSON.parse(localStorage.contacts)

      // If there is, then parse it back to an object and add a new 
      // contact to the end
      var contacts = contacts_object.contacts
      contacts.push(contact)

    } else {
      // Else, create a contacts object and add the contact to it
      var contacts_object = {
        'contacts': [contact]
      };
    };

    // Stringify the contacts object and save it to local storage
    localStorage.contacts = JSON.stringify(contacts_object);

    alert('Contact saved');
}