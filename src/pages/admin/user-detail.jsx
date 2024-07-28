import NavBar from "@/components/nav-bar.jsx";
import {useEffect, useState} from "react";
import {get} from "idb-keyval";
import Block from "@/components/block.jsx";
import {TextArea} from "antd-mobile";
import {formDate} from "@/components/tools.js";

function WelcomeTypeCard({data}) {
    if (!data) return null;
    const style = "flex justify-between";

    return (
        <div>
            <div className={style}>
                <div>Country:</div>
                <div>{data.country}</div>
            </div>
            <div className={style}>
                <div>City:</div>
                <div>{data.city}</div>
            </div>
            <div className={style}>
                <div>First name:</div>
                <div>{data.first_name}</div>
            </div>
            <div className={style}>
                <div>Last name:</div>
                <div>{data.last_name}</div>
            </div>
            <div className={style}>
                <div>Chinese name:</div>
                <div>{data.chinese_name}</div>
            </div>
            <div className={style}>
                <div>Email:</div>
                <div>{data.email}</div>
            </div>
            <div className={style}>
                <div>Phone:</div>
                <div>{data.phone}</div>
            </div>
            <div className={style}>
                <div>Gender:</div>
                <div>{data.gender}</div>
            </div>
            <div className={style}>
                <div>Birth date:</div>
                <div>{data.birth_date}</div>

            </div>
            <div className={style}>
                <div>Industry:</div>
                <div>{data.industry}</div>

            </div>
            <div className={style}>
                <div>Is baptized:</div>
                <div>{data.is_baptized ? "Yes" : "No"}</div>
            </div>
            <div className={style}>
                <div>Is Christian:</div>
                <div>{data.is_christian ? "Yes" : "No"}</div>
            </div>
            <div className={style}>
                <div>Has regular church:</div>
                <div>{data.has_regular_church ? "Yes" : "No"}</div>
            </div>
            <div className={style}>
                <div>How to know us:</div>
                <div>{data.way_know_us}</div>
            </div>
        </div>
    )
}

function FindCGTypeCard({data}){
    if (!data) return null;
    const style = "flex justify-between";
    // age, category email if_kids_friendly, location, name, phone

    return(
        <div>
            <div className={style}>
                <div>Age:</div>
                <div>{data.age}</div>
            </div>
            <div className={style}>
                <div>Category:</div>
                <div>{data.category}</div>
            </div>
            <div className={style}>
                <div>Email:</div>
                <div>{data.email}</div>
            </div>
            <div className={style}>
                <div>If kids friendly:</div>
                <div>{data.if_kids_friendly  ? "Yes" : "No"}</div>
            </div>
            <div className={style}>
                <div>Location:</div>
                <div>{data.location}</div>
            </div>
            <div className={style}>
                <div>Name:</div>
                <div>{data.name}</div>
            </div>
            <div className={style}>
                <div>Phone:</div>
                <div>{data.phone}</div>
            </div>
        </div>
    )
}

export default function UserDetail() {
    const [currentUser, setCurrentUser] = useState(null);
    const [note, setNote] = useState("");

    useEffect(() => {
        get("current_user").then((data) => {
            setCurrentUser(data);
        })

    }, []);


    return (
        <div>
            <NavBar ifShowBackArrow={true}>Guest Detail: {currentUser && currentUser.name}</NavBar>
            <Block title={"Basic Info"}>
                {
                    currentUser && currentUser.type === "welcome"
                        ? <WelcomeTypeCard data={currentUser}/>
                        : <FindCGTypeCard data={currentUser}/>
                }

            </Block>
            <Block title={"Assignment"}>
               Assign to Admin
            </Block>

            <Block title={"Note"}>
                <TextArea
                    placeholder='Type note here...'
                    value={note}
                    onChange={setNote}
                />
            </Block>


            <Block title={"Card History"}>
                <ul className={"list-disc list-inside"}>
                    <li>Created At: {currentUser && formDate(currentUser.created_at)}</li>
                </ul>
            </Block>
        </div>
    )
}