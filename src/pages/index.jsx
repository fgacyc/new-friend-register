import reactLogo from '@/assets/react.svg'
import fgaTechLogo from '/fga_tech.png'
import { useState} from "react";
import {useNavigate} from "react-router-dom";
import ProfileToken from "@/components/profile-token.jsx";
import {useUserStore} from "@/store/user-store.js";
import {useTranslation} from "react-i18next";
import NavBar from "@/components/nav-bar.jsx";
import Block from "@/components/block.jsx";
import {CountryDropdown} from "react-country-region-selector";
import {useFormStore} from "@/store/form-store.js";
import { Input,Checkbox  } from '@arco-design/web-react';
import Form from "@/pages/form.jsx";
const CheckboxGroup = Checkbox.Group;




export default function Index() {
    const [count, setCount] = useState(0)
    const navigate = useNavigate();
    const [UID,language] = useUserStore(state => [state.UID,state.language]);


    return (
        <div className={"h-screen"}>
            <NavBar>Welcome Home!</NavBar>
            <div className={"h-[calc(100vh-50px)] overflow-y-auto"}>
                <Form/>
            </div>

        </div>
    )
}