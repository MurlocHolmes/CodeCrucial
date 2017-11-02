export const initial_projects = [
	{
		title: "Ordering Workflow Overlay", 
		blurb: "In software, it's always better to work smarter and not harder.",
		description: "In a company I worked at, an order would be placed into an old-school system and a pair of human eyes would look at the order. That order would then have some sort of defect and be sent back to the buyer to fix that defect. Then, it's back to the gatekeeper and this process repeats until all the values are valid; or a guided and self-validating application could be put in place of this process and get it done in one run through. This application would eliminate a lot of unnecessary correspondence and quicken the process from several weeks to a few days. I can't show code for proprietary reasons.",
		technologies: {
			"environment": ["Centos7 on four load-balanced cloud servers using Docker"],
			"backEnd": ["Python", "Django", "MariaDB"],
			"frontEnd": ["ReactJS", "Redux", "Bootstrap"],
			"tools": ["Docker", "Jenkins", "Jest", "PyUnit", "Selenium"]
		}
	},
	{
		title: "In-house CMS", 
		blurb: "If you can't find what you're looking for, build it.",
		description: "I wrote an in-house CMS for a mid-sized retailer. The purpose was for all employees of the company to be able to edit his or her aspects of the business individually without having to go through the relatively small tech department. For example, if marketing decided to change the verbiage of an advertisement, it was as simple as logging in and changing it. Note that it had to be custom because our director didn't trust the security of outside software packages. I can't show code for proprietary reasons.",
		technologies: {
			"environment": ["Windows IIS on three load-balanced cloud servers"],
			"backEnd": ["PHP", "CodeIgniter",  "Microsoft Sql Server"], 
			"frontEnd": ["HTML5", "CSS3",  "JavaScript", "jQuery"], 
			"tools": ["Docker", "PHPUnit", "Selenium"]
		}
	},
	{
		title: "Asset Outage Monitor", 
		blurb: "People hate dealing with outage tickets, especially when there's not actually a problem.",
		description: "When you have a few million assets to monitor, it's not always the best idea to try and do it manually. I was put in charge of creating a program that would monitor when a server was supposed to be in maintenance mode. The assigned technician would log into the web portal, note the assets and expected dates of maintenance and then login after maintenance to confirm completion. My monitor would then intercept any tickets coming into the ticketing system and silence them. In a three month deployment period, this monitor cut down on 30k man hours and over $500k of wasted time getting notified of tickets in a known maintenance. I can't show code for proprietary reasons.",
		technologies: {
			"environment": ["Centos7 on four load-balanced cloud servers"],
			"backEnd": ["Perl", "PHP", "Slim", "MySQL"],
			"frontEnd": ["ReactJS", "Redux", "Bootstrap"],
			"tools": ["Docker", "Jest", "PHPUnit", "Selenium", "test::more"]
		}
	},
	{
		title: "This Website!", 
		blurb: "I like my page, and I hope you do, too.",
		description: "Not much to say about this beauty. I like to think that it's awesomeness speaks for itself. It is a basic portfolio site to show some of the things I know, some of the things I can do, and some of the ways I do what I do.",
		technologies: {
			"environment": ["Ubuntu using Docker"],
			"backEnd": ["Python", "Django"],
			"frontEnd": ["ReactJS", "Redux", "Bootstrap"],
			"tools": ["Docker"]
		}}
];