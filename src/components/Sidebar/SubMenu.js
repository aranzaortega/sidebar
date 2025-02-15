import Sidebar from './Sidebar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: gray;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 16px;

    &:hover{
        background: white;
        border-left: 4px solid blue;
        cursor: pointer;
        text-decoration: none;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const SubMenu = ({ item }) => {
    return (
        <>
            <SidebarLink to={item.path}>
                <div>
                    {item.icon}
                    <SidebarLabel>
                        {item.title}
                    </SidebarLabel>
                </div>
            </SidebarLink>
        </>
    )
}

export default SubMenu;