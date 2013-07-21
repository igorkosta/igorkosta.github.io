var experiences = {
    "experiences": [
        {
          "title" : "Senior Software Architect @<a href='https://www.fidortecs.com/' target='_blank'>Fidor TecS AG</a> in Munich",
          "details" : [
            "Leading API and <a href='https://apm.fidor.de/' target='_blank'>App Store</a> projects",
            "Managing multiple distributed teams",
            "Speaking on <a href='https://developer.fidor.de/pirates-of-banking/developer-day-moscow/' target='_blank'>developer events</a>"
          ],
          "tools" : [
            "REST", "JSon", "JSon Schema", "Ripple", "SoapUI", "Jenkins", "mobile development"
          ],
          "from" : "09/2014"
        },
				{
				"title": "C*O @<a href='http://igor_kosta.bitbucket.org' target='_blank'>Igor Kosta on Bitbucket</a> wherever I am",
		    "details": [
										"Working on a CV templating for everyone",
		                "Making what I want",
		                "Having fun"
		            		],
		     "tools": [
									"Bootstrap", "jQuery", "{{mustache}}", "JSon", "Font-Awesome"
		           		 	],
		    "from": ""
		    },
        {
  			"title": "Product Manager/Owner @<a href='http://www.autoscout24.de' target='_blank'>AutoScout24 GmbH</a> in Munich",
        "details": [
										"Driving the API standardization and unification effort at AutoScout24",
                    "Defining the API strategy for business partners and end users",
                    "Leading the agile team",
                    "Creating new products based on user feedback, market needs in accordance with overall strategy"
                		],
         "tools": [
									"API", "JIRA", "Confluence", "Lean", "Canvas", "KPI", "Business Partner"
               		 	],
        "from": "07/2013"
        },
        {
        "title": "Product Manager/Owner @<a href='http://www.immonet.de' target='_blank'>immonet GmbH</a> in Hamburg",
        "details": [
                    "Sole responsibility for single-sign-on and double-opt-in integration on the main immonet platform",
                    "Responsible for complete overhaul of the closed customer area",
                    "Product design (screen design, workflow design, prototyping)",
                    "<a href='https://googledrive.com/host/0B4G_gZaFuY0AanIyWXc1Ny1RUjA/index.html' target='_blank'>High-fidelity prototyping with bootstrap (html, javascript, ajax)</a>"
                ],
        "tools": [
								 "Design thinking", "JIRA", "Confluence", "Prototyping", "Usability Tests", "Bootstrap", "jQuery"
               		 ],
        "from": "04/2013"
        },
        {
        "title": "Product Manager/Owner @<a href='http://www.starfinanz.de' target='_blank'>StarFinanz GmbH</a> in Hamburg",
        "details": [
                    "Product design (screen design, workflow design, prototyping)",
                    "Feature specification and prioritization (epics, user stories, tasks)",
                    "Backlog grooming",
                    "Customer support and communication",
                    "Responsibility for 2 products (cloud based online banking platform <a href='https://web.starmoney.de/' target='_blank'>StarMoney Web</a> and the desktop application for Mac OS X <a href='https://itunes.apple.com/de/app/starmoney/id563494181' target='_blank'>StarMoney Mac</a>",
										"Involved in specification and decision making about the  <a href='http://www.starmoney.de/index.php?id=meinstarmoney' target='_blank'>StarMoney ID</a> service"
                ],
        "tools": [
  								"Balsamiq", "SCRUM", "Jira", "Prototyping", "Trac", "Agilo for Scrum"
             		 ],
        "from": "02/2012",
        },
        {
        "title": "Software Engineer in Test @<a href='http://www.starfinanz.de' target='_blank'>StarFinanz GmbH</a> in Hamburg",
        "details": [
                    "Design and maintenance of an automated UI testing system",
                    "Design of test cases for automated and manual testing",
                    "Integration of automated testing system for a web based enterprise application into CI",
                    "Establishing of a SCRUM based development process",
                    "Playing the role of product owner"
                ],
        "tools": [
										"FitNesse", "Selenium", "dbfit", "TestNG", "Jenkins", "Bash", "Balsamiq", "Agilo for Scrum"
             		 ],
        "from": "01/2010"
        },
        {
        "title": "Software Engineer/in Test @<a href='https://www.samedi.de' target='_blank'>samedi GmbH</a> in Berlin",
        "details": [
                    "Software design and development",
                    "Quality assurance (functional, unit and UI-testing)",
                    "Design and maintenance of an automated UI testing system",
                    "Integration of the UI and javascript tests into Continuous Integration process"
                ],
        "tools": [
										"Ruby", "Rails", "Phusion Passenger", "Selenium", "Continuous Integration", "CruiseControl.rb", "C#", "NSIS"
             		 ],
        "from": "08/2009"
        }
]};

var contacts = {
	"contacts": [
			{
				"title": "Resumé",
				"link": "https://igorkosta.github.io/",
				"street": "Wolfsberger Str. 5",
				"zip": "81243",
				"city": "Munich",
				"country": "Germany",
				"phone_number": "+49 176 615 08 419",
				"email_address": "igor.kostyuchenok@gmail.com"
			},
],
			"url": function () {
				return "<a href="+ this.link +">"+this.link+"</a>";
		  },
			"phone": function () {
				return "<a href='tel:'"+this.phone_number+">"+this.phone_number+"</a>";
			},
			"email": function () {
				return "<a href='mailto:'"+this.email_address+">"+this.email_address+ "</a>";
			},
};

var networks = {
	"networks": [
			{
				"title": "linkedin",
				"link": "http://www.linkedin.com/in/igorkostyuchenok",
				"icon": "<i class='fa fa-square-o fa-stack-2x'></i><i class='fa fa-linkedin fa-stack-1x'></i>"
			},
			{
				"title": "xing",
				"link": "https://www.xing.com/profile/Igor_Kostyuchenok",
				"icon": "<i class='fa fa-square-o fa-stack-2x'></i><i class='fa fa-xing fa-stack-1x'></i>"
			},
			{
				"title": "twitter",
				"link": "http://twitter.com/igor_kosta",
				"icon": "<i class='fa fa-square-o fa-stack-2x'></i><i class='fa fa-twitter fa-stack-1x'></i>"
			},
			{
				"title": "youtube",
				"link": "https://youtube.com/igorkostyuchenok",
				"icon": "<i class='fa fa-square-o fa-stack-2x'></i><i class='fa fa-youtube fa-stack-1x'></i>"			  
			}
],
			"network_link": function () {
				var icon = "<span class='fa-stack fa-5x'><i class='fa fa-square-o fa-stack-2x'></i><i class='fa fa-"+this.title+" fa-stack-1x'></i></span>";
		    return "<a id="+ this.title +" href="+ this.link +" target='_blank'>"+icon+"</a>";
		  }

};
