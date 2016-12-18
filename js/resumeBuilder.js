/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* Bio object contains personal information like name , role , contact etc*/
bio = {
    name: "Hement Sharma",
    role: "Web Developer",
    contact:{
        mobile: "+91 8600059150",
        email: "hementsharma@outlook.com",
        gitUrl: "https://github.com/HementSharma",
        location: "pune"
    },
    welcomeMessage: "",
    biopic: "images/fry.jpg",
    skills: ["HTML", "JavaScript", "CSS3", "Bootstrap", "Jquery"]
 }

//displayBio function is used to display the bio object's data on Resume page
bio.displayBio = function (){
    $("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile) + HTMLemail.replace("%data%", bio.contact.email) + HTMLgithub.replace("%data%", bio.contact.gitUrl));
    if(bio.skills.length >0     ){
        $("#header").append(HTMLskillsStart);
        for(i=0; i<bio.skills.length; i++){
            $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
            $("#footerContacts").append(HTMLskills.replace("%data%",bio.skills[i]));
        }
    }
}

/* education object contains education details*/
var education = {
    schools: [{
        name: "G.G.S.I.P.U",
        location: "New Delhi India",
        degree: "B.Tech. in Electronics and Communication",
        major: "Electronics and Communication",
        date: "2008 to 2012"
    },
        {
            name: "Rajkiya Pratibha vikas vidyalaya",
            location: "New Delhi India",
            degree: "Science degree",
            major: "Computer science",
            date: "2006 to 2008"
        }],

    onlineEducation:[{
    class: "Front End Developer",
    title: "Front End Developer",
    school: "udacity",
    url: "URL"
}]

};

//below function will be used to display education details

education.displayEdu = function(){

    education.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);
        var HTMLschoolNamelocal = HTMLschoolName.replace("%data%", school.name);
        var HTMLschoolDegreelocal = HTMLschoolDegree.replace("%data%" ,  school.degree);
        var HTMLschoolDateslocal = HTMLschoolDates.replace("%data%",  school.date);
        var HTMLschoolLocationlocal = HTMLschoolLocation.replace("%data%",  school.location);
        var HTMLschoolMajorlocal = HTMLschoolMajor.replace("%data%" , school.major);
        $(".education-entry:last-child").append(HTMLschoolNamelocal + HTMLschoolDegreelocal + HTMLschoolDateslocal + HTMLschoolLocationlocal+ HTMLschoolMajorlocal);
    });
}

/*Work object contains work information*/
var work ={
    jobs:[{
        Employer:"Accenture",
        title: "SAP BASIS Administrator",
        location:"Pune",
        dates:"In Progress",
        description:"Working as a SAP BASIS consultant. My Role includes creation and maintinance of SAP servers and making sure that they work fine for business"
    },
    {
        Employer:"udacity",
        title: "Front End Developer",
        location:"Pune",
        dates:"In Progress",
        description:"Learning Front End Development to become a Web deveoper"
    }]
};

//display Work function will display the work details to the page
work.displayWork = function(){
    work.jobs.forEach(function(job){
            $("#workExperience").append(HTMLworkStart);
            var HTMLworkEmployerLocal = HTMLworkEmployer.replace("%data%",job.Employer);
            var HTMLworkTitleLocal = HTMLworkTitle.replace("%data%", job.title);
            var HTMLworkDateslocal = HTMLworkDates.replace("%data%", job.dates);
            var HTMLworkLocationlocal = HTMLworkLocation.replace("%data%", job.location);
            var HTMLworkDescriptionlocal = HTMLworkDescription.replace("%data%" , job.description);
            $(".work-entry:last").append(HTMLworkEmployerLocal + HTMLworkTitleLocal + HTMLworkDateslocal + HTMLworkLocationlocal +HTMLworkDescriptionlocal);


    });
}

/* projects object contain project details for the user*/
var projects = {
    projects:[{ title:"Portfolio Site",
        date: "Dec 2016",
        description : "This is a protfolio site project containing all skills and previous work.",
        image:"images/project_image.jpg"
    }]
};

//display porjects will be used to display Project details
projects.displayProjects  = function(){
    projects.projects.forEach(function(project){
        if(typeof projects[i] == 'object'){
            var HTMLprojectTitlelocal = HTMLprojectTitle.replace("%data%",project.title);
            var HTMLprojectDateslocal = HTMLprojectDates.replace("%data%",project.date);
            var HTMLprojectDescriptionlocal = HTMLprojectDescription.replace("%data%", project.description);
            var HTMLprojectImagelocal = HTMLprojectImage.replace("%data%" , project.image);
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last-child").append(HTMLprojectTitlelocal + HTMLprojectDateslocal + HTMLprojectDescriptionlocal + HTMLprojectImagelocal);
        }
    });
}


bio.displayBio();
work.displayWork();
projects.displayProjects();
education.displayEdu();

//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


