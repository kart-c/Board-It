import { createContext, useContext, useState, useEffect } from "react";
import { getBoardsService } from "../services";

const BoardsContext = createContext(null);

const BoardsProvider = ({ children }) => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getBoardsService(setBoards);
  }, []);

  return (
    <BoardsContext.Provider value={{ boards, setBoards }}>
      {children}
    </BoardsContext.Provider>
  );
};

const useBoards = () => useContext(BoardsContext);

export { BoardsProvider, useBoards };
