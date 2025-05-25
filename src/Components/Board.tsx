import Starfield from "react-starfield";
import Cell from "./Cell";
import './board.css';
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getLaddersMap, getPlayersInit, getSnakesMap, Player, applySnakeOrLadder } from "../utils";
import toast from "react-hot-toast";
import Dice from "./Dice";

const Board: React.FC = () => {
  const [searchParams] = useSearchParams();
  const playerCount = searchParams.get('player');

  const navigate = useNavigate();
  console.log(playerCount)
  const playersCount = parseInt(playerCount || ''); 
    useEffect(() => {
      if(isNaN(playersCount) || playersCount < 1 || playersCount > 4) {
        console.error('Players count not supported', playersCount);
        toast.error('Invalid player count! Redirected to Home 🏠');
        void navigate('/');
      }
    }, [playersCount, navigate]);
  
  const initPlayers = getPlayersInit(playersCount);
  const snakesMap = getSnakesMap();
  const laddersMap = getLaddersMap();
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [players, setPlayers] = useState<Player[]>(initPlayers);
  
  const generateBoard = () => {
    const cells = [];
    for (let row = 9; row >= 0; row--) {
      const rowCells = [];
      for (let col = 0; col < 10; col++) {
        const number = row * 10 + (row % 2 === 0 ? col + 1 : 10 - col);
        const isSnakePt = number in snakesMap;
        const isLadderPt = number in laddersMap;
        rowCells.push(  
          <Cell key={number} number={number} players={players} isSnakePt={isSnakePt} isLadderPt={isLadderPt} snakeTo={snakesMap[number]} ladderTo={laddersMap[number]}/>
        );
      }
      cells.push(
        <div key={row} className="row">
          {rowCells}
        </div>
      );
    }
    return cells;
  };

  const movePlayer = (steps: number) => {
    setPlayers((prev) => {
      const updated = [...prev];
      const player = updated[currentPlayerIndex];
  
      let nextPos = player.position + steps;
      console.log(nextPos, player.position, steps);

      if (nextPos > 100) { 
        nextPos = player.position; // Don't go beyond 100
      }
  
      // Snake or Ladder check
      nextPos = applySnakeOrLadder(snakesMap, laddersMap, nextPos);
  
      player.position = nextPos;
      return updated;
    });
  
    // Move to next player
    setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
  };
  

  const rollDice = (roll:number) => {
    if(roll) {
      movePlayer(roll);
    }
    };
  
    return (
      <div className='board-container'>
        <Starfield
          starCount={5000}
          starColor={[255, 255, 255]}
          speedFactor={0.08}
          backgroundColor='black'
        />
        <div className="player-info-container">
          <div className="player-legend">
            <h6>
            Legend
            </h6>
              {players.map((player)=> {
                 return (<p key={player.id} className="player-item">
                  <span>{player.token} Player {player.id}</span>
                 </p>)
              })}
          </div>
          <div className='player-info'>
            <p style={{color:`${players[currentPlayerIndex].color}`}}>
              Player {currentPlayerIndex+1}'s turn
            </p>
          </div>
        </div>
        <div className='board'>
          {generateBoard()}
        </div>
        <div className='dice'>
          <Dice onRoll={rollDice}/>
        </div>
        <button className="home-btn" onClick={()=> {
           void navigate('/');
        }}>Reset</button>
        
      </div>
    );
  };
  
  export default Board;