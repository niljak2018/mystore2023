import { signIn,  getProviders } from 'next-auth/react';
import Image from 'next/image';
import Header from '../../components/header';
import styles from '../../styles/Signin.module.css';

const Signin = ({ providers }) => {
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <Header />
      <div className={styles.wrapper} />
      <div className={styles.content}>
        <div className={styles.cardWrapper}>
          <Image
            src="/logoWebBw.jpg"
            width="196px"
            height="64px"
            alt="App Logo"
                     />
            <div className={styles.cardContent}>
            
            <hr />
            {providers &&
              Object.values(providers).map(provider => (
                <div key={provider.name} style={{ marginBottom: 0 }}>
                  <button onClick={() => signIn(provider.id)} >
                    Sign in with{' '} {provider.name}
                  </button>
                </div>
              ))}
            </div>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src='/login_pattern.svg' alt='Pattern Background' layout='fill' className={styles.styledPattern} />
    </div>
  );
};

export default Signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,    
    },
  };
}
