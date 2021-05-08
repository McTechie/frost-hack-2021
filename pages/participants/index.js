// List of Participants

import Link from "next/link"

const Participants = () => {
    return (
        <div className="content">
            <h1>Participants</h1>
            <Link href="/participants/invite"><a>Create</a></Link>
        </div>
    );
}
 
export default Participants;