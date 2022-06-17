const Button = (props) => {


  return ( 
    <div className="button "> 
      <button className="border-2 border-slate-300 bg-slate-200 font-bold hover:bg-slate-300 rounded-md text-xs p-1" >{props.title}</button>
    </div>
    );
}
 
export default Button;