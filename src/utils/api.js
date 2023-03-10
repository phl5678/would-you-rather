import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer, _loginUser } from './_DATA';

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
    users,
    questions,
  }));
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function loginUser(user) {
  return _loginUser(user);
}
