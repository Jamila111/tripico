import { signIn } from 'next-auth/react';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Tripico</h1>
            <button onClick={() => signIn('google')}>Login with Google</button>
            <button onClick={() => signIn('facebook')}>Login with Facebook</button>
            <button onClick={() => signIn('apple')}>Login with Apple</button>
        </div>
    );
};

export default Home;
