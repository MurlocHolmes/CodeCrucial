/*
*   CC_Slider.js
*
*   A versatile slider that takes a config object. The time between
*   slides, the animation time, the animation style, and if the slider should
*   only appear at a certain pixel threshold are all customizable. There are
*   defaults for everything set aside from the animation style. The CSS
*   is set in a "partner file" that handles the different animation styles.
*   
*   Author: Taylor Dobson
*
*/
    var CC_Slider = function(sliderConfig) {

        this.setSlideIDs = function(slides) {
            var slideIDs = [];
                for(var i = 0; i < slides.length; i++) {
                    slideIDs[i] = slides[i].id;
                }
            return slideIDs;
        };

        this.toggleSlide = function(slide, delay) {
            if(delay==undefined) {
                delay = 0;
            }
            $("#" + slide).toggleClass("active");
            setTimeout(function() {
                $("#" + slide + " .transition-component").toggleClass("active");
            }, delay);
        }

        this.createCycle = function(slideIDs, threshold) {
            this.toggleSlide(slideIDs[0]);
            var cycle = (function() {
                    var currSlide = slideIDs.shift();
                    var nextSlide = slideIDs[0];
                    slideIDs.push(currSlide);
                    this.toggleSlide(currSlide);
                    this.toggleSlide(nextSlide,this.time_between_slides);
            }).bind(this);
            return cycle;

        }

        this.setTimePerSlide = function(time_per_slide) {
            if(time_per_slide==undefined) {
                this.time_per_slide = 5000;
            }
            else {
                this.time_per_slide = time_per_slide;
            }
        };

        this.setDefaultAnimationTime = function(animation_time) {
            if(animation_time==undefined) {
                this.animation_time = 2000;
            }
            else {
                this.animation_time = animation_time;
            }   
        };

        this.setTimeBetweenSlides = function(time_between_slides) {
            if(time_between_slides==undefined) {
                this.time_between_slides = 1000;
            }
            else {
                this.time_between_slides = time_between_slides;
            }
        };

        this.setThreshold = function(threshold) {
            if(threshold==undefined) {
                return 500000;
            }
            else {
                return threshold;
            }
        };
        this.addTransitionTiming = function(transitioner) {
            $(transitioner.class).css("transition", "all " + transitioner.animation_time/1000 + "s ease");
            $(transitioner.class).css("-webkit-transition", "all " + transitioner.animation_time/1000 + "s ease");
            $(transitioner.class).css("-moz-transition", "all " + transitioner.animation_time/1000 + "s ease");
        }        

        this.addTransitionStyle = function(transitioner) {
            $(transitioner.class).addClass(transitioner.animation_style);
        }

        this.setUpTransitionComponents = function(transition_objects) {
            for(var key in transition_objects) {
                transitioner = transition_objects[key];
                $(transitioner.class).addClass("transition-component");
                this.addTransitionTiming(transitioner);
                this.addTransitionStyle(transitioner);
            }
        };

        this.setUpSlides = function(slideClass) {
            $(slideClass).addClass("transition-parent");
        };

        this.breakDownTransitionComponents = function(transition_objects) {
            for(var key in transition_objects) {
                transitioner = transition_objects[key];
                $(transitioner.class).removeClass("transition-component");
                $(transitioner.class).removeClass("active");
                this.removeTransitionTiming(transitioner);
                this.removeTransitionStyle(transitioner);
            }
        };

        this.breakDownSlides = function(slideClass) {
            $(slideClass).removeClass("transition-parent");
            $(slideClass).removeClass("active");
        };

        this.removeTransitionTiming = function(transitioner) {
            $(transitioner.class).css("transition", "none");
            $(transitioner.class).css("-webkit-transition", "none");
            $(transitioner.class).css("-moz-transition", "none");
        }

        this.removeTransitionStyle = function(transitioner) {
            $(transitioner.class).removeClass(transitioner.animation_style);
        }


        this.startSlideCycle = function(shouldStart) {
            if(shouldStart) {
                this.setUpSlides(sliderConfig.class);
                this.setUpTransitionComponents(sliderConfig.transition_objects);
                var cycle = this.createCycle(this.slideIDs);
                this.interval = setInterval(cycle, this.time_per_slide);
            }
            else {
                clearInterval(this.interval);
                this.breakDownSlides(sliderConfig.class);
                this.breakDownTransitionComponents(sliderConfig.transition_objects);
            }
        }

        this.initialize = function(sliderConfig) {     
            this.slides = sliderConfig.slides;
            this.slideIDs = this.setSlideIDs(this.slides);
            var threshold = this.setThreshold(sliderConfig.threshold);
            this.setTimePerSlide(sliderConfig.time_per_slide);
            this.setDefaultAnimationTime(sliderConfig.default_animation_time);
            this.setTimeBetweenSlides(sliderConfig.time_between_slides);
            this.isActive = (threshold > window.innerWidth);
            this.startSlideCycle(this.isActive);
        }
        this.initialize(sliderConfig);

        window.onresize = function() {
            if(this.isActive!==(sliderConfig.threshold>window.innerWidth)) {
                this.isActive = !this.isActive;
                this.startSlideCycle(this.isActive);
            }
        }.bind(this);
    }