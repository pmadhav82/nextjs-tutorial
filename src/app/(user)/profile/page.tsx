import ReloadButton from "@/components/ReloadButton";

const Profile = () => {
  const number = Math.random() * 100;
  if (number > 50)
    throw new Error(
      `Error occored because the number is ${number} which is greater than 50`
    );

  return (
    <>
      <h2>This is profile page which is in router group (user)</h2>
   <ReloadButton/>
    </>
  );
};

export default Profile;
