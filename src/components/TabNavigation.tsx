import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { eventNames } from 'process';

interface TabNavigationProps {
    children?: React.ReactNode;
    value: number;
    index: number;
}

const TabPanel: React.FC<TabNavigationProps> = (props) => {
    const { children, value, index } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <p style={{ color: 'white' }}>{children}</p>
                </Box>
            )}
        </div>
    )
}

export const TabNavigation: React.FC = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(event);
        setValue(newValue);
    }

    return (
        <div>
            <Tabs value={value} onChange={handleChange} aria-label="tabs example">
                <Tab label="Projects" />
                <Tab label="About" />
                <Tab label="Stack(s)" />
            </Tabs>
            <TabPanel value={value} index={0}>
                Content for Projects
            </TabPanel>
            <TabPanel value={value} index={1}>
                Content for About
            </TabPanel>
            <TabPanel value={value} index={2}>
                Content for Stack(s)
            </TabPanel>
        </div>
    )
}
