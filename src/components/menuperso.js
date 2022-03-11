import '../assets/css/menuPerso.css'

import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export default function Menu2() {
    return (
        <Menu className="BoutonMenu" menuButton={<MenuButton>Menu</MenuButton>} transition>
            <MenuItem>Choisir votre Thème</MenuItem>
            <MenuItem>A propos de nous</MenuItem>
            <MenuItem>Contact</MenuItem>
        </Menu>
    );
}