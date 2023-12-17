'use client';

import {
    ChatIcon,
    CheckCircleIcon,
    EmailIcon,
    StarIcon,
    WarningIcon,
} from '@chakra-ui/icons';
import {
    List,
    ListIcon,
    ListItem,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react';

export default function Profile() {
    return (
        <Tabs
            padding={{ base: '20px', md: '40px' }}
            colorScheme="purple"
            variant="enclosed"
        >
            <TabList>
                <Tab _selected={{ color: 'white', bg: 'purple.400' }}>
                    Account Info
                </Tab>
                <Tab _selected={{ color: 'white', bg: 'purple.400' }}>
                    Post History
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <List spacing={4}>
                        <ListItem>
                            <ListIcon as={EmailIcon} />
                            Email: rifuki@nyan.moe
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ChatIcon} />
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nulla labore molestias culpa porro totam
                            incidunt fugiat.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={StarIcon} />
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Nisi nihil, sequi perferendis hic corporis
                            quae atque explicabo earum asperiores vel
                            perspiciatis iure veniam nobis!
                        </ListItem>
                    </List>
                </TabPanel>

                <TabPanel>
                    <List spacing={4}>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="teal.400" />
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="teal.400" />
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={WarningIcon} color="red.400" />
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="teal.400" />
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={WarningIcon} color="red.400" />
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="teal.400" />
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </ListItem>
                    </List>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
