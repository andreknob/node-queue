import Mail from '../lib/Mail';

export default {
    async store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password
        };

        await Mail.sendMail({
            from: "Queue Test <queue@queuetest.com>",
            to: `${name} <${email}>`,
            subject: 'User sign up',
            html: `Hi ${name}, welcome to the node queue system`
        })

        return res.json(user);
    }
}