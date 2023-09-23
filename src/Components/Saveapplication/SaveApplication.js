
const getApplication = ()=>{
const localApplication = localStorage.getItem("Job_Application");
if(localApplication){
    return JSON.parse(localApplication);
}
return [];
}

// exultant-gold.surge.sh     
const saveApplication = (application)=>{
    localStorage.setItem("Job_Application",application);

}


export {getApplication,saveApplication}