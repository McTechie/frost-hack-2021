import Link from 'next/link'
import fire from '../../config/firestore-config'

// Cloud Firestore Handle
const db = fire.firestore()

// Fetching the number of route params required on the page
export const getStaticPaths = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await res.json();

    const data = []
    const res = await db.collection("participants").get()

    res.forEach((doc) => {
        data.push(doc.data());
    })

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
    let uid = context.params.id
    console.log(uid)
    const res = await db.collection("participants").where("id", "==", 1).get()
    let data = []

    res.forEach((doc) => {
        data.push(doc.data());
    })
    
    return {
        props: { participant: data[0] }
    }
}

const Details = ({ participant }) => {
    return (
        <div className="content">
            <div className="participant-details">
                <h1>{participant.Name}</h1>
                <p className="mt-5">Email:&nbsp; {participant.Email}</p>
                <p>Contact:&nbsp; {participant.Contact}</p>
                <p>Address:&nbsp; {participant.Address}</p>
                <Link href="/participants"><a><button className="mt-4">Go Back</button></a></Link>
            </div>
        </div>
    );
}

export default Details;