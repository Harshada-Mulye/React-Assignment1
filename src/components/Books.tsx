import React from 'react'
const Books = () => {
	const books=["harry potter","Lets run","Vyakti ani valli"]
    return(
		<div>
			{
				books.map(book=><h2 onClick={()=>alert(book)}>{book}</h2>)
				
			}
		
	 
</div>
	)
}

export default Books