import axios from "axios";
import {useState} from "react";

interface LoginForm {
    login: {value: string},
    password: {value: string}
}

interface LoginResponse{
    mfa: boolean,
    sms: boolean,
    ticket: string | null,
    token: string | null
}

interface MfaResponse{
    message: string,
    code: number
}

interface MfaForm{
    code: {value: string}
}

function App() {
    const [mfa, setMfa] = useState(null);

    const loginHandler = async (e : React.FormEvent) => {
        e.preventDefault();
        const {login, password} = e.target as typeof e.target & LoginForm;

        try {
            const request_data = {
                login: login.value,
                password: password.value
            }
            const {data: loginResponse} = await axios.post<LoginResponse>("https://discord.com/api/v9/auth/login", request_data);
            if (loginResponse.mfa) {
                setMfa(loginResponse.ticket);
            }
            console.log(loginResponse);
        } catch (error) {
            console.log(error);
        }
        //setMfa("UHA");
        console.log(login);
    }

    const mfaHandler = async (e : React.FormEvent) => {
        e.preventDefault();
        const {code} = e.target as typeof e.target & MfaForm;
        //setMfa(null);
        const request_data = {
            code: code.value,
            ticket: mfa
        }
        const {data: mfaResponse} = await axios.post<MfaResponse>("https://discord.com/api/v9/auth/mfa/totp", request_data);
        console.log(mfaResponse);
    }

    return <div className="max-w-7xl mx-auto h-screen flex flex-col justify-center">
        <div className="mx-auto shadow-2xl rounded-md p-6">
                {mfa ? 
                <form onSubmit={mfaHandler} className="flex flex-col gap-3" method="post">
                    <h1 className="text-4xl text-gray-700">Login</h1>
                    <h2 className="text-xl text-gray-600">Two-factor authentication</h2>
                    <label className="text-gray-500" htmlFor="code">Code</label>
                    <input className="border py-1 px-2 rounded" name="code" id="code" type="text"/>
                    <input className="py-1 font-medium rounded bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-gray-700" type="submit" />
                </form> : 
                <form onSubmit={loginHandler} className="flex flex-col gap-3" method="post">
                    <h1 className="text-4xl text-gray-700">Login</h1>
                    <label className="text-gray-500" htmlFor="email">Email or phone number</label>
                    <input className="border py-1 px-2 rounded" name="login" id="email" type="text" placeholder="example@email.com" defaultValue={process.env.login}/>
                    <label className="text-gray-500" htmlFor="email">Password</label>
                    <input className="border py-1 px-2 rounded" name="password" type="password" defaultValue={process.env.password} />
                    <input className="py-1 font-medium rounded bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-gray-700" type="submit" value="Login" />
                </form>}
                
            </div>
    </div>
}

export default App;