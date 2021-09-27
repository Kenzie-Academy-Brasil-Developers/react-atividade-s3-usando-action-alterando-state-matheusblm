import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import { useState } from "react";

const UserCard = () => {
  const [userInput, setUserInput] = useState();
  const userName = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleClick = (newName) => {
    dispatch(changeName(newName));
  };

  return (
    <div>
      <h1>UserName : {userName.name}</h1>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit" onClick={() => handleClick(userInput)}>
        Change
      </button>
    </div>
  );
};

export default UserCard;
