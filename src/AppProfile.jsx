import "./App.css";
import Profile from "./components/Profile.jsx";
import Avatar from "./components/Avatar";

function AppProfile() {
  return (
    <>
      <Avatar
        image="https://images.unsplash.com/photo-1734630630491-458df4f38213?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1734630630491-458df4f38213?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
        name="Judy Park"
        title="Frontend Developer"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1734630630491-458df4f38213?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
        name="Judy PARK"
        title="Frontend Developer"
      />
      <Profile
        image="https://images.unsplash.com/photo-1734630630491-458df4f38213?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
        name="Judy Park"
        title="Frontend Developer"
      />
    </>
  );
}

export default AppProfile;
