import './cell.css';

interface CellProps {
    number: number;
    players: { id: number; color: string; position: number }[];
    isSnakePt: boolean;
    isLadderPt: boolean;
    snakeTo: number;
    ladderTo: number;
  }
  
const Cell: React.FC<CellProps> = ({ number, players, isSnakePt, isLadderPt, snakeTo, ladderTo }) => {
    const playersInCell = players.filter((p) => p.position === number);
  
    const tooltipText = isSnakePt
      ? `🐍 Leads down to ${snakeTo}`
      : isLadderPt
      ? `🪜 Climbs up to ${ladderTo}`
      : '';
    return (
      <div className={`cell ${isSnakePt ? 'snake-cell' : ''} ${isLadderPt ? 'ladder-cell' : ''}`}>
        <div className="cell-number">{number}</div>
        {(isSnakePt || isLadderPt) && (
      <>
      <div className="emoji-marker">
        {isSnakePt ? '🐍' : '🪜'}
      </div>
      <div className="tooltip">{tooltipText}</div>
      </>
    )}
        <div className="cell-players">
          {playersInCell.map((player) => (
            <div
              key={player.id}
              className="player-token"
              style={{ backgroundColor: player.color }}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Cell;