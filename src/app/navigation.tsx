'use client';

import {
    Avatar,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { AppLogo } from '../components/app-logo';
import { ThemeToggle } from '../components/theme-toggle';
import { buttonVariants } from '../components/ui/button';
import NavLink from '@/components/nav-link';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        'Profile',
        'Dashboard',
        'Activity',
        'Analytics',
        'System',
        'Deployments',
        'My Settings',
        'Team Settings',
        'Help & Feedback',
        'Log Out',
    ];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            shouldHideOnScroll
            height={'5rem'}
            maxWidth='2xl'>
            <NavbarContent justify='center'>
                <NavbarBrand className='mr-4'>
                    <AppLogo />
                </NavbarBrand>
                <div className='hidden gap-x-6 sm:flex'>
                    <NavbarItem>
                        <NavLink href='/'>Home</NavLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavLink href='/todo-list'>Todo List</NavLink>
                    </NavbarItem>
                </div>
            </NavbarContent>

            <NavbarContent justify='end'>
                <NavbarItem>
                    <ThemeToggle />
                </NavbarItem>
                <NavbarItem>
                    <Avatar
                        isBordered
                        as='button'
                        className='transition-transform'
                        color='secondary'
                        name='Jason Hughes'
                        size='md'
                        src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                    />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
