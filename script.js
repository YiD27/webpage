$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

// Select all links with the class "custom-cursor"
const links = document.querySelectorAll('.custom-cursor');

// Loop through each link
links.forEach(link => {
  // Add mouseover event listener
  link.addEventListener('mouseover', function() {
    const imageName = this.dataset.hoverImage; // Get the value of data-hover-image attribute
    this.style.cursor = `url('${imageName}'), auto`; // Change cursor to custom image
  });

  // Add mouseout event listener
  link.addEventListener('mouseout', function() {
    this.style.cursor = 'auto'; // Reset cursor to default
  });
});

});
