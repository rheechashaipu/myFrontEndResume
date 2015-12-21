var work = {
	"jobs": [
	{
		"employer": "Allstate",
		"title": "Allstate Representative",
		"location": " 8212 Old Courthouse Rd, Ste C, Vienna, VA 22182",
		"dates": "Oct. 7, 2015 - present",
		"description": "Answer and make phone calls, process documents, process payments, prepare documents"
	},
	{
		"employer": "ITRenew",
		"title": "Data Entry Specialist Temp",
		"location": "Sterling, Virginia",
		"dates": "Jul. 21 - Aug. 28, 2015",
		"description": "Disassemble servers and other computer hardware, document computer parts"
	}
	]
};

work.display = function(){
	for(var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",
			work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",
			work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		var formattedLoc = HTMLworkLocation.replace("%data%",
			work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%",
			work.jobs[job].dates);
		var formattedDesc = HTMLworkDescription.replace("%data%",
			work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLoc);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDesc);
	}
};

var projects = {
	"projects": [
	{
		"title": "Sample Project 1",
		//"location": "Washington D.C.",
		"dates": "November 2015",
		"description": "The quick brown fox jumps over the lazy dog.",
		"images": "images/197x148.gif"
	},
	{
		"title": "Food Drive for ECHO Food Bank",
		"dates": "2013",
		"description": "Planned and executed a food drive for the hungry, donated over a 1000 lb of food",
		"images": "images/197x148.gif"
	}
	]
};

projects.display = function() {
	for (var project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			$(".project-entry:last").append(formattedImage);
		}
	}
};

var bio = {
	"name": "Richard Shipe",
	"role": "Front End Developer",
	"contacts": {
		"mobile": "(555) 555-5555",
		"email": "rheechashaipu@gmail.com",
		"github": "https://github.com/rheechashaipu",
		"location": "Fairfax, Virginia",
		"twitter": "@RichardShipe"
	},
	"welcomeMessage": "Currently seeking starting front end developer positions.",
	"skills": ["Python","GitHub","HTML","CSS","Javascript"],
	"biopic": ["images/fry.jpg"]
};

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedMessage);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);

	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for(i=0;i<bio.skills.length;i++){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
			}
		}
};

var education = {
	"schools": [
	{
		"name": "South County Secondary",
		"location": "Lorton, Virginia",
		"degree": "Advanced Diploma",
		"majors": ["General Education"],
		"dates": 2009,
		"url": "http://www.fcps.edu/southcountyhs/"
	},
	{
		"name": "George Mason University",
		"location": "Fairfax, Virginia",
		"degree": "Bachelor's of Science",
		"majors": ["Economics"],
		"dates": 2014,
		"url": "https://www2.gmu.edu/"
	}
	],
	"onlineCourses": [
	{
		"title": "Introduction to Interactive Programming Part 1",
		"school": "Coursera, with Rice University (not-for-credit)",
		"url": "https://www.coursera.org/account/accomplishments/verify/6NCXGFKN6M",
		"dates": 2014
	},
	{
		"title": "Programming for Everybody",
		"school": "Coursera, with University of Michigan (not-for-credit)",
		"url": "https://www.coursera.org/maestro/api/certificate/get_certificate?course_id=972505",
		"dates": 2014
	},
	{
		"title": "America's Written Constitution, America's Unwritten Constitution",
		"school": "Coursera, with Yale University (not-for-credit)",
		"url": ["https://www.coursera.org/account/accomplishments/verify/SKZYAUYQ9J",
		"https://www.coursera.org/account/accomplishments/verify/UF7QZCP2M4"],
		"dates": 2014
	},
	{
		"school": "Udacity",
		"title": "Front End Web Development Nanodegree",
		"dates": "Oct. 2015-Present",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
	]
};

education.display = function(){
	for (var edu in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
		$(".education-entry:last").append(formattedName);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
		$(".education-entry:last").append(formattedMajor, formattedDegree);
	}

	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
	for (var mooc in education.onlineCourses){
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[mooc].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[mooc].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates0 = HTMLonlineDates.replace("%data%", education.onlineCourses[mooc].dates);
		$(".education-entry:last").append(formattedDates0);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[mooc].url);
		$(".education-entry:last").append(formattedURL);
	}
};



/*var inName = function(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + 
	name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}*/

//$('#main').append(internationalizeButton);

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);