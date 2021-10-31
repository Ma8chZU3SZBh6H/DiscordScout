import axios from "axios";
import {useState} from "react";
import useUser from "./hooks/useUser";
import { LoginForm, LoginResponse, MfaForm } from "./types";
import reqLogin from "./api/reqLogin";
import reqTest from "./api/reqTest";
import reqMfa from "./api/reqMfa";
import reqSms from "./api/reqSms";

function FormLogin() {
    const user = useUser();
    const [formStage, setFormStage] = useState(null);
    const [ticket, setTicket] = useState(null);
    const [error, setError] = useState(null);
    const [remember, setRemember] = useState(false);

    const loginHandler = async (e : React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const {login, password, remember} = e.target as typeof e.target & LoginForm;
        setRemember(remember.value);

        const loginResponse = await reqLogin(login.value, password.value);
        console.log(loginResponse);

        if (loginResponse.error === null && loginResponse.data.token === null) {
            if (loginResponse.data.mfa === true) {
                setTicket(loginResponse.data.ticket);
                setFormStage("mfa");
            }
            else if(loginResponse.data.sms === true){
                setTicket(loginResponse.data.ticket);
                setFormStage("sms");
            }
            else{
                setError("Login failed!");
            }
        }
        else{
            setError("Login failed!");
            setFormStage("login");
        }
        
    }

    const mfaHandler = async (e : React.FormEvent) => {
        e.preventDefault();
        setError(null);
        const {code} = e.target as typeof e.target & MfaForm;
        
        const mfaResponse = await reqMfa(code.value, ticket);
       
        if (mfaResponse.error === null) {
            user.login(mfaResponse.data.token);
            setFormStage("completed");
        }
        else{
            setError("Invalid code!");
        }
        console.log(mfaResponse);
    }

    const smsHandler = async (e : React.FormEvent) => {
        e.preventDefault();
        setError(null);
        const {code} = e.target as typeof e.target & MfaForm;
        
        const smsResponse = await reqSms(code.value, ticket);

        if (smsResponse.error === null) {
            user.login(smsResponse.data.token);
            setFormStage("completed");
        }
        else{
            setError("Invalid code!");
        }
        console.log(smsResponse);
    }

    switch (formStage) {
        case "completed":
            return <div className="flex flex-col gap-3">
            <h1 className="text-4xl text-gray-700">You are logged in!</h1>
        </div>
        case "loading":
            return <div className="flex flex-col gap-3">
            <h1 className="text-4xl text-gray-700">Loading....</h1>
        </div>
        case "sms":
            return <form onSubmit={smsHandler} className="flex flex-col gap-3" method="post">
            <h1 className="text-4xl text-gray-700">Login</h1>
            <h2 className="text-xl text-gray-600">Two-factor authentication</h2>
            <h3 className="text-xl text-red-600">{error}</h3>
            <label className="FormLabel" htmlFor="code">Code</label>
            <input className="FormInput" name="code" id="code" type="text"/>
            <input className="FormButton" type="submit" />
        </form>;
        case "mfa":
            return <form onSubmit={mfaHandler} className="flex flex-col gap-3" method="post">
            <h1 className="text-4xl text-gray-700">Login</h1>
            <h2 className="text-xl text-gray-600">Two-factor authentication</h2>
            <h3 className="text-xl text-red-600">{error}</h3>
            <label className="FormLabel" htmlFor="code">Code</label>
            <input className="FormInput" name="code" id="code" type="text"/>
            <input className="FormButton" type="submit" />
        </form>;
    
        case "login":
        default:
            return <form onSubmit={loginHandler} className="flex flex-col gap-3" method="post">
            <h1 className="text-4xl text-gray-700">Login</h1>
            <h3 className="text-xl text-red-600">{error}</h3>
            <label className="FormLabel" htmlFor="email">Email or phone number</label>
            <input className="FormInput" name="login" id="email" type="text" placeholder="example@email.com" defaultValue={process.env.login}/>
            <label className="FormLabel" htmlFor="email">Password</label>
            <input className="FormInput" name="password" id="password" type="password" defaultValue={process.env.password} />
            <div className="flex gap-3 items-center">
            <input name="remember" id="remember" type="checkbox" />
            <label htmlFor="remember">Remember me</label>
            </div>
            <input className="FormButton" type="submit" value="Login" />
        </form>;
    }
}

function App() {
    


    return <div className="max-w-7xl mx-auto h-screen flex flex-col justify-center">
        <div className="mx-auto shadow-2xl rounded-md p-6">
            <FormLogin/>  
        </div>
    </div>
}

export default App;