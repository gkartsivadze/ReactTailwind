import { useState } from "react";

export default function useProfiler() {
    const profileState = useState([
        {
          id: 1,
          img: "/avatar-mark-webber.webp",
          name: "Mark Webber",
          type: "reaction",
          target: "My first tournament today!",
          time: "1m",
          seen: false
        },{
          id: 2,
          img: "/avatar-angela-gray.webp",
          name: "Angela Gray",
          type: "new-follower",
          time: "5m",
          seen: false
        },{
          id: 3,
          img: "/avatar-jacob-thompson.webp",
          name: "Jacob Thompson",
          type: "joined-your-group",
          target: "Chess Club",
          time: "1 day",
          seen: false
        },{
          id: 4,
          img: "/avatar-rizky-hasanuddin.webp",
          name: "Rizky Hasanuddin",
          type: "messaged",
          target: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
          time: "5 days",
          seen: true
        },{
          id: 5,
          img: "/avatar-kimberly-smith.webp",
          name: "Kimberly Smith",
          type: "commented-my-picture",
          target: "",
          time: "1 week",
          seen: true
        },{
          id: 6,
          img: "/avatar-nathan-peterson.webp",
          name: "Nathan Peterson",
          type: "reaction-my-post",
          target: "5 end-game strategies to increase your win rate!",
          time: "2 weeks",
          seen: true
        },{
          id: 7,
          img: "/avatar-anna-kim.webp",
          name: "Anna Kim",
          type: "left-group",
          target: "Chess Club",
          time: "2 weeks",
          seen: true
        }
      ])
      return profileState
};
