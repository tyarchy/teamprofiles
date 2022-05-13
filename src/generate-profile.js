function employeeCards(data){

}


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
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
            <p class="card-text">${data.id}</p>
            <a href="#" class="card-link">${data.email}</a>
            <a href="#" class="card-link">${data.school}</a>
        </div>
    </div>
    `;
}


const generateProfile = (data) => {
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
                                ${employeeCards(data)}
                            </div>
                    </body>


                </html>
                `
};

module.exports = generateProfile;






