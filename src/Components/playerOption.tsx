import { useNavigate } from 'react-router-dom';
import './playerOption.css'; // Import the CSS styles


interface PlayerOptionProps {
    title: string;
  }

  
const PlayerOption: React.FC<PlayerOptionProps> = ({ title }) => {
  const navigate = useNavigate();
  const handleClick = ()=> {
    void navigate(`/board?player=${title}`)
  }
  return (
    <button className="player-option-button" onClick={handleClick}>
      {title}
    </button>
  );
};

export default PlayerOption;
