import React , {useEffect,useState} from "react";
export interface User{
  id:string;
  name:string;
  email:string;
  title:string;
  organizzation:string
}
interface SearchPanelProps{
  users:User[],
  param:{
    name:string;
    personId:string;
  },
  setParam:(param:SearchPanelProps['param'])=>void;//void代表什么也不返回

}
const SearchPanel = ({ users, param, setParam }:SearchPanelProps) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(ev) =>
            setParam({
              ...param,
              name: ev.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={(ev) =>
            setParam({
              ...param,
              personId: ev.target.value,
            })
          }
        >
          <option value="">负责人</option>
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SearchPanel;
