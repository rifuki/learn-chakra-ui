'use client';

import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons';

export default function Sidebar() {
    return (
        <List
            color="white"
            fontSize="1.2em"
            spacing={4}
        >
            <ListItem>
                <ListIcon
                    as={CalendarIcon}
                    color="white"
                />
                <Link href="/">Dashboard</Link>
            </ListItem>
            <ListItem>
                <ListIcon
                    as={EditIcon}
                    color="white"
                />
                <Link href="/create">New Task</Link>
            </ListItem>
            <ListItem>
                <ListIcon
                    as={AtSignIcon}
                    color="white"
                />
                <Link href="/profile">Profile</Link>
            </ListItem>
        </List>
    );
}
