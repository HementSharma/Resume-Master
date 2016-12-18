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
    schools: {
        graduation:{
            name: "G.G.S.I.P.U",
            location: "New Delhi India",
            degree: "B.Tech. in Electronics and Communication",
            major: "Electronics and Communication",
            date: "2008 to 2012"
        },
        highSchool:{
            name: "Rajkiya Pratibha vikas vidyalaya",
            location: "New Delhi India",
            degree: "Science degree",
            major: "Computer science",
            date: "2006 to 2008"
        }
    },

    onlineEducation:{
        udacity:{
            class: "Front End Developer",
            title: "Front End Developer",
            school: "udacity",
            url: "URL"
        }
    }
};

//below function will be used to display education details

education.displayEdu = function(){

    Object.keys(education.schools).forEach(function(school){
        $("#education").append(HTMLschoolStart);
        var HTMLschoolNamelocal = HTMLschoolName.replace("%data%", education.schools[school].name);
        var HTMLschoolDegreelocal = HTMLschoolDegree.replace("%data%" ,  education.schools[school].degree);
        var HTMLschoolDateslocal = HTMLschoolDates.replace("%data%",  education.schools[school].date);
        var HTMLschoolLocationlocal = HTMLschoolLocation.replace("%data%",  education.schools[school].location);
        var HTMLschoolMajorlocal = HTMLschoolMajor.replace("%data%" , education.schools[school].major);
        $(".education-entry:last-child").append(HTMLschoolNamelocal + HTMLschoolDegreelocal + HTMLschoolDateslocal + HTMLschoolLocationlocal+ HTMLschoolMajorlocal);
    });
}

/*Work object contains work information*/
var work ={
    first:{
        Employer:"Accenture",
        title: "SAP BASIS Administrator",
        location:"Pune",
        dates:"In Progress",
        description:"Working as a SAP BASIS consultant. My Role includes creation and maintinance of SAP servers and making sure that they work fine for business"
    },
    second:{
        Employer:"udacity",
        title: "Front End Developer",
        location:"Pune",
        dates:"In Progress",
        description:"Learning Front End Development to become a Web deveoper"
    }
};

//display Work function will display the work details to the page
work.displayWork = function(){
    Object.keys(work).forEach(function(i){
        if(typeof work[i] != 'function'){
            $("#workExperience").append(HTMLworkStart);
            var HTMLworkEmployerLocal = HTMLworkEmployer.replace("%data%",work[i].Employer);
            var HTMLworkTitleLocal = HTMLworkTitle.replace("%data%", work[i].title);
            var HTMLworkDateslocal = HTMLworkDates.replace("%data%", work[i].dates);
            var HTMLworkLocationlocal = HTMLworkLocation.replace("%data%", work[i].location);
            var HTMLworkDescriptionlocal = HTMLworkDescription.replace("%data%" , work[i].description);
            $(".work-entry:last").append(HTMLworkEmployerLocal + HTMLworkTitleLocal + HTMLworkDateslocal + HTMLworkLocationlocal +HTMLworkDescriptionlocal);

        }
    });
}

/* projects object contain project details for the user*/
var projects = {
    project:{ title:"Portfolio Site",
        date: "Dec 2016",
        description : "This is a protfolio site project containing all skills and previous work.",
        image:"images/project_image.jpg"
    }
};

//display porjects will be used to display Project details
projects.displayProjects  = function(){
    Object.keys(this).forEach(function(i){
        if(typeof projects[i] == 'object'){
            var HTMLprojectTitlelocal = HTMLprojectTitle.replace("%data%",projects[i].title);
            var HTMLprojectDateslocal = HTMLprojectDates.replace("%data%",projects[i].date);
            var HTMLprojectDescriptionlocal = HTMLprojectDescription.replace("%data%", projects[i].description);
            var HTMLprojectImagelocal = HTMLprojectImage.replace("%data%" , projects[i].image);
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


