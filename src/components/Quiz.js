import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Question from './Question';


// const initialState = {
//     currentQuestionIndex: 0,
//     questions: [],
// };

// const reducer = (state, action) => {
//     if(action.type === 'NEXT_QUESTION') {
//         return {
//             ...state,
//             currentQuestionIndex: state.currentQuestionIndex + 1,
//         };
//     }
//     return state;
// };


const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log('quizState', quizState);

    // const [state, dispatch] = useReducer(reducer, initialState);
    // console.log("state", state);

    // const [questions, setQuestion] = useState([]);
    // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // console.log("currentQuestionIndex", currentQuestionIndex);
    
    return (
        <div className='quiz'>
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations</div>
                    <div className="results-info">
                        <div>You have completed the quiz.</div>
                        <div>You've got 4 of {quizState.questions.length}</div>
                    </div>
                    <div className="next-button" onClick={() => dispatch({type: 'RESTART'})} >Restart</div>
                </div>
            )}
            {!quizState.showResults && (
            <div>
                <div className='score'>Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}</div>
                <Question />
                <div 
                    className='next-button'
                    onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                >
                    Next Question
                </div>
            </div>
            )}
        </div>
    );
}; 

export default Quiz;