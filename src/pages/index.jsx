import NavBar from "@/components/nav-bar.jsx";
import Form from "@/pages/form.jsx";

export default function Index() {
    return (
        <div className={"h-screen"}>
            <NavBar ifShowBackArrow={false}>Welcome Home!</NavBar>
            <div className={"h-[calc(100vh-50px)] overflow-y-auto"}>
                <Form/>
            </div>

        </div>
    )
}