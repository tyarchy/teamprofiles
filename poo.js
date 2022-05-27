



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
