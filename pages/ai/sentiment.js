import React, {Component} from 'react'

import Page from '../../components/Page'
import * as breakPoints from '../../utils/breakPoints'

import {errorRed, sentimentColors} from '../../utils/colors.js'

const apiRoot = 'https://ai.cserdean.me'

export default class Sentiment extends Component {
  state = {
    initializing: true,
    text: '',
    prediction: undefined,
    loading: false,
  }

  async componentDidMount() {
    try {
      const res = await fetch(apiRoot + '/ping')

      if (res.ok) {
        return this.setState({initializing: false})
      }
      this.setState({error: true, initializing: false})
    } catch (e) {
      this.setState({error: true, initializing: false})
    }
  }

  async predict({target: {value}}) {
    if (value.length === 0)
      return this.setState({text: value, prediction: undefined})
    try {
      this.setState({loading: true, text: value})
      const res = await fetch(apiRoot + '/sentiment', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: value,
        }),
      })

      if (res.ok) {
        const {prediction} = await res.json()
        return this.setState({prediction, loading: false})
      }
      this.setState({error: true, loading: false})
    } catch (e) {
      console.log(e)
      this.setState({error: true, loading: false})
    }
  }

  renderInput() {
    const {loading, text} = this.state
    return (
      <div className="input__container">
        {text.length > 0 && (
          <button
            className="input__clear"
            onClick={() => this.setState({text: '', prediction: undefined})}>
            +
          </button>
        )}
        <input
          value={text}
          type="text"
          onChange={this.predict.bind(this)}
          className={`input ${loading ? '' : 'input--not-loading'}`}
          placeholder="Type something..."
        />
        {loading && <span className="input__loading" />}
        <style jsx>{`
          .input__loading {
            position: absolute;
            background: white;
            bottom: 0px;
            height: 1px;
            animation: loading 2s infinite;
          }
          .input {
            width: 290px;
            padding-right: 10px;
            height: 18px;
            border: none;
            border-bottom: solid rgba(255, 255, 255, 0.4) 1px;
            padding: 8px 0;
            outline: none;
            font-size: 16px;
            background: none;
            transition: 0.2s all;
            color: white;
            padding-right: 10px;
          }
          .input--not-loading:focus {
            border-color: rgba(255, 255, 255, 1);
          }
          .input__container {
            position: relative;
            display: inline-block;
            margin-top: 16px;
            margin-bottom: 32px;
          }

          .input__clear {
            background: none;
            border: none;
            outline: none;
            color: white;
            cursor: pointer;
            position: absolute;
            font-size: 1.5em;
            right: -5px;
            top: 50%;
            transform: translate(0, -50%) rotate(45deg);
          }

          @keyframes loading {
            0% {
              left: 0;
              right: 75%;
            }
            50% {
              left: 75%;
              right: 0;
            }
            100% {
              left: 0;
              right: 75%;
            }
          }
        `}</style>
      </div>
    )
  }

  render() {
    const {initializing, error, prediction, loading} = this.state

    return (
      <Page active="/ai" dark>
        <div className="content">
          <h4 className="title">
            Sentiment classifier trained on movie reviews{' '}
            <a
              href="https://github.com/c0z0/sentiment-classifier"
              className="src">
              [src]
            </a>
          </h4>
          {initializing && <p className="initializing">loading...</p>}
          {error && <p className="error">something went wrong</p>}
          {!(error || initializing) && this.renderInput()}
          <div className="scale">
            <span className={`scale__indicator`} />
          </div>
          <style jsx>{`
            .src {
              color: white;
              text-decoration: none;
              font-family: Menlo;
            }

            .title {
              font-weight: normal;
              font-size: 1.5em;
            }

            .initializing {
              opacity: 0.2;
            }

            .error {
              color: ${errorRed};
              margin-top: 16px;
              margin-bottom: 32px;
            }

            .scale {
              margin: 0 auto;
              position: relative;
              height: 2px;
              width: 300px;
              background: linear-gradient(
                to right,
                ${sentimentColors.join(',')}
              );
            }

            .scale__indicator {
              position: absolute;
              top: -5px;
              bottom: -5px;
              background: white;
              width: 2px;
              left: ${prediction !== undefined
                ? (prediction / 4) * 300
                : 150}px;
              transition: all 0.5s;
            }

            .content {
              text-align: center;
            }

            @media (${breakPoints.tabletUp}) {
              .content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                left: 50%;
              }
            }
          `}</style>
          <style jsx global>{`
            body {
              background: black;
            }
          `}</style>
        </div>
      </Page>
    )
  }
}
