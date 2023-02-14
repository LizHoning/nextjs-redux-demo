interface ChancesDisplayProps {
	guessesCount: number;
}

const ChancesDisplay = (props: ChancesDisplayProps) => {
	return (
		<div>
			<h3>Guesses:</h3>
			{props.guessesCount}/7
		</div>
	);
};

export default ChancesDisplay;
