let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")

function add(team, pts) {
    if(team == 'home') {
        let newScore = Number(homeScore.innerText)
        newScore += pts
        homeScore.innerText = newScore
    }
    else {
        let newScore = Number(guestScore.innerText)
        newScore += pts
        guestScore.innerText = newScore
    }
}
function resetScore() {
    homeScore.innerText = 0;
    guestScore.innerText = 0;
}