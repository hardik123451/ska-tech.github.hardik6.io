  console.log("Welcome to SKA Technology Pvt. Ltd.");

  // $(document).ready(function(){
  //   $('body').scrollspy({
  //     target: '#sNavbar',
  //     offset: 10
  //   });
  // });




  let success = document.getElementById("success");
  let failure = document.getElementById("failure");

  let cName = document.getElementById("inputName4");
  let cEmail = document.getElementById("inputEmail4");
  let cNumber = document.getElementById("inputNumber4");
  let cCompany = document.getElementById("inputCompany4");
  let cCity = document.getElementById("inputCity");
  let cState = document.getElementById("inputState");
  let cPinCode = document.getElementById("inputPinCode");
  let cMessage = document.getElementById("inputMessage");
  let gridCheck =document.getElementById("gridCheck");

  let submit = document.getElementById("cSubmit");
  let contactForm = document.getElementById("contactForm");


  let validName = false;
  let validEmail = false;
  let validPhone = false;

  function formReset() {
    contactForm.reset();
    submit.setAttribute("disabled", "true");

  };

  if (gridCheck) {
    submit.removeAttribute("disabled");

  } else {
    
  }



  success.style.display = "none";

  failure.style.display = "none";

  
  cName.addEventListener("blur", () => {
  console.log("name is blurred");
  // validate name here

  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}/;
  let str = cName.value;
  console.log(regex, str);
  if (regex.test(str)) {
      console.log("Your name is valid");
      cName.classList.remove("is-invalid");
      validName = true;
  }
  else{
      console.log('Your name is not valid');
      cName.classList.add("is-invalid");
      validName = false;
      
  }
});


// cEmail.addEventListener("blur", () => {
//   console.log("email is blurred");
//   // validate name here
   
//   let regexEmail = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]{2,100})$/;
//   let str1 = cEmail.value;
//   console.log(regexEmail, str1);
//   if (regexEmail.test(str1)) {
//       console.log("Your email is valid");
//       cEmail.classList.remove("is-invalid");
//       validEmail = true;

//   }
//   else{
//       console.log('Your email is not valid');
//       cEmail.classList.add("is-invalid");
//       validEmail = false;
//   }
// })


// selectCar.addEventListener("blur", () => {
//   console.log("selectCar is blurred");
//   // validate name here
  
   
//   let regexCar = /^[a-zA-Z]([0-9a-zA-Z]){2,10}/;
//   let str2 = selectCar.value;
//   console.log(regexCar, str2);
//   if (regexCar.test(str2)) {
//       console.log("Your Car Selection is valid");
//       selectCar.classList.remove("is-invalid");
//   }
//   else{
//       console.log('Your Car Selection is not valid');
//       selectCar.classList.add("is-invalid");
      
//   }

// })


// cPinCode.addEventListener("blur", () => {
//   console.log("address is blurred");
//   // validate name here

//   let regexAddress = /^[0-9]{6}/;
//   let str3 = cPinCode.value;
//   console.log(regexAddress, str3);
//   if (regexAddress.test(str3)) {
//       console.log("Your address is valid");
//       cPinCode.classList.remove("is-invalid");
//   }
//   else{
//       console.log('Your address is not valid');
//       cPinCode.classList.add("is-invalid");
      
//   }

// })


cNumber.addEventListener("blur", () => {
  console.log("phone is blurred");
  // validate name here
  
  let regexPhone = /^[0-9]{10}/;
  let str4 = cNumber.value;
  console.log(regexPhone, str4);
  if (regexPhone.test(str4)) {
      console.log("Your number is valid");
      cNumber.classList.remove("is-invalid");
      validPhone = true;
  }
  else{
      console.log('Your number is not valid');
      cNumber.classList.add("is-invalid");
      validPhone = false;
      
  }

})


// cMessage.addEventListener("blur", () => {
//   console.log("message is blurred");
//   // validate name here


//   let regexMessage = /^[a-zA-Z]([0-9a-zA-Z]){2,10}/;
//   let str5 = cMessage.value;
//   console.log(regexMessage, str5);
//   if (regexMessage.test(str5)) {
//       console.log("Your message is valid");
//       cMessage.classList.remove("is-invalid");
//   }
//   else{
//       console.log('Your message is not valid');
//       cMessage.classList.add("is-invalid");
      
//   }

// });


gridCheck.addEventListener("click", function(){
  console.log("gridcheck clicked")
  if (validName && validPhone) {
    console.log("both true");
    gridCheck.checked = true;
    
    submit.removeAttribute("disabled");
    
  }
  else{
    console.log("both not true");
    submit.setAttribute("disabled" , "true");
    gridCheck.checked = false;
    failure.classList.add("show");
    failure.style.display = "block";

    setTimeout(() => {
      failure.classList.remove("show");
      failure.style.display = "none";
    
    }, 2000);
  }
});




submit.addEventListener("click", (e)=>{
  console.log('submitted');
  e.preventDefault();
  
  if (validName && validPhone && gridCheck) {
      console.log('all true');
      success.classList.add("show");
      success.style.display = "block";
      failure.style.display = "none";
      failure.classList.remove("show");



      sendEmail();
      formReset();
      validName = false;
      validPhone = false;
      
    setTimeout(() => {
      success.classList.remove("show");
      success.style.display = "none";
    
    }, 2000);

  } else {
      console.log('false');
      failure.classList.add("show");
      failure.style.display = "block";
      success.style.display = "none";
      success.classList.remove("show");
      
    setTimeout(() => {
      failure.classList.remove("show");
      failure.style.display = "none";
    
    }, 2000);
  }
  // success.classList.add("show");


});






  function sendEmail() {
    
    // if (condition) {
      
    // } else {
      
    // }
    console.log(cName);



    let body = "Name: " + cName.value +
      "<br/> Email: " + cEmail.value +
      "<br/> Mobile Number: " + cNumber.value +
      "<br/> Company:" + cCompany.value +
      "<br/> City:" + cCity.value +
      "<br/> State:" + cState.value +
      "<br/> Pin Code:" + cPinCode.value +
      "<br/> Message:" + cMessage.value;


    Email.send(
      // Your security token is 29ab9f15-c7c6-4873-9919-4608fca03da4 Please take note of this.

      {

        Host: "smtp.elasticemail.com",
        Username: "hardikbalwani9@gmail.com",
        Password: '2A879E3EF8394553C3FC1CDF1E8B62000B33',
        To: 'hardikbalwani9@gmail.com',
        From: "just4u.harry04@gmail.com",
        Subject: "New Enquiry from contact form",
        Body: body


      }).then(
        function () {
          alert("Thank You. We have received your details and we will get back to you shortly");
          let contactForm = document.getElementById("contactForm");
          contactForm.reset();


        }
      );

  }










  // let navbarSupportedContent = document.getElementById("navbarSupportedContent")
  // let navTogglerIcon = document.getElementById("navTogglerIcon");

  // let a = navbarSupportedContent.classList;
  // console.log(a)

  // navTogglerIcon.addEventListener("click", function(){
  //   console.log("clicked");
  //   if (a.contains("show") != true) {
  //     console.log("false");
  //     a.add("show");
  //     a.remove("hide");

  //   } 
  // });



  // // navTogglerIcon.addEventListener("blur", navTogglerIconFunction);
  // function navTogglerIconFunction() {
  //   console.log("blur");
  //   if (a.contains("show") != true) {
  //     console.log("false");
  //     a.add("show");
  //     a.remove("hide");

  //   } else {
  //     console.log("true");

  //     setInterval(() => {
  //       a.remove("show");
  //       a.add("hide");

  //     }, 500);
  //   }

  // }



  // var corp = $("html, body");
  // $(".scrollTrigger").click(function(){
  //   var flag = $.attr(this,"href");
  //   corp.animate({
  //     scrollTop: $(schild).offset().top -60
  //   }, 1600, function(){
  //     window.location.hash = flag;

  //   });
  //   return false;
  // });


  // $("#navbarSupportedContent").on('show.bs.collapse', function () {
  //   $('.scrollTrigger').click(function () {
  //     $("#navbarSupportedContent").collapse('hide');
  //   });
  // });




  // navbar scroll down show function
  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 450);

  });



  // // Get the modal
  // var modal = document.getElementById("myModal");

  // // Get the image and insert it inside the modal - use its "alt" text as a caption
  // var img = document.getElementById("smallimg1new");
  // var modalImg = document.getElementById("img01");
  // var captionText = document.getElementById("caption");
  // img.onclick = function () {
  //   modal.style.display = "block";
  //   modalImg.src = this.src;
  //   captionText.innerHTML = this.alt;
  // }

  // // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];

  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function () {
  //   modal.style.display = "none";
  // }











  // var slider1Images = document.getElementById("slider1Images");
  // var images = new Array(
  //     "img/slider1.png",
  //     "img/slider2.png",
  //     "img/slider3.png",
  //     "img/slider4.png"
  // );

  // var len = images.length;
  // var i = 0 ;
  // function slider(){
  //     if(i > len-1){
  //         i = 0;
  //     }
  //     slider1Images.src = images[i];
  //     i++;
  //     setTimeout('slider()', 6000);
  // }




  // hide offcanvas by js,   failed
  // let scrollTrigger = document.getElementsByClassName("scrollTrigger");
  // let offcanvasDark = document.getElementById("offcanvasDark");

  // Array.from(scrollTrigger).forEach(function(element){
  //   element.addEventListener("click", function(){
  //     // offcanvasDark.classList.add('hide');
  //     offcanvasDark.classList.remove('show');
  //     offcanvasDark.setAttribute("aria-modal", false);
  //     offcanvasDark.setAttribute("role", "none");
  //   });
  // });



  // mobile screen menu options
  $("#offcanvasDark a").click(function () {
    $('.offcanvas').offcanvas('hide');
  });






  window.addEventListener('scroll', reveal);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active');
      }
      else {
        reveals[i].classList.remove('active');
      }
    }

  }





  setTimeout(function(){        
    $('#preloader').fadeOut();
    $('.preloader_img').delay(150).fadeOut('slow'); 
  }, 2000);


