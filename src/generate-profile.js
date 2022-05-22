




    // // array for cards 
    // teamProfile = []; 

const Manager = require("../lib/Manager");


    // for (let i = 0; i < teamProfile.length; i++) {
        
    //     if (employee === data[i]

    const generateProfile = (data) => {
        console.log(data);
        return `
        < !DOCTYPE html >
        <html lang="en">
    
            <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link rel="stylesheet"
                                href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" />
                            <link rel="stylesheet" href="../dist/style.css" />
                            <title>Document</title>
                        </head>
                        <header>
                            <nav class="navbar navbar-light bg-dark">
                                <div class="container-fluid">
                                    <a class="navbar-brand w-100 text-center">
                                        <h1>TEAM PROFILES</h1>
                                    </a>
                                </div>
                            </nav>
                        </header>
                        <body>
                            <div class="container">
                                <div class="card-deck">
                                <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">${Manager.name}</h5>
                                  
                                    <p class="card-text">${data.name}</p>
                                    <a href="#" class="card-link">${data.email}</a>
                                    
                                </div>
                            </div>
                          
                        </div>
                        </body>
    
    
                    </html>
                    `
    };

    




// Manager card
function managerCard() {
    return `
        
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
            <p class="card-text">${data.id}</p>
            <a href="#" class="card-link">${data.email}</a>
            <a href="#" class="card-link">${data.office}</a>
        </div>
    </div>
    `;
}




// Engineer card
function engineerCard() {

    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
        <p class="card-text">${data.id}</p>
        <a href="#" class="card-link">${data.email}</a>
        <a href="#" class="card-link">${data.github}</a>
    </div>
</div>

`;
}


// Employee card 
function internCard() {

    `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${Manager.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${Manager.role}</h6>
            <p class="card-text">${Manager.id}</p>
            <a href="#" class="card-link">${Manager.email}</a>
            <a href="#" class="card-link">${Manager.roleSpecific}</a>
        </div>
    </div>
    `;
}

    

module.exports = generateProfile;






