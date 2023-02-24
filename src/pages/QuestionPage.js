import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import FormattedDate from '../components/FormattedDate';

import AnswersList from '../components/AnswersList';
import AnswersListResult from '../components/AnswersListResult';

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const QuestionPage = ({ question, author, authedUserID, authedUserAnswer }) => {
  return (
    <div>
      <NavBar />
      <div className="container center">
        <h4>
          Poll <span>by</span> <span>{question.author}</span>
        </h4>
        <div>
          <p className="sub-title">
            <FormattedDate timestamp={question.timestamp} />
          </p>
        </div>
        <div>
          <img src={author.avatarURL} width="150px" alt="Author's avatar" className="avatar" />
        </div>
        <div className="would-you-rather">
          <h3>Would You Rather</h3>

          {authedUserAnswer ? (
            <AnswersListResult question={question} authedUserAnswer={authedUserAnswer} />
          ) : (
            <AnswersList question={question} authedUser={authedUserID} />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUserID, users, questions }, props) => {
  const { question_id } = props.router.params;
  const authedUserAnswer = users[authedUserID]?.answers[question_id]
    ? users[authedUserID].answers[question_id]
    : null;
  return {
    question: questions[question_id],
    author: users[questions[question_id]?.author],
    authedUserID,
    authedUserAnswer,
  };
};
export default withRouter(connect(mapStateToProps)(QuestionPage));
