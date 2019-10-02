$(document).ready(function(){   
    $("a").on('click', function(event) {
        
      // Make sure this.Link has a value before overriding default behavior
      if (this.Link !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store Link
        var Link = this.Link;
  
        // smooth scroll
        $('html, body').animate({
          scrollTop: $(Link).offset().top
        }, 2000, function(){
     
          // Add Link (#) to URL when done scrolling (default click behavior)
          window.location.Link = Link;
        });
      }
    });
  });
  
  // These functions open and close the contact form 
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    this.Close();
  }
  