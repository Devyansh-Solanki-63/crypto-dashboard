import React from 'react'
import { useContext } from 'react'
import Context from '../../context/Context'

const MainHeading = () => {

    const {mode, setMode} = useContext(Context)

  return (
    <h1 className={`main-heading text-center text-${mode.text}`}>
        <span className="word_1 mx-2">
            <span className="letter letter_01">W</span>
            <span className="letter letter_02">e</span>
            <span className="letter letter_03">l</span>
            <span className="letter letter_04">c</span>
            <span className="letter letter_05">o</span>
            <span className="letter letter_06">m</span>
            <span className="letter letter_07">e</span>
        </span>
        <span className="word_2 mx-2">
            <span className="letter letter_08">T</span>
            <span className="letter letter_09">o</span>
        </span>
        <span className="word_3 mx-2">
            <span className="letter letter_10">C</span>
            <span className="letter letter_11">r</span>
            <span className="letter letter_12">y</span>
            <span className="letter letter_13">p</span>
            <span className="letter letter_14">t</span>
            <span className="letter letter_15">o</span>
        </span>
        <span className="word_4 mx-2">
            <span className="letter letter_16">W</span>
            <span className="letter letter_17">o</span>
            <span className="letter letter_18">r</span>
            <span className="letter letter_19">l</span>
            <span className="letter letter_20">d</span>
        </span>
    </h1>
  )
}

export default MainHeading