import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import injectSheet from 'react-jss';

import CommonRoutes from '../routes/common_routes';

import {
	setWidth as setWidthAction
} from '../../actions/utils_actions';

import resizeBreakpoints from '../../utils/resize_breakpoints';

import styles from './app_styles';

const App = ({
	width,
	setWidth,
	classes
}) => {
	const getAndSetWidth = () => {
		const { innerWidth } = window;
		if (innerWidth) {
			let newWidth = null;
			const resizeBreakpointsKeys = Object.keys(resizeBreakpoints);
			resizeBreakpointsKeys.some((key, index) => {
				const value = resizeBreakpoints[key];
				if (innerWidth < value) {
					newWidth = resizeBreakpointsKeys[index - 1];
					return true;
				}
				return false;
			});
			if (width !== newWidth && setWidth) {
				setWidth(newWidth);
			}
		}
	}

	const registerResizeEvent = () => {
		if (window) {
			getAndSetWidth();
			window.addEventListener('resize', getAndSetWidth);
		}
	}

	const unregisterResizeEvent = () => {
		if (window) {
			window.removeEventListener('resize', getAndSetWidth);
		}
	}

	useEffect(() => {
		registerResizeEvent();
		return unregisterResizeEvent;
	}, []);

	return (
		<Router>
			<>
					<CommonRoutes />
			</>
		</Router>
	);
}

const mapStateToProps = ({ utils: { width } }) => ({ width });

const mapDispatchToProps = dispatch => bindActionCreators({
	setWidth: setWidthAction
}, dispatch);

export default injectSheet(styles)(connect(mapStateToProps, mapDispatchToProps)(App));
