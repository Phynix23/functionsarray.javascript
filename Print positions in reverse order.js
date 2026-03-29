function printTeamReverse() {
    const team = ["Goalkeeper", "Defender", "Midfielder", "Attacker"];
    for (let i = team.length - 1; i >= 0; i--) {
        console.log(team[i]);
    }
}
printTeamReverse();