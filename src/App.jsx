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

  return (
    <>
    <div id="wrapper" className=" max-w-3xl mx-auto px-5 py-1">
      <Header handleClick={handleMarkAllAsRead} />
      { profiles.map(profile => <Notification profile={profile}  />) }
    </div>
    </>
  )
}

export default App