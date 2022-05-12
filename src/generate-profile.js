const generateProfile = (data) =>{
    return `
    
    
    <div class="container">
        <div class="card-deck">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${data.role}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
                    <p class="card-text">${data.id}</p>
                    <a href="#" class="card-link">${data.email}</a>
                    <a href="#" class="card-link">${data.github}</a>
                </div>
            </div>
        </div>
    </div> 
                 
    <div><p>${data.name}<p></div>
    `
};

    module.exports = generateProfile;






  