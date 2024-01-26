 //toggle button for responsiveness
var toggleBtn =document.querySelector(".toggle-btn")
var toggleBtnIcon =document.querySelector(".toggle-btn i")
var dropDownMenu =document.querySelector(".dropdown-link")

toggleBtn.onclick=function () {
dropDownMenu.classList.toggle('open')
var isOpen = dropDownMenu.classList.contains('open')
toggleBtnIcon.classList = isOpen
? "fa-solid fa-bars"
:  "fa-solid fa-xmark"

}
//make it visible and dissappear
function toggle() {
    var drop = document.getElementById("dropdown");
    if (drop.style.display === "none") {
      drop.style.display = "block";
    } else {
      drop.style.display = "none";
    }
  }


  //Dark mode
  function darkMode(){
    var checkbox = document.body
    document.body.classList.toggle("dark-mode");
  
  
  }

  
    let Form = document.getElementById("form");


    Form.addEventListener("submit", (e) => {
      e.preventDefault();
    
      let name = document.getElementById("name");
      let email = document.getElementById("email");
      let Message = document.getElementById("Message");
    
    let data = "name"
               "email"
               "Message"
               
    
    
      if ( name.value == "" || email.value == "" || Message.value == "" ) {
        alert("Ensure you input a value in all fields!");
      } else {
        
        alert("This form has been successfully submitted!");
        console.log(
          ` ${name.value}
           ${email.value}
           ${Message.value}`
          
        );
    
    
      }
  });

