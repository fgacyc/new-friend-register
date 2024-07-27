import Block from "@/components/block.jsx";
import {CountryDropdown} from "react-country-region-selector";
import {Input, Checkbox, Radio, DatePicker,Select} from "@arco-design/web-react";
import {useTranslation} from "react-i18next";
import {useFormStore} from "@/store/form-store.js";

import {createForm, useUser} from "@/api/welcome.js";
import {useEffect, useState} from "react";
import {useUserStore} from "@/store/user-store.js";
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const Option = Select.Option;
import i18n from "i18next";



function QuestionSection({title, children,className}){
    const {t} =  useTranslation();

    return (
        <div className={className}>
            <h2 className={"text-sm  mb-1 text-[#454959]"}>{t(title)}</h2>
            {children}
        </div>
    )

}


export  default function Form(){
    const {t,i18n} =  useTranslation();
    const lang = i18n.language;
    const [isAllowSubmit,setIsAllowSubmit] = useState(true);
    const [country, setCountry] = useFormStore(state => [state.country, state.setCountry])
    const [
        city, setCity,state,setState,firstName,setFirstName,lastName,setLastName,ChineseName,setChineseName,phone,setPhone,
        email, setEmail,gender,setGender,birthDate,setBirthDate,industry,setIndustry,isChristian,setIsChristian,
        isBaptized, setIsBaptized,hasRegularChurch,setHasRegularChurch,wayKnowUs,setWayKnowUs
    ] = useFormStore(state => [
        state.city,state.setCity,
        state.state,state.setState,
        state.firstName,state.setFirstName,
        state.lastName,state.setLastName,
        state.ChineseName,state.setChineseName,
        state.phone,state.setPhone,
        state.email,state.setEmail,
        state.gender,state.setGender,
        state.birthDate,state.setBirthDate,
        state.industry,state.setIndustry,
        state.isChristian,state.setIsChristian,
        state.isBaptized,state.setIsBaptized,
        state.hasRegularChurch,state.setHasRegularChurch,
        state.wayKnowUs,state.setWayKnowUs
    ])
    const  getForm = useFormStore(state => state.getForm);
    const UID = useUserStore(state => state.UID);
    const {user ,isLoading,isError} = useUser(UID);
     const states = [
        i18n.t("I am new here"),
        i18n.t("I decided to follow Jesus"),
        i18n.t("I need someone to Pray with me"),
    ]


     const industryOptions = [
        i18n.t('Agriculture'),
        i18n.t('Arts / Design'),
        i18n.t('Construction / Real Estate'),
        i18n.t('Consulting'),
        i18n.t('Education'),
        i18n.t('Financial Services'),
        i18n.t('Government / Non-profit Organisation'),
        i18n.t('Healthcare'),
        i18n.t('Hospitality / Food Services'),
        i18n.t('Legal'),
        i18n.t('Manufacturing'),
        i18n.t('Media / Entertainment'),
        i18n.t('Retail / Wholesale'),
        i18n.t('Student'),
        i18n.t('Technology / Information Technology'),
        i18n.t('Transportation / Logistics'),
        i18n.t('Others')
    ]

     const wauKnowAboutUs = [
        i18n.t("Referred by a friend"),
        i18n.t("Social Media"),
        i18n.t("Website"),
        i18n.t("Flyer"),
        i18n.t("Others")
    ]

    useEffect(() => {
        if (isLoading || isError) return;
        console.log(user)

        if(user.data !== null){
            setIsAllowSubmit(false);
            // alert("You have already submitted the form") #TODO: uncomment this line
        }


    }, [isLoading]);

    async function submit(){
        if(!isAllowSubmit) {
            alert("You have already submitted the form");
            return;
        }
        const data = getForm();
        const response = await createForm(data);
        if(response.status){
            alert("Form submitted successfully")
        }else{
            alert("Form submission failed")
        }
    }

    return (
       <>
           <Block title={`${t("Hi there!")} 👋`}>
               <QuestionSection title={"Which country are you currently living in?"} className={"mb-4"}>
                   <CountryDropdown
                       showDefaultOption={false}
                       classes={"w-full py-[5px] px-[8px]  bg-[#F2F3F5]  mb-4"}
                       value={country}
                       onChange={setCountry} />
               </QuestionSection>

               <QuestionSection title={"Which city are you from?(eg. KL, Johor...)"}  className={"mb-4"}>
                   <Input  placeholder={t("Enter your city")}  value={city} onChange={setCity}/>
               </QuestionSection>
           </Block>
           {
               lang === "zh"
                   ? <div className={"text-center px-4 mb-16"}>
                       <div className={"text-3xl font-bold"}>连接</div>
                       <div className={"text-lg font-bold"}>与我们</div>
                       <div className={"text-base mt-4"}>
                           嗨！欢迎来到FGA！不管你是谁，你都属于这里。请填写以下信息，以便
                           我们可以帮助你进入下一步。
                       </div>
                   </div>
                   : <div className={"text-center px-4 mb-16"}>
                       <div className={"text-3xl font-bold"}>CONNECT</div>
                       <div className={"text-lg font-bold"}>WITH US</div>
                       <div className={"text-base mt-4"}>
                           Hi! Welcome to FGA! No matter who you are, you Belong here. Please fill in the details below so
                           that we can help connect you to your next step.
                       </div>
                   </div>

           }

           <Block title={`${t("Nice to meet you!")} 😊`}>
               <QuestionSection title={"Please select from the following"} className={"mb-4"}>
                   <CheckboxGroup direction='vertical' options={states}
                                  onChange={setState}
                   />
               </QuestionSection>
           </Block>

           <Block title={`${t("Tell us more about you!")} 😎`}>
           <QuestionSection title={"First Name"} className={"mb-4"}>
                   <Input  placeholder=''  value={firstName} onChange={setFirstName}/>
               </QuestionSection>
               <QuestionSection title={"Last Name"} className={"mb-4"}>
                   <Input  placeholder=''  value={lastName} onChange={setLastName}/>
               </QuestionSection>
               <QuestionSection title={"Chinese Name(if applicable)"} className={"mb-4"}>
                   <Input  placeholder=''  value={ChineseName} onChange={setChineseName}/>
               </QuestionSection>
               <QuestionSection title={"Phone"} className={"mb-4"}>
                   <Input  placeholder=''  value={phone} onChange={setPhone}/>
               </QuestionSection>
               <QuestionSection title={"Email"} className={"mb-4"}>
                   <Input  placeholder=''  value={email} onChange={setEmail}/>
               </QuestionSection>
                <QuestionSection title={"Gender"} className={"mb-4"}>
                    <RadioGroup
                        onChange={setGender}
                    >
                        <Radio value='Male'>{t("Male")}</Radio>
                        <Radio value='Female'>{t("Female")}</Radio>
                    </RadioGroup>
                </QuestionSection>

               <QuestionSection title={"Date of Birth"} className={"mb-4"}>
                   <DatePicker style={{ width: "100%" }}
                        onChange={setBirthDate}
                   />
               </QuestionSection>

               <QuestionSection title={"Industry"} className={"mb-4"}>
                   <Select
                       placeholder={t('Select your industry')}
                       style={{ width: "100%" }}
                          onChange={setIndustry}
                   >
                       {industryOptions.map((option, index) => (
                           <Option key={index}  value={option}>
                               {option}
                           </Option>
                       ))}
                   </Select>
               </QuestionSection>
           </Block>

           <Block title={`${t("Faith Background")} 🙏`}>
               <QuestionSection title={"Are you a Christian?"} className={"mb-4"}>
                   <RadioGroup  onChange={setIsChristian}>
                       <Radio value='yes'>{t("Yes")}</Radio>
                       <Radio value='no'>{t("No")}</Radio>
                   </RadioGroup>
               </QuestionSection>
               <QuestionSection title={"Baptism Status"} className={"mb-4"}>
                   <RadioGroup onChange={setIsBaptized}>
                       <Radio value='yes'>{t("Yes")}</Radio>
                       <Radio value='no'>{t("No")}</Radio>
                   </RadioGroup>
               </QuestionSection>
               <QuestionSection title={"Do you have a regular church?"} className={"mb-4"}>
                   <RadioGroup onChange={setHasRegularChurch}>
                       <Radio value='yes'>{t("Yes")}</Radio>
                       <Radio value='no'>{t("No")}</Radio>
                   </RadioGroup>
               </QuestionSection>
               <QuestionSection title={"How did you learn about our church?"} className={"mb-4"}>
                   <Select
                       placeholder={t('Select how you know about us')}
                       style={{ width: "100%" }}
                            onChange={setWayKnowUs}
                   >
                       {wauKnowAboutUs.map((option, index) => (
                           <Option key={index}  value={option}>
                               {option}
                           </Option>
                       ))}
                   </Select>
               </QuestionSection>
           </Block>
           <div className={"px-2 mb-4"}>
               <button className={"bg-[#353535] text-white px-4 py-2 rounded-lg mt-4  text-center] w-full"}
                onClick={submit}
               >
                   {t("Submit")}
               </button>
           </div>
       </>
    )
}