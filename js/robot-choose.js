export function robotChoose() {
    const hands = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * hands.length)
    return hands[randomIndex]
}