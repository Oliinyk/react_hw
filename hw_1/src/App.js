import React from 'react';
import './App.css';
import './components/Buttons/Btn.css';
import './components/Content/Content.css';
import './components/Tooltip/Tooltip.css';
import Btn from './components/Buttons/Btn';
import Content from './components/Content/Content';
import Tooltip from './components/Tooltip/Tooltip';

function App() {
	return (
		<div className="App">
			<div className="container">
				<div class="head">
					<div>
						<Btn type='default' />
						<Btn type='error' />
						<Btn type='success' />
					</div>

					<div>
						<Tooltip text='tooltip top' message='tooltip inner text' position='top' />
						<Tooltip text='tooltip right' message='tooltip inner text' position='right' />
                        <Tooltip text='tooltip left' message='tooltip inner text' position='left' />
						<Tooltip text='tooltip bottom' message='tooltip inner text' position='bottom' />
					</div>
				</div>

				<div class="main">
					<Content type='default' />
					<Content type='error' />
					<Content type='success' />
				</div>

			</div>
		</div>
	);
}

export default App;

















{/*import React from 'react';
import './App.css';
import './components/ButtonsComponent/BtnComponent.css';
import './components/ContentComponent/ContentComponent.css';
import './components/TooltipComponent/TooltipComponent.css';
import BtnComponent from './components/ButtonsComponent/BtnComponent';
import ContentComponent from './components/ContentComponent/ContentComponent';
import TooltipComponent from './components/TooltipComponent/TooltipComponent';

function App() {
  const buttons = [
    {
      'type': 'success',
      'text': 'sdfbsdfbdf'
    },
    {
      'type': 'error',
      'text': 'ascasc'
    }
  ];
  return (
    <div className="App">
      <div className="container">
        <div>
          <BtnComponent type='success' />
          <BtnComponent type='error' />
          <BtnComponent type='default' />
        </div>
//buttons.map(button => <BtnComponent type={button.type} text={button.text} />)
        <div>
          <ContentComponent type="default" />
          <ContentComponent type="error" />
          <ContentComponent type="success" />
        </div>

        <div>
          <p><TooltipComponent message={'Hello, I am a super cool tooltip'} position={'top'}>tooltip</TooltipComponent> </p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
*/}