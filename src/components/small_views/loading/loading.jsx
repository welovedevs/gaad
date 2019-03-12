import React from 'react';

import { WaveLoading } from 'respinner';

import { primary } from '../../../utils/colors_palette';

const Loading = () => (
	<WaveLoading
		size={50}
		stroke={primary[500]}
		strokeWidth={3}
		count={2}
	/>
);

export default Loading;
