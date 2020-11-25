// function submit() {
//     confirm('Are you sure you want to submit the form');
//     let user= {};
//     user.name;
// }
function submitInfo() {
    var firstName ='';
    var lastName ='';
    var email ='';
    var password ='';

    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    console.log('first Name:' + firstName);
    console.log('Last Name:' + lastName);
    console.log('Email:' + email);
    console.log('Password:' + password);

 if (firstName =='' && lastName =='' && email =='' && password =='') {
    alert('Input Missing Field');
} else {
    alert( 'Form has been submitted');
}
}