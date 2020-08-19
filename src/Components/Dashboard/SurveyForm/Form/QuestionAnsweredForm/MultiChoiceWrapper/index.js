import React, { useEffect } from 'react';

import MultiChoiceV2 from '../../../Form/MultiChoiceV2';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { setMultichoiceID, setMultichoiceInputstate } from '../../../../../../Store/redux/action';
import { MULTICHOICE } from '../../../../../../util/varTypes';

const MultiChoiceWrapper = (props) => {

    const { inputState, multiChoiceId, setId, setInput } = props

    useEffect(() => {
        const initialize = [uuid()]
        setId(initialize)
        setInput([]);
    }, [])

    const inputStateHandler = (val, _id) => {
        const data = [{
            ...inputState[0],
            [_id]: {
                ...val
            }
        }]
        setInput(data)
    }

    const addNewMultiChoice = (_id) => {
        const index = multiChoiceId.findIndex(id => id === _id)
        const newArray = Array.from(multiChoiceId)
        const start = index + 1;
        if (newArray[start] !== undefined) {
            for (let i = newArray.length; i > index; i--) newArray[i] = newArray[i - 1]
            newArray[start] = uuid()
        } else {
            newArray.push(uuid())
        }
        setId(newArray)
    }

    const removeNewMultiChoise = (_id) => {
        if (multiChoiceId.length > 1) {
            const newArr = multiChoiceId.filter(id => {
                if (id !== _id) return id;
            });
            setId(newArr)
        }
    }

    // const onSubmitHandler = () => {
    //     const [inputObj] = inputState;
    //     let newArr = []
    //     for (const key of multiChoiceId) {
    //         if (inputObj[key] !== undefined) {
    //             newArr.push(inputObj[key])
    //         }
    //     }
    //     const result = [newArr].reverse();
    // }


    const multiChoiceEL = multiChoiceId.map(id => (
        <MultiChoiceV2
            key={id}
            _id={id}
            removeNewMultiChoise={removeNewMultiChoise}
            addNewMultiChoice={addNewMultiChoice}
            inputStateHandler={inputStateHandler}
        />
    ))

    return (
        <>
            {multiChoiceEL}
        </>
    )
}

const mapStateToProps = state => {
    return {
        inputState: state[MULTICHOICE.SELF][MULTICHOICE.INPUTSTATE],
        multiChoiceId: state[MULTICHOICE.SELF][MULTICHOICE.MULTICHOICEID],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setId: id => dispatch(setMultichoiceID(id)),
        setInput: item => dispatch(setMultichoiceInputstate(item))
    }
}

const MultiChoiceWrapperJoinRedux = connect(mapStateToProps, mapDispatchToProps)(MultiChoiceWrapper)

export default MultiChoiceWrapperJoinRedux;