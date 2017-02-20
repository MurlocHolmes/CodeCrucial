$(document).ready(function() {
$("#contact-submit-button").click(function(e) {
    e.preventDefault();
    var contact_data = {
        "full_name" : $("#full_name").val(),
        "email_address" : $("#email_address").val(),
        "telephone_number" : $("#telephone_number").val(),
        "title" : $("#title").val(),
        "text" : $("#text").val(),
        'csrfmiddlewaretoken' : document.getElementsByName('csrfmiddlewaretoken')[0].value
    };
    function setSuccessDiv() {
        var contactContainer = document.getElementById('contact-container');
        var staticHeight = contactContainer.clientHeight;
        contactContainer.style.height = staticHeight + 'px';
        contactContainer.innerHTML = ('<div id="contact-sent"><p>Your message has been recieved! Thank you and I will be with you within 24 hours.</p></div>');
        setTimeout(function() {document.getElementById('contact-sent').className = 'active';}, 500);
    };
    setSuccessDiv();
    // $.ajax({
    //     type: "POST",
    //     url: "submit_contact",
    //     data: contact_data,
    //     success: setSuccessDiv,
    //     dataType: 'json'
    // });
});
});