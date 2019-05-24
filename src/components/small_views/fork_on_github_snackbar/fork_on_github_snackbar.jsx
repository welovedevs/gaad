import React, { useEffect, useState, useRef } from 'react';

import injectSheet from 'react-jss';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import { GithubOutline } from '@ant-design/icons';
import AntdIcon from '@ant-design/icons-react';

import styles from './fork_on_github_snackbar_styles';

const ForkOnGithubSnackbar = ({ classes }) => {
	const [open, setOpen] = useState(false);
	const timeout = useRef();
	useEffect(
		() => {
			timeout.current = setTimeout(() => {
				setOpen(true);
			}, 5000);
			return () => clearTimeout(timeout.current);
		},
		[timeout.current]
	);
	return (
		<Snackbar
			{...{ open }}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right'
			}}
			autoHideDuration={6000}
			ContentProps={{
				'aria-describedby': 'message-id'
			}}
			message={(
				<span id="message-id">
					{'Vous souhaitez améliorer un génerateur déjà parfait ?'}
				</span>
			)}
			action={[
				<a
					className={classes.githubLink}
					href="https://github.com/welovedevs/gaad"
				>
					<IconButton
						key="close"
						aria-label="Close"
						color="inherit"
						className={classes.close}
					>
						<AntdIcon className={classes.socialIcon} type={GithubOutline} />
					</IconButton>
				</a>
			]}
		/>
	);
};

export default injectSheet(styles)(ForkOnGithubSnackbar);
