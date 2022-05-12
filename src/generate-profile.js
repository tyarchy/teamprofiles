const generateProfile = (data) => {
    data.forEach(element => {
        return `<h1>${data.name}<h2>`
    })

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
                    <h5 class="card-title">NAME</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                    <p class="card-text">ID:</p>
                    <a href="#" class="card-link">Email:</a>
                    <a href="#" class="card-link">Github</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                    <p class="card-text">ID:</p>
                    <a href="#" class="card-link">Email:</a>
                    <a href="#" class="card-link">Github</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">NAME</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                    <p class="card-text">ID:</p>
                    <a href="#" class="card-link">Email:</a>
                    <a href="#" class="card-link">Github</a>
                </div>
            </div>
            
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">NAME</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                    <p class="card-text">ID:</p>
                    <a href="#" class="card-link">Email:</a>
                    <a href="#" class="card-link">Github</a>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">NAME</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                    <p class="card-text">ID:</p>
                    <a href="#" class="card-link">Email:</a>
                    <a href="#" class="card-link">Github</a>
                </div>
            </div>
        </div>
    </div>
</body>


                </html>
                `
};

module.exports = generateProfile;






