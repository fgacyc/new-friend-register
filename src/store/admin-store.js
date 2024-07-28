import { create } from 'zustand'

export const useAdminStore = create((set) => ({
    currentTab : 'find_cg',
    setCurrentTab: (tab) => set({currentTab: tab}),

}))