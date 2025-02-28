import { signIn, useSession } from 'next-auth/react';

const Home = () => {
    const { data: session } = useSession();

    const handleLogin = async (provider) => {
        await signIn(provider);
    };

    return (
        <div>
            <h1>Welcome to Tripico</h1>
            <button onClick={() => handleLogin('google')}>Login with Google</button>
            <button onClick={() => handleLogin('facebook')}>Login with Facebook</button>
            <button onClick={() => handleLogin('apple')}>Login with Apple</button>

            {session && (
                <div>
                    <h2>User Info</h2>
                    <p>Name: {session.user.name}</p>
                    <p>Email: {session.user.email}</p>
                    <p>Picture: <img src={session.user.image} alt={session.user.name} /></p>
                </div>
            )}
        </div>
    );
};

export default Home;
