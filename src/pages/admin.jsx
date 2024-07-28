import NavBar from "@/components/nav-bar.jsx";
import { Tabs } from 'antd-mobile'
import {useAdminStore} from "@/store/admin-store.js";
import AdminFindCG from "@/pages/admin/findCG.jsx";
import AdminFollow from "@/pages/admin/follow.jsx";
import AdminCompleted from "@/pages/admin/completed.jsx";

export default function Admin() {
    const setCurrentTab = useAdminStore(state =>state.setCurrentTab);


  return (
    <div>
        <NavBar ifShowBackArrow={false}>Admin</NavBar>
        <Tabs onChange={
            (tab) => {
                console.log('onChange',  tab);
                setCurrentTab(tab);
            }
        } >
            <Tabs.Tab title='Find CG' key='find_cg'>
                <AdminFindCG />
            </Tabs.Tab>
            <Tabs.Tab title='Follow' key='follow'>
                <AdminFollow />
            </Tabs.Tab>
            <Tabs.Tab title='Completed' key='completed'>
                <AdminCompleted />
            </Tabs.Tab>
        </Tabs>
    </div>
  );
}