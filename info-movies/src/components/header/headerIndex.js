import React from 'react'

// Images
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg';

// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './header.style';


const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={ RMDBLogo } alt='rmdb-logo' />
            <TMDBLogoImg src={ TMDBLogo } alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;