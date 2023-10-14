const FirstFun=({name, age, location, track, children})=>{
    return(<div>
        <h2> Task No.One</h2>
        <p>NAme:{name}</p>
        <p>Age:{age}</p>
        <p>Location:{location}</p>
        <p>Track:{track}</p>
        {children}
    </div>

    )
};
export default FirstFun;