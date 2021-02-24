import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring'

const props = useSpring({ opacity: 1, from: { opacity: 0 } })
function Out() {
    return <animated.div style={props}>I will fade in</animated.div>
}
function Spring() {
    return <animated.div style={props}>I will fade in</animated.div>
}
export default Spring;