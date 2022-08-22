import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getPosts} from "./redux/features/postSlice";

function App() {
  const {posts, loading} = useSelector((state)=> state.post);
  console.log(posts.data, posts);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
   
  },[])

  //get the data the from api
  var posted = posts.data
  console.log(posted)
  if(loading){
    return <h3>Loading....</h3>
  }

  if(posted) {
  return (
    <div className="app">
      <h1>Nigeria Covid19 stats</h1>
      <div className="flex">
      <div className="case blue"><h3>Total Sample Test Cases {posted.totalSamplesTested}</h3></div>
      <div className="case yellow"><h3>Total Confirmed Cases  {posted.totalConfirmedCases}</h3></div>
      <div className="case green"><h3>Total Active Cases {posted.totalActiveCases}</h3></div>
      <div className="case red"><h3>Total Death Cases  {posted.death}</h3></div>
      </div>
      
      <div className='grid'>
        {posted.states.map((stateItem)=>
        <div key={stateItem._id} className="stats-card">
         <h3>{stateItem.state}</h3>
         <p>On Admission <strong>{stateItem.casesOnAdmission}</strong></p>
         <p>Confirmed Cases <strong>{stateItem.confirmedCases}</strong></p>
        < p>Deaths <strong>{stateItem.death}</strong></p>
         <p>Discharged <strong>{stateItem.discharged}</strong></p>
          </div>)}
      </div>
    </div>
  )};
}

export default App;
