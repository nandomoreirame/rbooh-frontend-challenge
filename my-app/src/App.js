import React, {Component} from 'react';

const root = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '80px',
};

const content = {
  borderStyle: 'solid',
  borderWidth: '2px',
  padding: '30px'
}

class App extends Component {
  render() {
    return  <div style={root}>
                <div style={content}>
                  <div>
                      <a href="https://rbooh.com.br/"
                        target="_blank"
                        rel="noopener noreferrer">
                          <img src="https://rbooh.com.br/wp-content/uploads/elementor/thumbs/LOGO_SITE_RBOOH-04-oenp9ewoi202ydlbtogmeuh7hx8dfcmw23cwbyheus.png" alt="logo" />
                      </a>
                  </div>
                  <div>
                    <h4>
                      Desafio para ingressar como Remote Front-end Developer na Rbooh
                    </h4>
                  </div>
                </div>
            </div>;
  }
}

export default App;
