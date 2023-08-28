import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx"
import Notification from "./components/Notification.jsx"
import ReduxTester from "./components/ReduxTester.jsx";
import useProfiler from "./hooks/useProfiler.jsx";
import { SHOW } from "./redux/reducers.jsx";

function App() {
  const dispatch = useDispatch();
  const [profiles, setProfiles] = useProfiler();
  const registrationFormState = useSelector(state => state.registrationFormState);

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
    { registrationFormState && <Form handleAddNotification={handleAddNotification} /> }
    <ReduxTester />
    <button
          className=" absolute top-5 right-5 bg-cyan-300 p-5 rounded-3xl"
          onClick={() => dispatch(SHOW())}>Registration</button>
    </>
  )
}

export default App