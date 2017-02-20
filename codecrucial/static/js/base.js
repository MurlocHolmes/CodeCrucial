$(document).ready(function() {
    var quotes = document.getElementsByClassName("quote");
    var projects = document.getElementsByClassName("project-tile");

    var quote_obj = {
        "class" : ".quote",
        "slides" : quotes,
        "time_per_slide" : 5000,
        "default_animation_time" : 2000,
        "time_between_slides" : 1000,
        "transition_objects" : {
            "quote-img" : {
                "class" : ".quote-img",
                "animation_time" : 2000,
                "animation_style" : "slide-right"
            },
            "quote-text" : {
                "class" : ".quote-text",
                "animation_time" : 1000,
                "animation_style" : "fade-in"
            }
        }
    };

    var project_obj = {
        "class" : ".project-tile",
        "slides" : projects,
        "time_per_slide" : 4000,
        "default_animation_time" : 2000,
        "time_between_slides" : 1000,
        "threshold" : 576,
        "transition_objects" : {
            "quote-img" : {
                "class" : ".project-image-wrapper, .project-caption",
                "animation_time" : 1000,
                "animation_style" : "fade-in"
            }
        }
    };

    var quote_slider = new CC_Slider(quote_obj);
    var project_slider = new CC_Slider(project_obj);
});