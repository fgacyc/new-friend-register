import {GoDeviceMobile} from "react-icons/go";
import {useEffect, useState} from "react";
import {CgWebsite} from "react-icons/cg";
import {RiEmotionHappyLine} from "react-icons/ri";
import {set} from "idb-keyval";
import {useNavigate} from "react-router-dom";

export default function UserCard({data}){
    const [cardType, setCardType] = useState("");
    if (data.hasOwnProperty("first_name") && data.hasOwnProperty("last_name")) {
        data.name = `${data.first_name} ${data.last_name}`;
    }
    const navigate = useNavigate();

    useEffect(() => {
        if (data.hasOwnProperty("type")){
            setCardType(data.type); // mobile; fgacyc_web
        }else{
            setCardType("welcome");
            data.type = "welcome";
        }
    }, []);

    function clickHandler(){
        set("current_user", data);
        navigate("/user-detail");
    }


    return (
        <div className={"border my-2  p-4 rounded bg-white"}
                onClick={clickHandler}
        >
            <div className={"flex justify-between"}>
                <h1 className={"font-bold text-xl mb-2"}>{data.name}</h1>
                {
                    cardType === "mobile" &&  <GoDeviceMobile />
                }
                {
                    cardType === "fgacyc_web" &&  <CgWebsite />

                }
                {
                    cardType === "welcome" &&   <RiEmotionHappyLine />
                }
            </div>

            <div className={"flex"}>
            <div className={"mr-2"}>{data.phone}</div>
                <div>{data.email}</div>
            </div>
        </div>
    )
}