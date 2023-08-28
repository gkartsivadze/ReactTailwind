import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx"
import Notification from "./components/Notification.jsx"
import ReduxTester from "./components/ReduxTester.jsx";
import useProfiler from "./hooks/useProfiler.jsx";
import { SHOW } from "./redux/reducers.jsx";
import UseContextTester from "./components/UseContextTester.jsx";
import { createContext, useState } from "react";

export const SomeContext = createContext()

function App() {
  const dispatch = useDispatch();
  const [profiles, setProfiles] = useProfiler();
  const registrationFormState = useSelector(state => state.registrationFormState);
  const [randomString, setRandomString] = useState("a")


  function handleMarkAllAsRead() {
    setProfiles(profiles.map(profile => ({
      ...profile,
      seen: true
    })))
  }

  function handleAddNotification(data) {
    setProfiles([...profiles, {
      id: Math.round(Math.random() * 50),
      img: "/avatar-angela-gray.webp",
      name: data.name,
      type: "messaged",
      target: data.message,
      time: "New",
      seen: false
    }]);
  }

  return (
    <>
      <div id="wrapper" className=" max-w-3xl mx-auto px-5 py-1">
        <button
          onClick={() => setRandomString(prev => prev + "a")}
          style={{"--tw-shadow": "inset 0 2px 4px 0 rgb(0 0 0)"}}
          className=" p-5 absolute left-0 top-0 bg-cyan-400 shadow-inner font-extrabold active:shadow-none"
          >Test useContext</button>
        <Header handleClick={handleMarkAllAsRead} />
        {profiles.map(profile => <Notification key={profile.id} profile={profile} />)}
      </div>
      {registrationFormState && <Form handleAddNotification={handleAddNotification} />}
      <ReduxTester />
      <SomeContext.Provider value={randomString}>
        <UseContextTester />
      </SomeContext.Provider>
      <button
        className=" absolute top-5 right-5 bg-cyan-300 p-5 rounded-3xl"
        onClick={() => dispatch(SHOW())}>Registration</button>
    </>
  )
}

export default App