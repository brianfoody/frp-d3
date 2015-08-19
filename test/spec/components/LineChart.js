'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import LineChart from 'components/LineChart.js';

describe('LineChart', () => {
    let LineChartComponent;

    beforeEach(() => {
        LineChartComponent = createComponent(LineChart);
    });

    it('should have its component name as default className', () => {
        expect(LineChartComponent._store.props.className).toBe('LineChart');
    });
});
