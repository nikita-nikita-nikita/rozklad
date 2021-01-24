import React from "react";
import {connect, MapStateToProps} from "react-redux";
import styled from "styled-components";
import {StateType} from "../../../store";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  font-size: 24px;
`;

const Group = styled.h2`
  padding: 10px 16px;
  background: rgba(255, 246, 156, 0.47);
  border-radius: 15px;
`;

type HeaderProps = {
    group: string|null
}

const Header:React.FC<HeaderProps> = ({group}) => {
    return (
        <HeaderStyled>
            <Group>{group}</Group>
        </HeaderStyled>
    )
};

const mapStateToProps: MapStateToProps<{ group: string | null }, any, StateType> = ({user}) => ({
    group: user.group
});

export default connect(mapStateToProps)(Header);
