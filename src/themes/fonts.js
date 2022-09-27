import CascadiaWoff2 from '/assets/fonts/CascadiaCode.woff2';
import Roboto from '/assets/fonts/Roboto-Regular.ttf';
import RobotoBold from '/assets/fonts/Roboto-Bold.ttf';
import RobotoLight from '/assets/fonts/Roboto-Light.ttf';

export default`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url(${Roboto}) format('ttf'),
  }
  @font-face {
    font-family: 'Roboto';
    font-style: bold;
    font-weight: 500;
    src: url(${RobotoBold}) format('ttf'),
  }
  @font-face {
    font-family: 'Roboto';
    font-style: light;
    font-weight: 100;
    src: url(${RobotoLight}) format('ttf'),
  }
  @font-face {
    font-family: 'Cascadia Code';
    font-style: regular;
    font-weight: 300;
    src: url(${CascadiaWoff2}) format('woff2')
  }
`