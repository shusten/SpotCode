import React, { Fragment } from 'react';
import NavbarFooter from '../../components/common/navbar_footer';
import SectionWrapper from '../../components/common/section_wrapper';
import Albums from '../../components/albums';

const AlbumScreen = () => {
    return (
        <Fragment>
            <SectionWrapper>
                <Albums />
                <NavbarFooter />
            </SectionWrapper>
        </Fragment>
    )
}

export default AlbumScreen;