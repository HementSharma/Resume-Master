/*
 This is empty on purpose! Your code to build the resume will go here.
 */
/* Bio object contains personal information like name , role , contact etc*/
"use strict";
var data = '%data%';
var bio = {
    name: "Hement Sharma",
    role: "Web Developer",
    contacts: {
        mobile: "+91 8600059150",
        email: "hementsharma@outlook.com",
        github: "https://github.com/HementSharma",
        location: "pune"
    },
    welcomeMessage: "Welcome message",
    biopic: "images/fry.jpg",
    skills: ["HTML", "JavaScript", "CSS3", "Bootstrap"]
};

//display function is used to display the bio object's data on Resume page
bio.display = function() {
    $("#header").append(HTMLwelcomeMsg.replace(data,bio.welcomeMessage));
    $("#header").append(HTMLbioPic.replace(data, bio.biopic));
    $("#header").prepend(HTMLheaderRole.replace(data, bio.role));
    $("#header").prepend(HTMLheaderName.replace(data, bio.name));

    $("#topContacts, #footerContacts").append(HTMLmobile.replace(data, bio.contacts.mobile) + HTMLemail.replace(data, bio.contacts.email) + HTMLgithub.replace(data, bio.contacts.github) + HTMLlocation.replace(data, bio.contacts.location));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace(data, bio.skills[i]));
        }
    }
};

/* education object contains education details*/
var education = {
    schools: [{
        name: "G.G.S.I.P.U",
        location: "New Delhi India",
        degree: "B.Tech. in Electronics and Communication",
        majors: ["Electronics and Communication"],
        dates: "2008 - 2012",
        url: "http://www.ipu.ac.in/"
    }, {
        name: "Rajkiya Pratibha vikas vidyalaya",
        location: "New Delhi India",
        degree: "Science degree",
        majors: ["Computer science"],
        dates: "2006 - 2008",
        url: "https://en.wikipedia.org/wiki/Rajkiya_Pratibha_Vikas_Vidyalaya"
    }],

    onlineCourses: [{
        title: "Front End Developer",
        school: "udacity",
        dates: "2016-2017",
        url: "https://www.udacity.com/"
    }]

};

//below function will be used to display education details

education.display = function() {

    education.schools.forEach(function(school) {
        var HTMLschoolMajorlocal = "";
        school.majors.forEach(function(majors) {
            HTMLschoolMajorlocal = HTMLschoolMajorlocal + HTMLschoolMajor.replace(data, school.majors);
        });
        $("#education").append(HTMLschoolStart);
        var HTMLschoolNamelocal = HTMLschoolName.replace(data, school.name).replace("#", school.url);
        var HTMLschoolDegreelocal = HTMLschoolDegree.replace(data, school.degree);
        var HTMLschoolDateslocal = HTMLschoolDates.replace(data, school.dates);
        var HTMLschoolLocationlocal = HTMLschoolLocation.replace(data, school.location);
        $(".education-entry:last-child").append(HTMLschoolNamelocal + HTMLschoolDegreelocal + HTMLschoolDateslocal + HTMLschoolLocationlocal + HTMLschoolMajorlocal);
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineschool) {
        $("#education").append(HTMLschoolStart);
        var HTMLonlineTitlelocal = HTMLonlineTitle.replace(data, onlineschool.title);
        var HTMLonlineSchoollocal = HTMLonlineSchool.replace(data, onlineschool.school);
        var HTMLonlineDateslocal = HTMLonlineDates.replace(data, onlineschool.dates);
        var HTMLonlineURLlocal = HTMLonlineURL.replace(data, onlineschool.url);
        $(".education-entry:last-child").append(HTMLonlineTitlelocal + HTMLonlineSchoollocal + HTMLonlineDateslocal + HTMLonlineURLlocal);
    });
};

/*Work object contains work information*/
var work = {
    jobs: [{
        employer: "Accenture",
        title: "SAP BASIS Administrator",
        location: "Pune",
        dates: "In Progress",
        description: "Working as a SAP BASIS consultant. My Role includes creation and maintinance of SAP servers and making sure that they work fine for business"
    }, {
        employer: "udacity",
        title: "Front End Developer",
        location: "Pune",
        dates: "In Progress",
        description: "Learning Front End Development to become a Web deveoper"
    }]
};

//display Work function will display the work details to the page
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var HTMLworkEmployerLocal = HTMLworkEmployer.replace(data, job.employer);
        var HTMLworkTitleLocal = HTMLworkTitle.replace(data, job.title);
        var HTMLworkDateslocal = HTMLworkDates.replace(data, job.dates);
        var HTMLworkLocationlocal = HTMLworkLocation.replace(data, job.location);
        var HTMLworkDescriptionlocal = HTMLworkDescription.replace(data, job.description);
        $(".work-entry:last").append(HTMLworkEmployerLocal + HTMLworkTitleLocal + HTMLworkDateslocal + HTMLworkLocationlocal + HTMLworkDescriptionlocal);


    });
};

/* projects object contain project details for the user*/
var projects = {
    projects: [{
        title: "Portfolio Site",
        dates: "Dec 2016",
        description: "This is a protfolio site project containing all skills and previous work.",
        images: ["images/project_image.jpg"]
    }]
};

//display porjects will be used to display Project details
projects.display = function() {
    projects.projects.forEach(function(project) {
        if (typeof projects == 'object') {
            var HTMLprojectImagelocal = "";
            project.images.forEach(function(image) {
                HTMLprojectImagelocal = HTMLprojectImagelocal + HTMLprojectImage.replace(data, image);
            });
            var HTMLprojectTitlelocal = HTMLprojectTitle.replace(data, project.title);
            var HTMLprojectDateslocal = HTMLprojectDates.replace(data, project.dates);
            var HTMLprojectDescriptionlocal = HTMLprojectDescription.replace(data, project.description);
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last-child").append(HTMLprojectTitlelocal + HTMLprojectDateslocal + HTMLprojectDescriptionlocal + HTMLprojectImagelocal);
        }
    });
};


bio.display();
work.display();
projects.display();
education.display();

//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);