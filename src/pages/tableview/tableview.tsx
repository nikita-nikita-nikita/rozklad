import React from "react";
import styled from "styled-components";
import Tableview from "../../containers/tableview/tableview";

const Main = styled.main`
    margin-top: 100px;
`;

const TableviewPage:React.FC = () => {
    return (
        <Main >
            <Tableview/>
        </Main>
    )
};

export default TableviewPage
