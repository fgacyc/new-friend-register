import {useFindCG} from "@/api/cg.js";
import {useEffect, useState} from "react";
import UserCard from "@/pages/admin/user-card.jsx";

export default function AdminFindCG(){
    const {findCG, isLoading, isError} = useFindCG();
    const [join_cell_group, setJoinCellGroup] = useState(null);
    const [welcome_users, setWelcomeUsers] = useState(null);
    console.log('findCG', findCG)


    useEffect(() => {
        if (isLoading||isError) return;
        if (findCG.status===true) {
            setJoinCellGroup(findCG.data.join_cell_group);
            setWelcomeUsers(findCG.data.welcome_users);
        }


    }, [isLoading]);

    return (
        <div className={"h-screen overflow-y-auto"}>
            {
                !isLoading && !isError &&welcome_users  &&  welcome_users.map((user,index) => {
                    return <UserCard key={index} data={user} />
                } )
            }
            {
                !isLoading && !isError &&join_cell_group  &&  join_cell_group.map((user,index) => {
                    return <UserCard key={index} data={user} />
                } )
            }
            {
                !isLoading && !isError &&join_cell_group  &&  join_cell_group.map((user,index) => {
                    return <UserCard key={index} data={user} />
                } )
            }
            {
                !isLoading && !isError &&join_cell_group  &&  join_cell_group.map((user,index) => {
                    return <UserCard key={index} data={user} />
                } )
            }
        </div>
    )
}