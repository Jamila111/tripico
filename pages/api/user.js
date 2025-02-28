import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req });
    if (session) {
        const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo`, {
            headers: {
                Authorization: `Bearer ${session.accessToken}`,
            },
        });

        const data = await response.json();

        res.status(200).json({
            user: {
                email: data.email,
                firstName: data.given_name,
                lastName: data.family_name,
                birthdate: data.birthdate,
                picture: data.picture,
            },
        });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}
