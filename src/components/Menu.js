import React from 'react';
import {Menu} from 'semantic-ui-react'

const items = [
    {key: 'Home', active: true, name: 'Home'},
    {key: 'projects', name: 'Projects'},
    {key: 'aboutMe', name: 'About Me'},
];

const MenuExampleProps = () => {
    return (
        <Menu>
            <Menu.Item header>
                <div>
                    <img src='/img/logo.png' style={{height:36}} alt='logo'/>
                </div>
            </Menu.Item>
            <Menu.Item name='aboutUs' position='right'/>
            <Menu.Item name='jobs'/>
            <Menu.Item name='locations'/>
        </Menu>
    )
};

export default MenuExampleProps