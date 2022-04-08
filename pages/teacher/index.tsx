// export const getStaticProps = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     return {
//         props: { teachers: data }
//     }
// }
// const Teacher = ({ teachers }) => {
//     console.log(teachers);
//     return (
//         <ul>
//             {teachers.map((teacher) => (
//                 <li key={teacher.id}>{teacher.username}</li>
//             ))}
//         </ul>
//     )
// }

import React, { useState } from "react";
const Teacher = () => {
    const [fullname, setFullname] = useState('Ngo Tung Dat');
    const [isActive, setActive] = useState(false);
    console.log(isActive);
    return (
        <>
            <h1>{fullname}</h1>
            <button onClick={() => {
                setFullname("Đã cập nhật tên thành công!")
            }}>Change FullName</button>
            <h1>{isActive}</h1>
            <button onClick={() => {
                setActive(!isActive)
            }}>Change Active</button>
        </>
    )
}

export default Teacher;
