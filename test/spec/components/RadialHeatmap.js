'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import RadialHeatmap from 'components/RadialHeatmap.js';

describe('RadialHeatmap', () => {
    let RadialHeatmapComponent;

    beforeEach(() => {
        RadialHeatmapComponent = createComponent(RadialHeatmap);
    });

    it('should have its component name as default className', () => {
        expect(RadialHeatmapComponent._store.props.className).toBe('RadialHeatmap');
    });
});
