export function findWinner (user, robot) {
    if (user === robot) {
        return "tied"
    } else {
    if (user === "paper" && robot === "rock") {
        return "user"
    }   else if (user === "scissors" && robot === "paper") {
        return "user"
    } else if (user === "rock" && robot === "scissors") {
        return "user"
    } else {
        return "robot"
    }
    }
}