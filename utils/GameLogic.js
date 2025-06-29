export function isFinishable(score) {
    return score === 50 || (score <= 40 && score % 2 === 0)
}

export function calculateAfterScore(before, points) {
    const after = before - points
    return after
}

export function isBust(after) {
    return after < 0 || after === 1
}

export function isValidFinish(n, m) {
    return m === 2 || (n === 25 && m === 2)
}

export function advanceToNextDart(darts, cur, numPlayers, round) {
    darts++
    if (darts >= 3) {
        darts = 0
        cur = (cur + 1) % numPlayers
        if (cur === 0) round++
    }
    return { darts, cur, round }
}
