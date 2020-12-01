import React from 'react';
import { FaGithub } from 'react-icons/fa'

export default function Footer(props) {
    return (
        <footer>
            &copy; Caitlin Keefe | 2020 <a target='_blank' rel="noopener" href='https://github.com/ckeefe90/Dynamic-Pizza-Client' title='GitHub Client Repository'><FaGithub /></a>
        </footer>
    )
}