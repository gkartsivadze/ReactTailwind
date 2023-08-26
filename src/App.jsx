import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx"
import Notification from "./components/Notification.jsx"
import useProfiler from "./hooks/useProfiler.jsx";

function App() {
  const [profiles, setProfiles] = useProfiler();

  function handleMarkAllAsRead() {
    setProfiles(profiles.map(profile => ({
      ...profile,
      seen: true
    })))
  }

  function handleAddNotification( data ) {
    setProfiles([...profiles, {
      id: Math.round(Math.random() * 50),
      img: "/avatar-angela-gray.webp",
      name: data.name,
      type:  "messaged",
      target: data.message,
      time: "New",
      seen: false
    }]);
  }

  return (
    <>
    <div id="wrapper" className=" max-w-3xl mx-auto px-5 py-1">
      <Header handleClick={handleMarkAllAsRead} />
      { profiles.map(profile => <Notification key={profile.id} profile={profile}  />) }
    </div>
    <Form handleAddNotification={handleAddNotification} />
    </>
  )
}

export default App