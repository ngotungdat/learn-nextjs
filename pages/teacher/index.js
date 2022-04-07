export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: { teachers: data }
    }
}
const Teacher = ({ teachers }) => {
    console.log(teachers);
    return (
        <ul>
            {teachers.map((teacher) => (
                <li key={teacher.id}>{teacher.username}</li>
            ))}
        </ul>
    )
}

export default Teacher;
