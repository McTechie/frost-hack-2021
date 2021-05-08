import Link from 'next/link'

// Fetching data in Next.js Apps
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { participants: data }
    }
}

const Participants = ({ participants }) => {
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
                                        <h1>{participant.name}</h1>
                                        <p className="mt-4">{participant.email}</p>
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