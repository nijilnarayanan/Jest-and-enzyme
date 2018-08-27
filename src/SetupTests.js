const enzyme = require('enzyme');

const enzymeAdapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new enzymeAdapter() });