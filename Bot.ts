const bot: BotFactory = () => {
	let theirLastMove = ''
	let lastResult = 0
	let myLastMove = ''
	let turn = 0
	let losses = 0
	let wins = 0

	// Called after each round with the results
	// result is 1 for win, -1 for loss, 0 for tie
	const Report = (myMove: string, theirMove: string, result: int) => {
		lastResult = result
		theirLastMove = theirMove
		myLastMove = myMove
		turn = turn + 1
		if (result === -1)
		{
			losses = losses + 1	
		}
		if (result === 1)
		{
			wins = wins + 1	
		}
	}

	const Shoot = () => {
		// Decide what to do
		if (turn%2===0 && (losses > 6 && wins < 5))
		{
			return 'scissors'
		}

		else if (turn%3===0)
		{
			return 'rock'
		}

		else
		{
			return 'paper'
		}
		
	}

	return {
		Name: 'Frug Smasher',
		Shoot,
		Report,
	}
}

export default bot
