import Link from 'next/link'
import fire from '../../config/firestore-config'

// Cloud Firestore Handle
const db = fire.firestore()

// Fetching data in Next.js Apps
export const getStaticProps = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await res.json();
    
    let data = []
    const ids =  []
    const res = await db.collection("participants").get()

    res.forEach((doc) => {
        data.push(doc.data());
        ids.push(doc.id);
    })

    // console.log(data)

    return {
        props: { participants: data, ids }
    }
}

const Participants = ({ participants, ids }) => {
    return (
        <div className="content">
            <h1>Participants</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col pt-2 px-5">
                        {participants.map(participant => (
                            <Link href={'/participants/' + participant.id} key={participant.id}>
                                <a>
                                    <div className="participant-list">
                                        <h1>{participant.Name}</h1>
                                        <p className="mt-4">{participant.Email}</p>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Participants;