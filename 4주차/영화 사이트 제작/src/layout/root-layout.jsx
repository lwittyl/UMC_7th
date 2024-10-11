import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from 'styled-components';
import SideBar from "../components/SideBar";
const RootLayout = ()=>{
    return(
        <>
            <Navbar/>
            <Row>
                <SideBar></SideBar>
                <Outlet/>
            </Row>
        </>
    )
}
export default RootLayout;

const Row = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`