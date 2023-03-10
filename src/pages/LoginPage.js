import { connect } from 'react-redux';
import { handleUserLogin } from '../slices/authedUserSlice';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ErrorsList from '../components/ErrorsList';
import PropTypes from 'prop-types';
import LoginButton from '../components/auth0/LoginButton';
import SignupButton from '../components/auth0/SignupButton';
import { errorsReset } from '../slices/errorsSlice';

const LoginPage = ({ dispatch, errors, authedUserID }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');
  const redirect = searchParams.get('redirect') ? searchParams.get('redirect') : '/home';

  useEffect(() => {
    if (authedUserID !== null) {
      navigate(redirect);
    }
  }, [authedUserID, navigate, redirect]);

  function handleChangeID(e) {
    if (errors && errors.length > 0) dispatch(errorsReset());
    setID(e.target.value);
  }
  function handleChangePW(e) {
    if (errors && errors.length > 0) dispatch(errorsReset());
    setPW(e.target.value);
  }

  function handleSumbit(e) {
    e.preventDefault();
    if (errors && errors.length > 0) dispatch(errorsReset());
    dispatch(handleUserLogin(id, pw));
  }
  return (
    <div className="login center">
      <img src="./hero.png" width="300px" alt="Would You Rather" />
      <h3>Employee Polls</h3>
      <div className="login-panel">
        <div>
          <form onSubmit={handleSumbit} data-testid="login-form">
            <div>
              <input
                type="text"
                placeholder="id"
                onChange={handleChangeID}
                value={id}
                data-testid="id-input"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="password"
                value={pw}
                onChange={handleChangePW}
                data-testid="pw-input"
              />
            </div>
            <ErrorsList errors={errors} />
            <button
              type="submit"
              disabled={id === '' || pw === ''}
              className="btn"
              data-testid="login-button"
            >
              Log In
            </button>
          </form>
        </div>
        <div>
          <div>
            <LoginButton redirect={redirect} title={'Auth0'} />
          </div>
          <div>
            <SignupButton redirect={redirect} title={'Auth0'} />
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  dispatch: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string),
  authedUserID: PropTypes.string
};
const mapStateToProps = ({ errors, authedUserID }) => ({ errors, authedUserID });
export default connect(mapStateToProps)(LoginPage);
