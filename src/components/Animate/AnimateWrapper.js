import React, { Component } from 'react'
import * as Animated from 'animated/lib/targets/react-dom'
const AnimatedWrapper = WrappedComponent =>
  class AnimatedWrapper extends Component {
    constructor(props) {
      super(props)
      this.state = {
        animate: new Animated.Value(0),
      }
    }
    // componentWillAppear(cb) {
    //   console.log('????')
    //   Animated.spring(this.state.animate, { toValue: 1 }).start()
    //   cb()
    // }
    //  componentWillEnter(cb) {
    //   setTimeout(
    //    () => Animated.spring(this.state.animate, { toValue: 1 }).start(),
    //    250
    //   );
    //   cb();
    //  }
    //  componentWillLeave(cb) {
    //   Animated.spring(this.state.animate, { toValue: 0 }).start();
    //   setTimeout(() => cb(), 175);
    //  }

    render() {
      return (
        <Animated.div className="animated-page-wrapper">
          <WrappedComponent {...this.props} />
        </Animated.div>
      )
    }
  }
export default AnimatedWrapper
