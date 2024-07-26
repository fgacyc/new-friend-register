import { create } from 'zustand'

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
            country: useFormStore.getState().country,
            city: useFormStore.getState().city,
            state: useFormStore.getState().state,
            firstName: useFormStore.getState().firstName,
            lastName: useFormStore.getState().lastName,
            ChineseName: useFormStore.getState().ChineseName,
            phone: useFormStore.getState().phone,
            email: useFormStore.getState().email,
            gender: useFormStore.getState().gender,
            birthDate: useFormStore.getState().birthDate,
            industry: useFormStore.getState().industry,
            isChristian: useFormStore.getState().isChristian,
            isBaptized: useFormStore.getState().isBaptized,
            hasRegularChurch: useFormStore.getState().hasRegularChurch,
            wayKnowUs: useFormStore.getState().wayKnowUs
        }
    }
}))
