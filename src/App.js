import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <div className="text-center pt-4 text-2xl">
        Personal Digital Assistants
      </div>
      <div className="absolute flex-wrap w-screen h-screen flex justify-evenly items-center gap-5">
        <ProfileCard
          image={AlexaImage}
          title="Alexa"
          handle="@alexa99"
          color="#fff"
        />
        <ProfileCard
          image={CortanaImage}
          title="Cortana"
          handle="@cortana32"
          color="#fff"
        />
        <ProfileCard
          image={SiriImage}
          title="Siri"
          handle="@siri01"
          color="#ff0f0f"
        />
      </div>
    </div>
  );
}

export default App;
