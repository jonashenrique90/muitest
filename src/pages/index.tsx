import { Paper, Typography } from "@mui/material";
import styled from 'styled-components';
import theme from "../theme";

const HomeContainer = styled(Paper)`
    min-height: 200px;
    background: ${theme.palette.primary.main};
    text-align: center;
`;

const Home = () => (
    <>
        <HomeContainer>
            <Typography variant="h4">
                Hello world!
            </Typography>
        </HomeContainer>
    </>
);

export default Home;
