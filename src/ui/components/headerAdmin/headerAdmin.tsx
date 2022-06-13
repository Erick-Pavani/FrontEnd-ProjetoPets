import { Link, Box } from "@mui/material";
import NextLink from 'next/link';
import {
    CabecalhoContainer,
    Logo,
    LinksContainer
} from "./headerAdmin.style"

export default function HeaderAdmin() {
    return (
        <CabecalhoContainer>
            <div>
                <Logo src={'/imagens/logo.svg'} alt={'Adote um pet'}></Logo>
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/cadastro'}>
                        <a>
                            Cadastrar Pet
                        </a>
                    </Link>
                    <Link component={NextLink} href={'/pets/cadastro'}>
                        <a>
                            Relatório{' '}
                            <Box component={'span'} sx={{ display: { sm: 'initial', xs: 'none' } }}>
                                de Adoção
                            </Box>
                        </a>
                    </Link>
                </LinksContainer>
            </div>
            <NextLink href="">
                <a>

                </a>
            </NextLink>
        </CabecalhoContainer >
    )
}