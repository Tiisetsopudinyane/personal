document.addEventListener("alpine:init",()=>{
    Alpine.data('data',()=>{
        return {
            username:'Samuel T Pudinyane',
            fullName:'Samuel Tiisetso Pudinyane',
            aboutMe_p1:"I am Samuel Tiisetso Pudinyane from Free State province, with Bsc in software engineering. Studied at Bahcesehir university in Turkey through scholarship opportunity from free state government. i am currently looking for an internship to complete my training as a requirements from the university.",
            aboutMe_p2:"I firmly believe that if given the opportunity it would enable me to access to the new adventures. I'm keen to explore, develop and gain skills. Obtained certificates from microsoft on Data fundamentals, azure cloud fundamentals, azure AI fundamentals as well as FreeCodeCamp JavaScript. ",
            aboutMe_p3:"indivudually I am a very proactive person, person of multiple solutions to one problem,very analytical when it comes to assessing risks before applying the solution. I have a good communication skills and good reputation when working in collaboration and as a team member, I am an outspoken person with a good critical thinking skill and always aiming for good results.",
            sacArrayList:[],
            contacts(){
                return window.location.href = "personal-contacts.html";
            },
            personal_about(){
                return window.location.href = "personal-about.html";
            },
            personal_projects(){
                return window.location.href = "personal-projects.html";
            },
            personal_resume(){
                return window.location.href = "personal-resume.html";
            },
            sacArray(){
                this.sacArrayList.push("images/sac1.png");
                this.sacArrayList.push("images/sac2.png");
                this.sacArrayList.push("images/sac3.png");
                this.sacArrayList.push("images/sac4.png");
                this.sacArrayList.push("images/sac5.png");
            }
        }
    })
})