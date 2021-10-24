import { Grid, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import { IndexAppBar } from "../common/components/app-bar";
import d from "../public/icons/1544136836.svg";
import { OptimizedImage } from "../common/components/optimized-image";

const StyledMain = styled.main`
	min-height: calc(100vh - 64px);
`;

const Home = () => {
	return (
		<StyledMain>
			<IndexAppBar />
			<Grid container>
				<Grid item xs={12}>
					<Paper sx={{ my: 4, p: 2 }}>
						<Typography variant="h5" component="h1">
							ksdjjjnsdkljskdnflsk
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper sx={{ my: 4, p: 2 }}>
						<OptimizedImage src={d} ext="svg" width="32" height="32" />
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper sx={{ my: 4, p: 2 }}>
						<Typography variant="h5" component="h1">
							ksdjjjnsdkljskdnflsk
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper sx={{ my: 4, p: 2 }}>
						<Typography variant="h5" component="h1">
							ksdjjjnsdkljskdnflsk
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</StyledMain>
	);
};

export default Home;
