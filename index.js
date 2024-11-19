let btn = document.getElementById("generate-resume");

btn.addEventListener("click", function(evt) {
    evt.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let education = document.getElementById("education").value;
let skills = document.getElementById("skills").value;

let resumeDiv = document.getElementById("resume");
   resumeDiv.innerHTML = `
    <h2><span contenteditable="true">${name}</span></h2>
    <h3><span contenteditable="false">Email</span></h3>
    <p>Email address: <span contenteditable="true">${email}</span></p>
    <h3><span contenteditable="false">Phone</span></h3>
    <p>Phone Number: <span contenteditable="true">${phone}</span></p>
    <h3><span contenteditable="false">Education</span></h3>
    <p>Educational Background: <span contenteditable="true">${education}</span></p>
    <h3><span contenteditable="false">Skills</span></h3>
    <p>Programming Languages: <span contenteditable="true">${skills}</span></p>
   `; 
    
});

let generate = document.getElementById("generate-pdf")

generate.addEventListener("click", function() {
   const {jsPDF} = window.jspdf; 
   const doc = new jsPDF();

   doc.text ('Resume', 10, 10);
   doc.text (`Name: ${document.getElementById('name').value}`,10, 20);
   doc.text (`Email: ${document.getElementById('email').value}`,10, 30);
   doc.text (`Phone Number: ${document.getElementById('phone').value}`,10, 40);
   doc.text (`Education: ${document.getElementById('education').value}`,10, 50);
   doc.text (`Skills: ${document.getElementById('skills').value}`,10, 70);
   doc.save ('Saad-Resume.pdf');
});