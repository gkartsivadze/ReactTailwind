export default function SubNotification({ profile }) {
    let middleText;

    switch (profile.type) {
        case "reaction":
            middleText = "reacted to your recent post ";
            break;
        case "new-follower":
            middleText = "followed you";
            break;
        case "joined-your-group":
            middleText = "has joined your group";
            break;
        case "messaged":
            middleText = "sent you a private message";
            break;
        case "commented-my-picture":
            middleText = "commented on your picture";
            break;
        case "reaction-my-post":
            middleText = "reacted to your recent post";
            break;
        case "left-group":
            middleText = "left the group";
            break;
    }
    
    return (
        <div>
            <p className=" font-medium">
                <strong>{ profile.name }</strong>
                {` ${middleText} `}
                { profile.type  != "messaged" && <span className=" text-cyan-800">{ profile.target }</span>}
                { profile.seen  || <svg className=" inline mx-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12"><circle cx="6" cy="6" r="3" fill="red"/></svg>}
            </p>
            <p className=" text-slate-600">
                { profile.time } ago
            </p>
        </div>
    )
};
