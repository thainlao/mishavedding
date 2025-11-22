import ReactFullpage from '@fullpage/react-fullpage';
import DetailsPage from "./component/DetailsPage"
import DressCodePage from "./component/DressCodePage"
import Firstpage from "./component/FirstPage"
import FooterPage from "./component/FooterPage"
import PlacePage from "./component/PlacePage"
import TimingPage from "./component/TimingPage"

function App() {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      scrollOverflow={false}
      navigation={false}
      credits={{ 
        enabled: false,
        label: 'Made with fullpage',
        position: 'right'
      }}
      sectionsColor={['transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent']}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Firstpage />
            </div>
            <div className="section">
              <PlacePage />
            </div>
            <div className="section">
              <TimingPage />
            </div>
            <div className="section">
              <DressCodePage />
            </div>
            <div className="section">
              <DetailsPage />
            </div>
            <div className="section">
              <FooterPage />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;