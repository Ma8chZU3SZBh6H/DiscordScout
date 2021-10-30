function App() {
    return <div>
        <form className="flex flex-col p-3 gap-3" method="post">
            <input className="border" type="text" value={process.env.TEST}/>
            <input className="border" type="password" />
            <input type="submit" />
        </form>
    </div>
}

export default App;