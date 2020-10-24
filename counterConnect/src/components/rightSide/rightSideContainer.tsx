import { connect } from 'react-redux';
import { updateMaxNumberAC, updateMinNumberAC, updateResAC } from '../../redux/counter-reducer';
import RightSide from './rightSide';

const mapStateToProps = (state: any) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateMinNumber: (num: number) => {
            dispatch(updateMinNumberAC(num))
        },
        updateMaxNumber: (num: number) => {
            dispatch(updateMaxNumberAC(num))
        },
        updateRes: (num: number) => {
            dispatch(updateResAC(num))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(RightSide);