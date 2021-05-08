import Link from 'next/link'

// Fetching the number of route params required on the page
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(participant => {
        return {
            params: { id: participant.id.toString() }
        }
    });

    // The paths property is utilized to know the number of HTML pages to be generated
    return {
        paths,
        fallback: false
    }
}

// Fetching data for each individual route
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { participant: data }
    }
}

const Details = ({ participant }) => {
    return (
        <div className="content">
            <div className="participant-details">
                <h1>{participant.name}</h1>
                <p className="mt-5">Email:&nbsp; {participant.email}</p>
                <p>Contact:&nbsp; {participant.website}</p>
                <p>Website:&nbsp; {participant.website}</p>
                <p>Address:&nbsp; {participant.address.city}</p>
                <Link href="/participants"><a><button className="mt-4">Go Back</button></a></Link>
            </div>
        </div>
    );
}

export default Details;