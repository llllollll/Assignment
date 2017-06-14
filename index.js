import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

class App extends React.Component {
  render() {
    return(
      <div>
        <h2> My work</h2>
        <MyWork/>
      </div>
    )
  }
}

class MyWork extends React.Component {
  render() {
    return(
      <div id = "main" class = "normal">
        <div class = "flexs" id = "aone">
          <div id = "bone">
            <input type = "text" placeholder = "Email"/>
            <input type = "text" placeholder = "password"/>
            <input type = "checkbox"/>
            <label>Remember me</label>
            <button>Sign in</button>
          </div>

          <div id = "btwo">
            <h4>Use your social network account to sign in</h4>
            <button>FACEBOOK</button>
            <button>TWITTER</button>
          </div>

          <div id = "bthree">
            <label>Forget password?</label>
          </div>

          <div id = "bfour">
            <label>No account?</label>
            <a href>Sign Up</a>
          </div>
        </div>

        <div>
          <div id = "atwo">
            <div>
              <input type = "text" placeholder="Text input"/>
              <input type = "text" placeholder="Text input"/>
              <input type = "text" placeholder="Text input"/>
            </div>

            <div>
              <input type = "text" placeholder="Text input"/>
              <input type = "text" placeholder="Text input"/>
              <input type = "text" placeholder="Text input"/>
            </div>

            <div>
              <h6>something that i cant read it</h6>
              <button>Create account</button>
            </div>

            <div>
              <label>Already have an account? </label>
              <a href>Signin</a>
            </div>
          </div>
        </div>

        <div id = "athree">
          <label>Title</label>
          <input type = "text" placeholder = "pala pala pala"/>
          <button>*</button>
          <button>*</button>
        </div>

        <div id = "afour">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <p> pala pala pala pala pala pala pala pala pala pala pala pala pala pala pala pala pala pala </p>
        </div>

        <div id = "afive">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <p> pala pala pala pala pala pala pala pala pala pala pala pala pala pala pala pala pala pala </p>
        </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
