import './cell.css';

interface CellProps {
    number: number;
    players: { id: number; color: string; position: number }[];
  }
  
const Cell: React.FC<CellProps> = ({ number, players }) => {
    const playersInCell = players.filter((p) => p.position === number);
  
    return (
      <div className="cell">
        <div className="cell-number">{number}</div>
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