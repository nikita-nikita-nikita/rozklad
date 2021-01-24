import React from "react";
import styled from "styled-components";
import Tableview from "../../containers/tableview/tableview";
import Header from "./Header";

const Main = styled.main`
    margin-top: 100px;
`;

const TableviewPage:React.FC = () => {
    return (
        <Main >
            <Header/>
            <Tableview/>
        </Main>
    )
};

export default TableviewPage
