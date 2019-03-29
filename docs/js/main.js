let myForm = document.getElementById('formMail');
  
myForm.addEventListener('submit', function(e)
{
    e.preventDefault();
    let fullName = document.getElementById('fullName').value;
    let mail = document.getElementById('mail').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    alert(`
        ${fullName} , your mail is send !
        for this : ${subject}.
        your mail are : ${mail}.
        your text : ${message}.
        `);
    });
   