import { SlimUser } from "@/types/user"
import Usercard from "./userCard";


  
type Props = {
    users: SlimUser[];
};
  
  export default function UsersList({ users }: Props) {

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {users?.map((user:SlimUser) => (
        <div 
          key={user.id} 
          className="group transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1"
        >
          <Usercard user={user}/>
        </div>
      ))}
    </div>
    )
}