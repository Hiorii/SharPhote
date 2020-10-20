import React, {useState, useContext} from 'react';
import loginUser from '../../../../strapi/loginUser'
import registerUser from '../../../../strapi/registerUser';
import {useHistory} from 'react-router-dom';
import {UserContext} from '../../../../data/userData';
import styles from './Login.scss';
import global from '../../../../styles/global.scss'


const Login = () => {
  const history = useHistory();

  const {userLogin} = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('default');
  const [isMember, setIsMember] = useState(true);



  let isEmpty = !email || !password || !username;

  const toggleUser = () => {
    setIsMember((p)=>{
      let isMember = !p;
      isMember?setUsername('default'):setUsername('');
      return isMember;
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if(isMember){
      response = await loginUser({email, password});
    } else {
      response = await registerUser({email,password,username});
    }
    if(response){
      const {jwt:token, user:{username}} = response.data;
      const newUser = {token,username};
      userLogin(newUser);
      history.push('/products');
    } else {

    }
  }

  return (
    <section className={`${styles.form} + ${global.section}`}>
      <h2 className={global.sectionTitle}>
        {isMember ? 'zaloguj się' : 'stwórz konto'}
      </h2>
      <form className={styles.loginForm}>
        <div className={styles.formControl}>
          <label htmlFor='email'>e-mail</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor='password'>hasło</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {!isMember && <div className={styles.formControl}>
          <label htmlFor='username'>nazwa użytkownika</label>
          <input
            type='username'
            id='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        }
        {isEmpty && (
          <p className={styles.formEmpty}> wypełnij wszystkie pola</p>
        )}
        {!isEmpty && (
          <button
            type='submit'
            className={`${global.btn} + ${global.btnBlock} + ${global.btnPrimary}`}
            onClick={handleSubmit}
          >
            potwierdź
          </button>
        )}
        <p className={styles.registerLink}>
          {isMember?'musisz się zarejestrować':'masz już konto?'}
          <button type='button' onClick={toggleUser}>
            kliknij tutaj
          </button>
        </p>
      </form>
    </section>
  );
};

export default Login;
