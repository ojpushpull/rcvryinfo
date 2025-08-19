import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface NavItem {
    href: string;
    label: string;
}

interface NavigationProps {
    className?: string;
    items?: NavItem[];
    
}

const [isOpen, setIsOpen] = useState<boolean>(false);

const router = useRouter();
//router.pathname is automatically typed as string
//router.push() has proper type checking

const handleMenuToggle = (): void => {
    setIsOpen(!isOpen);
};

const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
 //handle click logic
};
