/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
	"jobs": [
	{
		"employer": "Allstate",
		"title": "Allstate Representative",
		"location": "Vienna, Virginia",
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
}

var projects = {
	"projects": [
	{
		"title": "Sample Project 1",
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

}

var bio = {
	"name": "Richard Shipe",
	"role": "Front End Developer",
	"location": "Northern Virginia",
	"contacts": {
		"mobile": "(555) 555-5555",
		"email": "rheechashaipu@gmail.com",
		"github": "rheechashaipu"
	},
	"welcomeMessage": "Welcome to my Front-End Web Development resume",
	"skills": ["Python","GitHub","HTML","CSS","Javascript"],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools": [
	{
		"name": "South County Secondary",
		"city": "Lorton, VA",
		"degree": "Advanced Diploma",
		"datesAttended": "2004-2009",
		"url": "http://www.fcps.edu/southcountyhs/"
	},
	{
		"name": "George Mason University",
		"city": "Fairfax, VA",
		"degree": "B.S.",
		"major": "Economics",
		"datesAttended": "2009-2014",
		"url": "https://www2.gmu.edu/"
	}
	],
	"onlineCourses": [
	{
		"title": "Introduction to Interactive Programming Part 1",
		"school": "Coursera, with Rice University (not-for-credit)",
		"url": "https://www.coursera.org/account/accomplishments/verify/6NCXGFKN6M"
	},
	{
		"title": "Programming for Everybody",
		"school": "Coursera, with University of Michigan (not-for-credit)",
		"url": "https://www.coursera.org/maestro/api/certificate/get_certificate?course_id=972505"
	},
	{
		"title": "America's Written Constitution, America's Unwritten Constitution",
		"school": "Coursera, with Yale University (not-for-credit)",
		"url": ["https://www.coursera.org/account/accomplishments/verify/SKZYAUYQ9J",
		"https://www.coursera.org/account/accomplishments/verify/UF7QZCP2M4"]
	},
	{
		"name": "Udacity",
		"courses": "Front End Web Development Nanodegree",
		"dateOfGrad": "Oct. 2015-Present",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
	]
}

var displayWork = function(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",
			work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",
			work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLoc = HTMLworkLocation.replace("%data%",
			work.jobs[job].location);
		$(".work-entry:last").append(formattedLoc);
		var formattedDates = HTMLworkDates.replace("%data%",
			work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDesc = HTMLworkDescription.replace("%data%",
			work.jobs[job].description);
		$(".work-entry:last").append(formattedDesc);
	}
}

displayWork();

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(i=0;i<bio.skills.length;i++){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	}
}

var inName = function(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + 
	name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project]);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			$(".project-entry:last").append(formattedImage);
		}
	}
}
projects.display();