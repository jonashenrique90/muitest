import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import styled from "styled-components";
import logoImg from "../../public/icons/1544136836.svg";
import { OptimizedImage } from "./optimized-image";

const TopNavContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	overflow: hidden;
`;

const TopNavSection = styled.div`
	justify-content: flex-start;
	align-items: center;
	display: flex;
`;

export const IndexAppBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="relative" color="default">
				<Toolbar disableGutters>
					<TopNavContainer>
						<TopNavSection>
							<OptimizedImage
								src={logoImg}
								alt="Calango Tech"
								lazy
								ext="svg"
								width="48"
								height="48"
							/>
							<Button color="inherit">Login</Button>
						</TopNavSection>
					</TopNavContainer>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
