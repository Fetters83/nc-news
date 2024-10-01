import { useEffect,useState } from "react";


function MobileFilterPopup({ trigger,filter,setTrigger,setSearchParams }) {





useEffect(()=>{

},[trigger])



  const [filterValue,setFilterValue] = useState('')
 

function handleOptionChange (event)  {
  console.log(event.target.value)
  setFilterValue(event.target.value);
};

function handleClick(event){
  event.preventDefault()
  if(filterValue === 'dateDesc'){
    setSearchParams({sort_by:'created_at',order:'DESC'})
    }
  if(filterValue === 'dateAsc'){
  setSearchParams({sort_by:'created_at',order:'ASC'})
  }
  if(filterValue === 'commentDesc'){
    setSearchParams({sort_by:'comment_count',order:'DESC'})
    }
  if(filterValue === 'commentAsc'){
  setSearchParams({sort_by:'comment_count',order:'ASC'})
  }
  if(filterValue === 'voteDesc'){
    setSearchParams({sort_by:'votes',order:'DESC'})
    }
  if(filterValue === 'voteAsc'){
  setSearchParams({sort_by:'votes',order:'ASC'})
  }
  setTrigger(false)

  
}

if (trigger){
 
  return (
    
    <>
    <section >
      <form action="">
        <section >
          {filter === "date" && (
            <>
              <label >
                <input
                  type="radio"
                  name="option"
                  value="dateDesc"
                  checked={filterValue === "dateDesc"}
                  onChange={handleOptionChange}
                />
                Newest to Oldest
              </label>
              <label >
                <input
                  type="radio"
                  name="option"
                  value="dateAsc"
                  checked={filterValue === "dateAsc"}
                  onChange={handleOptionChange}
                />
                Oldest to Newest
              </label>
            </>
          )}

          {(filter === "comment" || filter === "vote") && (
            <>
              <label >
                <input
                  type="radio"
                  name="option"
                  value={filter === "comment" ? "commentDesc" : "voteDesc"}
                  checked={
                    filterValue === (filter === "comment" ? "commentDesc" : "voteDesc")
                  }
                  onChange={handleOptionChange}
                />
                Highest to Lowest
              </label>
              <label >
                <input
                  type="radio"
                  name="option"
                  value={filter === "comment" ? "commentAsc" : "voteAsc"}
                  checked={
                    filterValue === (filter === "comment" ? "commentAsc" : "voteAsc")
                  }
                  onChange={handleOptionChange}
                />
                Lowest to Highest
              </label>
            </>
          )}
        </section>
      </form>

      <button
      
        onClick={() => {
          setTrigger(false);
        }}
      >
        X
      </button>
      <button onClick={()=>{handleClick(event)}}>Search</button>
    </section>
  </>
  );
}

}

export default MobileFilterPopup;
