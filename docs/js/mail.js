// Function to send email via smtp
let myForm = document.getElementById('formMail');
  myForm.addEventListener('submit', function(e)
{
    e.preventDefault();
    let fullName = document.getElementById('fullName').value;
    let mail = document.getElementById('mail').value;
    let theSubject = document.getElementById('subject').value;
    let theMessage = document.getElementById('message').value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "bonnenfant.romain@gmail.com",
        Password : "87278544-595b-4dcd-b1bd-762a77ded37e",
        To : "bonnenfant.romain@gmail.com",
        From : mail,
        Subject : theSubject,
        Body : fullName+"_"+theSubject+" : "+theMessage
    }).then(
        message => console.log(message)
    );
});