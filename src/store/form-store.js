import { create } from 'zustand'
import {useUserStore} from "@/store/user-store.js";

export const useFormStore = create((set) => ({
    country: "Malaysia",
    setCountry: (country) => set({ country }),

    city : "",
    setCity : (city) => set({ city }),

    state : [],
    setState : (state) => set({ state }),

    firstName : "",
    setFirstName : (firstName) => set({ firstName }),

    lastName : "",
    setLastName : (lastName) => set({ lastName }),

    ChineseName : "",
    setChineseName : (ChineseName) => set({ ChineseName }),

    phone : "",
    setPhone : (phone) => set({ phone }),

    email : "",
    setEmail : (email) => set({ email }),

    gender : "",
    setGender :(gender) => set({ gender }),

    birthDate : "",
    setBirthDate : (birthDate) => set({ birthDate }),

    industry : "",
    setIndustry : (industry) => set({ industry }),

    isChristian : "",
    setIsChristian : (isChristian) => set({ isChristian }),

    isBaptized : "",
    setIsBaptized : (isBaptized) => set({ isBaptized }),

    hasRegularChurch : "",
    setHasRegularChurch : (hasRegularChurch) => set({ hasRegularChurch }),

    wayKnowUs : "",
    setWayKnowUs : (wayKnowUs) => set({ wayKnowUs }),


    getForm(){
        return {
            user_id : useUserStore.getState().UID,
            country: useFormStore.getState().country,
            city: useFormStore.getState().city,
            state: useFormStore.getState().state,
            first_name: useFormStore.getState().firstName,
            last_name: useFormStore.getState().lastName,
            chinese_name: useFormStore.getState().ChineseName,
            phone: useFormStore.getState().phone,
            email: useFormStore.getState().email,
            gender: useFormStore.getState().gender,
            birth_date: useFormStore.getState().birthDate,
            industry: useFormStore.getState().industry,
            is_christian: useFormStore.getState().isChristian === "yes",
            is_baptized: useFormStore.getState().isBaptized === "yes",
            has_regular_church: useFormStore.getState().hasRegularChurch === "yes",
            way_know_us: useFormStore.getState().wayKnowUs
        }
    }
}))
