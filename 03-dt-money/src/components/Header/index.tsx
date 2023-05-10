import { HeaderContainer, HeaderContent } from "./styles";

import logo from '../../assets/ignite-logo.svg'
import { Modal } from "../Modal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />

                <Modal />
            </HeaderContent>
        </HeaderContainer>
    )
}