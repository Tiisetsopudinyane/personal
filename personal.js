document.addEventListener("alpine:init",()=>{
    Alpine.data('data',()=>{
        return {
            username:'Samuel T Pudinyane',
            fullName:'Samuel Tiisetso Pudinyane',
            contacts(){
                return window.location.href = "personal-contacts.html";
            },
            personal_about(){
                return window.location.href = "personal-about.html";
            },
            personal_projects(){
                return window.location.href = "personal-projects.html";
            }
        }
    })
})