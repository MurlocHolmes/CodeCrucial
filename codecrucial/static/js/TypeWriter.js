
    var TypeWriter = function(text, div, delay) {

        this.blinkCursor = function() {
            this.targetDiv.innerHTML = "<p>" + this.cursorClass + "</p>";
            var func = (function() { $("#" + this.cursorID).toggleClass("hidden-cursor");}).bind(this);
            setInterval(func ,500);
            console.log(this.cursorID);
        };

        this.incrementIntroString = function() {
            this.currentText += this.finalText[this.stringIndex];
            this.stringIndex++;
            this.targetDiv.innerHTML = "<p>" + this.currentText + this.cursorClass + "</p>";
        };

        this.startTyping = function() {
            var timeout = this.delay;
            for(var i = 0; i < this.finalText.length; i++) {
                timeout += 50;
                if(this.finalText[i-1] === '.') {
                    timeout += 250;
                }
                var func = (function() { this.incrementIntroString()}).bind(this);
                setTimeout(func, timeout);
            }
        }

        this.initialize = function () {        
            this.finalText = text;
            this.targetDiv = div;
            this.cursorID = "cursor" + Math.floor((Math.random() * 10000) + 1);
            this.cursorClass = '<span id="' + this.cursorID + '" class="cursor">_</span>';
            this.currentText = "";
            this.stringIndex = 0;
            this.delay = delay;
            this.blinkCursor();
            this.startTyping();
        };

        this.initialize();

    };
    function isScrolledIntoView(div)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var divTop = $(div).offset().top;
        var divBottom = divTop + $(div).height();

        return ((divBottom <= docViewBottom) && (divTop >= docViewTop));
    }

    var introText = "Hi, my name's Taylor. I don't know many icebreakers, so here's some quotes from a few really smart people.";
    var introDiv = document.getElementById("intro");
    var introDelay = 2000;
    //var introTypeWriter = new TypeWriter(introText, introDiv, introDelay);

    var skillsText = "I'm actually pretty good at a lot of things other than breaking the ice.";
    var skillsDiv = document.getElementById("skills-intro");
    var skillsDelay = 0;
    var skillsInitialized = false;
    $(window).scroll(function() {
        if(isScrolledIntoView(skillsDiv) && !skillsInitialized) {
            //var skillsTypeWriter = new TypeWriter(skillsText, skillsDiv, skillsDelay);
            skillsInitialized = true;
        }
    });

    var projectsText = "These are some things I've done.";
    var projectsDiv = document.getElementById("projects-intro");
    var projectsDelay = 0;
    var projectsInitialized = false;
    $(window).scroll(function() {
        if(isScrolledIntoView(projectsDiv) && !projectsInitialized) {
            //var projectsTypeWriter = new TypeWriter(projectsText, projectsDiv, projectsDelay);
            projectsInitialized = true;
        }
    });

    var contactText = "Call me, beep me if you wanna reach me.";
    var contactDiv = document.getElementById("contact-intro");
    var contactDelay = 0;
    var contactInitialized = false;
    $(window).scroll(function() {
        if(isScrolledIntoView(contactDiv) && !contactInitialized) {
            //var contactTypeWriter = new TypeWriter(contactText, contactDiv, contactDelay);
            contactInitialized = true;
        }
    });