import { useState } from "react";

const sortOptions = [
    { id: "programming", label: "Programming" ,  isChoosen:false},
    { id: "dataScience", label: "Data Science",  isChoosen:false },
    { id: "designing", label: "Designing" ,  isChoosen:false},
    { id: "networking", label: "Networking" ,  isChoosen:false},
];
function Sorted({isChoosen,setisChoosen}){
    return (
        <>
            <div className="sorted">
                <h3>Sorted By:</h3>
                {sortOptions.map((sort)=>(
                  <Sorted1 key={sort.id} SortedObj={sort}
                   isChoosen={isChoosen} setisChoosen={setisChoosen}/>

                ))}

            </div>
        </>
    )


}

function Sorted1({SortedObj,isChoosen,setisChoosen}) {
    function Ticked(){
    if (isChoosen === SortedObj.label) {
        setisChoosen(null);
    } else {
        setisChoosen(SortedObj.label);
    }
}
    return (
        <>
            <div className="sorted1">
               

                <label>
                    <input
                        type="checkbox"
                        name="sort"
                         value={SortedObj.label}
                         checked={isChoosen === SortedObj.label}
                        onChange={Ticked}
                    />
                    {SortedObj.label}
                </label>

            </div>
            
        </>
    );
}
export default Sorted;