import { createContext } from "react";
import { useState } from "react";
import Timestamp from "react-timestamp";

export const myPropertyContext = createContext();


const PropertyContextProvider = ({children}) => {

const time = <Timestamp relative date={Date()} /> 

const [property, setProperty] = useState([
{
    id: 2,
    area: "adeniyi jones",
    city: "Ikeja",
    state: "lagos",
    country: "Nigeria",
    beds: 3,
    bathroom: 2,
    amount: "450,000",
    title: "Nice apartment in center of Ikeja",
    type: "Entire apartment",
    premium: false,
    furnished: false,
    selfShowing: false,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatibus recusandae consequatur eligendi, nostrum alias voluptas non dicta. Vitae voluptatibus recusandae consequatur eligendi, nostrum alias voluptas non dicta.",
    photo: ["https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"],
    PostTime: time
},

{
    id: 10,
    area: "Ladylak",
    city: "Bariga",
    state: "Lagos",
    country: "Nigeria",
    beds: 1,
    bathrooms: 1,
    amount: "350,000",
    title: "Beautiful new studio apartment nearby the city center",
    type: "Entire house",
    premium: true,
    furnished: true,
    selfShowing: false,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident odit vitae rerum, tempore voluptatibus non suscipit exercitationem debitis tenetur. Iusto distinctio nisi asperiores!Vitae voluptatibus recusandae consequatur eligendi, nostrum alias voluptas non dicta.",
    photo: ["https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80"],
    PostTime: time
},
{
    id: 11,
    area: "Ladylak",
    city: "Bariga",
    state: "Lagos",
    country: "Nigeria",
    beds: 3,
    bathroom: 3,
    amount: "800,000",
    title: "Brand new studio apartment near on Lagos mainland",
    type: "Entire apartment",
    premium: true,
    furnished: false,
    selfShowing: true,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, provident. Ut totam, commodi minus praesentium in amet quidem. Vitae voluptatibus recusandae consequatur eligendi, nostrum alias voluptas non dicta.",
    photo: ["https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"],
    PostTime: time
},
{
    id: 92,
    area: "adeniyi jones",
    city: "Ikeja",
    state: "lagos",
    country: "Nigeria",
    beds: 3,
    bathroom: 2,
    amount: "450,000",
    title: "Nice apartment in center of Ikeja",
    type: "Entire apartment",
    premium: false,
    furnished: false,
    selfShowing: false,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatibus recusandae consequatur eligendi, nostrum alias voluptas non dicta. Vitae voluptatibus recusandae consequatur eligendi, nostrum alias voluptas non dicta.",
    photo: ["https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"],
    PostTime: time
},

{
    id: 80,
    area: "Ladylak",
    city: "Bariga",
    state: "Lagos",
    country: "Nigeria",
    beds: 1,
    bathrooms: 1,
    amount: "350,000",
    title: "Beautiful new studio apartment nearby the city center",
    type: "Entire house",
    premium: true,
    furnished: true,
    selfShowing: false,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident odit vitae rerum, tempore voluptatibus non suscipit exercitationem debitis tenetur. Iusto distinctio nisi asperiores!Vitae voluptatibus recusandae consequatur eligendi, nostrum alias voluptas non dicta.",
    photo: ["https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80"],
    PostTime: time
},
{
    id: 71,
    area: "Ladylak",
    city: "Bariga",
    state: "Lagos",
    country: "Nigeria",
    beds: 3,
    bathroom: 3,
    amount: "800,000",
    title: "Brand new studio apartment near Lagos mainland",
    type: "Entire apartment",
    premium: true,
    furnished: false,
    selfShowing: true,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, provident. Ut totam, commodi minus praesentium in amet quidem. Vitae voluptatibus recusandae consequatur eligendi, nostrum alias voluptas non dicta.",
    photo: ["https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"],
    PostTime: time
}
])

return (

    <myPropertyContext.Provider value={{property}}>
        {children}
    </myPropertyContext.Provider >

)

}

export default PropertyContextProvider