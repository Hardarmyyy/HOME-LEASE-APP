import React from 'react'
import Button from '../../Utilities/Button';
import { BsFilter } from "react-icons/bs";

const SearchProperty = () => {

const style = {
    form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    }
}

return (

<>
    <form style={style.form}>

        <div>
            <p> Location </p>
        </div>

        <div>
            <p> Minimum Amout </p>
        </div>

        <div>
            <p> Maximum Amount </p>
        </div>

        <div>
            <p> Bedroom and Bath </p>
        </div>

        <div>
            <p> Serviced </p>
        </div>

        <Button> <BsFilter> filter search </BsFilter> </Button>

    </form>

</>
)

}

export default SearchProperty